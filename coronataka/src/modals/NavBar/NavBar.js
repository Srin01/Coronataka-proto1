
import React, {useState} from 'react';
import {Navbar,NavbarBrand , NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';

const NavBarExample = (props) => {
    const[collapsed, setCollapsed] = useState(true)

    const toggleNavBar =  () => {setCollapsed(!collapsed)}

    return (
        <div>
            <Navbar color="faded" light expand = "md">
                <NavbarBrand href ="/" className="header">Coronataka</NavbarBrand>
                <NavbarToggler onClick ={toggleNavBar} className ="mr-2" />
                <Collapse isOpen ={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href = "/" >Hospitals Near Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href = "/">Statistics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href = "/">Current Covid-19 cases</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href = "/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}
export default NavBarExample