import { Header, 
Logo, 
NavBar, 
NavList, 
List,  
MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }

    useEffect(hidleMenu)

    return(
        <Header>
            <Logo href="/">Foods</Logo>
            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>

            <NavBar ref={navRef} onScroll={hidleMenu}>
                <NavList>
                    <List>
                        <Link className="nav-link" smooth to={'#home'}>Home</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={'#about'}>About</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={'#menu'}>Menu</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={'#services'}>Services</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={'#contact'}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>
        </Header>
    )
}