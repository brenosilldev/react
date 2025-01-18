import './search-box.component.css'


const Search = ({type,placeholder,onChangeHandler}) =>{


    return(
        <>
        
         <div>
                <input 
                    type={type}
                    placeholder={placeholder}
                    className='search-box' 
                    onChange={onChangeHandler}/>
            </div>
        </>
    )
}

// class Search extends Component{
    
//     render(){

//         const {type,placeholder,onChangeHandler} = this.props;

//         return(
//             <>
//              <div>
//                 <input 
//                     type={type}
//                     placeholder={placeholder}
//                     className='search-box' 
//                     onChange={onChangeHandler}/>
//             </div>
            

//             </>
//         )
//     }

// }

export default Search;

