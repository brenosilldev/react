import "./signin.component.scss"
import { signInwithGooglePoup,createUserDocumentFromAuth} from "../../utils/Firebase"




const SigninComponent = () =>{

    const CadastroGoogle = async () =>{
        const response = await signInwithGooglePoup();
        const {user} = response
        await createUserDocumentFromAuth(user)      
        
    }
    

    return (
        <>
           
            <div className="container-sign">

                <h1>Login</h1>
                <form action="">
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" required />
                    </div>
                </form>
                <button onClickCapture={CadastroGoogle}>Cadastro Google </button>
                
            </div>

        
        </>
    )


}

export {SigninComponent}