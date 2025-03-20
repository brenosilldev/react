import "./form-input.scss"


export const FormInput = ({label,...otherprops}) =>{

    return(
        <>
        
            <label>{label}</label>
            <input 
                
                {...otherprops}
              
            />
        </>
    )
}