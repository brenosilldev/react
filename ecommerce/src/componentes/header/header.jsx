import './header.style.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from "../../assets/imagens/crown.svg"
import { FaUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";

const Header = () => {

    return(
        <>  
            <header>
               <div className='logo-container'>
                    <Link to='/'>
                         <Logo className='logo' />
                    </Link>
               </div>
               <div className='nav-links-container'>
                  
                    <Link className='nav-link'to={'/shop'} ><IoMdContacts title='Contacts' size={27}/></Link>
                    <Link className='nav-link'to={'/SignIn'} ><FaUser title='SIGN IN' size={27}/></Link>
                    <Link className='nav-link'to={'/shop'} >
                     <RiShoppingCartLine size={27} title='Cart'/>
                    </Link>

               </div>
            </header>
        
        </>
    )
}

export { Header }