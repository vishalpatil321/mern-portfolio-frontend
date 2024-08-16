import { NavLink} from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import './Navbar.css';
import { useState } from "react";
export const Navbar = () => {
   const [showmenu , setShowmenu] = useState(false);
   const [navColor,setNavColor] = useState(true);

   const changeNavColor = () => {
    if(window.scrollY >= 40){
        setNavColor(false);
    }
    else{
        setNavColor(true);
    }
   };

   window.addEventListener('scroll',changeNavColor);
    return(
        <nav className={navColor ? 'nav': 'changeNav'}>
         <div className="my-name">
            <h3 >Vishal Dhone</h3>
            <button className="bar" onClick={() => {
                setShowmenu(!showmenu);
            }}><FaBars /></button>
         </div>
          <div className={showmenu ? "options-mobile-menu" : "options"}>
           <NavLink className="menu" to='/About' onClick={() => {setShowmenu(false)}}>About me</NavLink>
           <NavLink className="menu" to='/Skills' onClick={() => {setShowmenu(false)}}>Skills</NavLink>
           <NavLink className="menu" to='/Project' onClick={() => {setShowmenu(false)}}>Projects</NavLink>
           <NavLink className="menu" to='/Contact' onClick={() => {setShowmenu(false)}}>Contact</NavLink>
          </div>
        </nav>
    );
};