import "./signin.component.scss"
import { signInwithGooglePoup,signInwithApplePoup} from "../../utils/Firebase"

const SigninComponent = () =>{

    const LogGoogle = async () =>{
        const response = await signInwithGooglePoup();
        console.log(response)
    }
    const LogApple = async () =>{
        try {
            // eslint-disable-next-line no-undef
            const response = await signInwithApplePoup();
            console.log("Usuário autenticado:", response.user);
        } catch (error) {
            console.error("Erro na autenticação:", error.code, error.message);
        }
    }

    return (
        <>
           
            <div className="container-sign">
                <h1>Gelooo</h1>
                <button onClickCapture={LogGoogle}>Logar Google </button>
                <button onClickCapture={LogApple}>Logar no Apple</button>
            </div>

        
        </>
    )


}

export {SigninComponent}