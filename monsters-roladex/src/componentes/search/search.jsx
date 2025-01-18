import { Component } from"react"

class Search extends Component{
    
    render(){

        const {type,placeholder,onChangeHandler} = this.props;

        return(
            <>
             <div>
                <input 
                    type={type}
                    placeholder={placeholder}
                    className='input-busca' 
                    onChange={onChangeHandler}/>
            </div>
            

            </>
        )
    }

}

export default Search;

