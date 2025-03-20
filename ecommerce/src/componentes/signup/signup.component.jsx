import { useState } from "react"
import "./signup.component.scss"
import {FormInput} from "../form-input/form-input-component"
import { createUser,createUserDocumentFromAuth } from "../../utils/Firebase"

const FormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmpassword : '',
}

const SignupComponent = () =>{

    const [forms,setforms] = useState(FormFields)
    const { displayName,email,password,confirmpassword} = forms;

    const handleChange = (event) =>{
        const {name,value}= event.target

        setforms({...forms,[name] : value})

    }

    const resert = ()=>{
        setforms(FormFields)
    }

    const handleSubmit = async(event) =>{
        // console.log(event);  // Check the structure of the event
        // event.preventDefault();
        resert()
        if(password !== confirmpassword){
            alert('ola')
            return false
        }

        try{

            const {user} = await createUser(email,password)

            await  createUserDocumentFromAuth(user,{displayName})


        }catch(error){


            if(error.code === ' Firebase: Error (auth/email-already-in-use)'){

                alert('Email ja usado')
                return false;
                
            }else{

                console.log(error)


            }    

        }
    }

    return (
        <>
            <div className="container-signup">
                <h1>Inscriva-se </h1>
                    <form action={handleSubmit}>
                        <div className="container-input">
                            
                            <FormInput label={'Nome completo'} type="text" className="input"  required onChange={handleChange} name="displayName" value={displayName} />
                           
                        </div>
                        <div className="container-input">
                            <label htmlFor="">Email</label>
                            <input type="text"  className="input" required  onChange={handleChange} name="email" value={email} />
                        </div>
                        <div className="container-input">
                            <label htmlFor="">Senha</label>
                            <input type="password"  className="input" required  onChange={handleChange} name="password" value={password} />
                        </div>
                        <div className="container-input">
                            <label htmlFor="">Nova senha</label>
                            <input type="password"  className="input" required  onChange={handleChange} name="confirmpassword" value={confirmpassword} />
                        </div>
                        
                        <div>
                            <button type="submit" className="btn-forms">Submit</button>
                        </div>
                        
                    </form>
                

            </div>
        </>
    )


}

export { SignupComponent}