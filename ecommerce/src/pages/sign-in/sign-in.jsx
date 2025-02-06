import "./sign-in.scss"

import {SigninComponent } from "../../componentes/signin/sign.component"
import { SignupComponent} from "../../componentes/signup/signup.component"


const Signin = () =>{


    return (
        <>
            <section>
                <div className="container-sign">
                    <div className="subcontainer">
                        <SigninComponent />

                    </div>
                    <div className="subcontainer">
                        <SignupComponent/>
                    </div>

                </div>

            </section>
        </>
    )


}

export {Signin}