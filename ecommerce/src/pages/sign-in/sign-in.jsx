import "./sign-in.scss"

import {SigninComponent } from "../../componentes/signin/sign.component"
import { SignupComponent} from "../../componentes/signup/signup.component"


const Signin = () =>{


    return (
        <>
        
            <div className="container">
                <div className="subcontainer">
                    <SigninComponent />

                </div>
                <div className="subcontainer">
                    <SignupComponent/>
                </div>

            </div>

        
        </>
    )


}

export {Signin}