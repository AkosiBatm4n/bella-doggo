import React, {useEffect, useState} from 'react';
import logo from '../assets/OIP.jpg';
import {Link} from "react-scroll";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSticky, setIsSticky] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() =>{
    const handleScroll =() => {
        if(window.scroll > 100){
        setIsSticky(true);
        }
        else{
        setIsSticky(false);   
        }    
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
    window.addEventListener('scroll', handleScroll);
    }
    });
const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About Us", path: "about us"},
        {link: "Products", path: "products"},
        {link: "Testimonials", path: "testimonials"},
        {link: "FAQS", path: "faqs"},
    ];
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
<nav>
    <div>
        <a href=""><img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-[#263238]'>SAINT FRANCIS OF ASSISI COLLEGE</span></a>
    </div>
     <ul className='md:flex space-x-12 hidden'> 
        {
            navItems.map(({link, path}) =><Link to={path}>{link}</Link>)
        }
     </ul> 
</nav>
    </header>
  );
};

export default Navbar;