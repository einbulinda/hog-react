import 'bulma/css/bulma.min.css'
import Navbar from 'react-bulma-components'
import './styles.scss'

import Logo from './../../assets/logos/mainLogo.png'
import { Navbar } from 'react-bulma-components'

const Header = props =>{
   return(
       <Navbar>
           <NavbarBrand>
               <NavbarItem href='/'>
                   <img src={Logo} alt="House of Glamour Logo" height="28"/>
               </NavbarItem>
               <NavbarBurger/>
           </NavbarBrand>
           <NavbarMenu>
               <NavbarContainer>
                   <NavbarItem hoverable="true" href="/">
                       Home
                   </NavbarItem>
                   <NavbarItem hoverable="true" href="/about">
                       Our Story
                   </NavbarItem>
                   <NavbarItem hoverable="true" href="/products">
                       Products
                   </NavbarItem>
                   <NavbarItem hoverable="true" href="/sale">
                       Sale
                   </NavbarItem>
                   <NavbarItem hoverable="true" href="/contact">
                       Lets Talk
                   </NavbarItem>
               </NavbarContainer>
               <NavbarContainer align="end">
                   <NavbarItem href="/account">My Account</NavbarItem>
                   <NavbarItem href="/wishlist">Wishlist</NavbarItem>
                   <NavbarItem href="/cart">Cart</NavbarItem>
               </NavbarContainer>
           </NavbarMenu>
       </Navbar>
   )
}

export default Header