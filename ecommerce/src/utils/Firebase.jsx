// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth"


import  {getFirestore,doc,getDoc,setDoc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDYGl_bnxDEypzn3eyTPf_1LblOp6Anr_Y",
  authDomain: "ecommerce-project-96afe.firebaseapp.com",
  projectId: "ecommerce-project-96afe",
  storageBucket: "ecommerce-project-96afe.firebasestorage.app",
  messagingSenderId: "532440773717",
  appId: "1:532440773717:web:be8cebbad852ce170a10dc"
};

export const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
    prompt : 'select_account'
})

export const auth = getAuth();

export const signInwithGooglePoup = () => signInWithPopup(auth,googleprovider)

// export const signInwithGoogleRedirect =  () => signInWithRedirect(auth,googleprovider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth,informacaoadicional= {}) =>{
   const userdocRef = doc(db,'users',userAuth.uid)
   const usersnap = await getDoc(userdocRef)
   
  if(!usersnap.exists()){
      const { displayName,email} = userAuth;
      const created = new Date();

      try{
          await setDoc(userdocRef,{
            displayName,
            email,
            created,
            ...informacaoadicional
          })
      }catch(error){
        console.log('Erro: ',error.message)

      }
  }

  return userdocRef

}



export const  createUser = async (email,password) => {
  
  if(!email || !password) return;
  const create = createUserWithEmailAndPassword(auth,email,password)

  return create

}