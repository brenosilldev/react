// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,OAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDYGl_bnxDEypzn3eyTPf_1LblOp6Anr_Y",
  authDomain: "ecommerce-project-96afe.firebaseapp.com",
  projectId: "ecommerce-project-96afe",
  storageBucket: "ecommerce-project-96afe.firebasestorage.app",
  messagingSenderId: "532440773717",
  appId: "1:532440773717:web:be8cebbad852ce170a10dc"
};

export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const providerapple = new OAuthProvider('apple.com');

provider.setCustomParameters({
    prompt : 'select_account'
})

providerapple.setCustomParameters({
    // Localize the Apple authentication screen in French.
    locale: 'pt_BR'
  });

export const auth = getAuth();
export const signInwithGooglePoup = () => signInWithPopup(auth,provider)
export const signInwithApplePoup = () => signInWithPopup(auth,providerapple)


