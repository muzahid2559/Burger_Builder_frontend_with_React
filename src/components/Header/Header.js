import React from "react";
import './Header.css';
import { Navbar, NavbarBrand, Nav, NavItem} from "reactstrap";
import Logo from '../../assets/images/logo/logo.png'
import { NavLink}  from "react-router-dom";

const Header = () =>{
    return(
        <div className="Navigation">
           <Navbar style={{ backgroundColor: "#D70F64", height: "70px"}}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"> <img src={Logo} alt ="Logo" width ="80px"></img> </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink to="/" className="NavLink">Burger Builder</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/login" className="NavLink">Login</NavLink>
                    </NavItem>

                </Nav>
           </Navbar>
        </div>
    )

}

export default Header;