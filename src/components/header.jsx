import React, { useState } from "react";
import {Link,NavLink} from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./logo";
import ToggleButton from './button/toggleButton.jsx'

function Header() {

    const [nav, setNav] = useState(false);

    const handleNav= () => {
        setNav(!nav);
    }

    const navItems = [
        {
            id:1 , text:'Home', to:'/'
        },
        {
            id:2 , text:'BCA pyq', to:'/pyqSec'
        },
        {
            id:3 , text:'About', to:'/about'
        },
    ]



    return(
        <nav
            className="bg-green-300 dark:bg-black flex justify-between items-center h-28  md:h-36 w-full lg:px-20 mx-auto p-4 dark:text-white ">

            {/* Logo and Name  */}
            <div
                className="flex py-2 justify-between items-center">
                
                <Link
                    to='/'>
                    <Logo />
                </Link>

                <Link
                    to='/home'
                    className="font-bold text-3xl sm:text-3xl lg:text-5xl sm:font-extrabold ml-4"
                    >
                    Exam Archive 
                </Link>
            </div>

       

            {/* Desktop navItems */}
            <div className="flex relative">

                <ul
                    className="hidden md:flex font-semibold text-2xl mt-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.to}
                                className={({isActive})=> 
                                `p-2 hover:bg-[#00df9a] rounded-full m-2 cursor-pointer duration-300 hover:text-black`
                                }
                                >
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="mr-3 ml-5 mb-6">

                <ToggleButton />
                </div>

           

            {/* Mobile responsive */}

            {/* Mobile nav Icon */}
            <button 
                onClick={handleNav}
                className={`block md:hidden z-40 dark:text-white relative`}>
                {nav ? <AiOutlineClose size={22}/> : <AiOutlineMenu size={22}/> }
            </button>

            {/* Mobile Navitem */}

                <ul
                    className={
                        nav ? 'fixed md:hidden left-0 top-0 w-[100%] h-full z-10 border-r-gray-900 bg-green-300 dark:bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[100%] duration-500  fixed top-12 bottom-0 left-[100%] z-10 '
                    }>

                    {/* Mobile logo */}

                    <h1
                        className="w-full text-3xl font-bold text-[#1F1F1F] dark:text-[#F9F6EE]  m-10">
                        Exam Archive
                    </h1>
                    {navItems.map((item)=>(
                        <li key={item.id}
                            className="my-5 transform -skew-x-12 mx-8 font-semibold text-xl ">
                        <NavLink
                            to={item.to}
                            onClick={handleNav}
                            className={({isActive})=> 
                            `p-3  rounded-full dark:text-[#F9F6EE] hover:bg-[#00df9a] dark:hover:text-[#1F1F1F] cursor-pointer duration-300 text-black `
                             }
                            >
                            {item.text}
                        </NavLink>
                        
                    </li>
                    ))}

                   
                    
                    
                </ul>
                </div>
        </nav>

    )
}

export default Header;