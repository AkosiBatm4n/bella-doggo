import React, {useEffect, useState} from 'react';
import logo from '../assets/OIP.jpg';
import {Link} from "react-scroll";

import { BsXCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

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
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
            <a href=""><img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-[#263238]'>SAINT FRANCIS OF ASSISI COLLEGE</span></a>

            <ul className='md:flex space-x-12 hidden'> 
                {
                    navItems.map(({link, path}) =><Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base test-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                 }
            </ul> 
<div className='space-x-12 hidden hidden lg:flex items-center'>
        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a><button className='bg-neutralPeriwinkle text-white py-2 px-4 transistion-all duration-300 rounded hover:bg-neutralDGrey'>SIGN DITO BEH</button>   
</div>
    
<div className='md:hidden'>
    <button
        onClick ={toggleMenu}
        className = ' text-brandPrimary focus:outline-none focus:text-gray-500'> 
    {
     isMenuOpen ? (<BsXCircle className='h-6 w-6 text-naturalDGrey'/>) : (<FaBars className='h-6 w-6 text-naturalDGrey'/>)
        }  
</button>       
</div>
</div>
<div className={'space-y-4 px-4 mt-16 py-7 bg-neutralPeriwinkle'}>
    {
        navItems.map(({link, path}) =><Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base test-gray900 hover:text-neutralGrey first:font-medium'>{link}</Link>)
        }
</div>
</nav>
    </header>
  );
};

export default Navbar;