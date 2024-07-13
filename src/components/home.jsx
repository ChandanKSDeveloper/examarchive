import React from "react";
import { Link } from "react-router-dom";
import Card from "./card/card";

function Home(){
    return(
        <main
            className="bg-gradient-to-b from-green-100 from-10% to-green-200 to-90%  lg:text-2xl sm:text-xl dark:bg-gradient-to-b dark:from-slate-700  dark:to-slate-900 dark:text-white h-full relative "
            >
            
            {/* Hero Section*/}

            {/* Desktop */}
            <section
                className="w-full h-[500px] p-5  relative hidden sm:block">
                <div className="absolute bottom-16 right-0 ">
                    <img src="./cat.png" alt="cat" className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]  hidden sm:block  " />
                </div>
                <div>
                    <h1 className="text-4xl lg:text-5xl dark:text-[#FFF8DC] font-extrabold mb-5 p-5 lg:mx-10">BCA Exam Archive</h1>
                    
                    <h3 className="text-2xl dark:text-[#FFF8DC] font-semibold w-4/5 p-5 lg:mx-10">Find all the previous Year Question paper For BCA in One place</h3>
                    <Link
                        to = '/pyqSec'>
                        <button className="p-3 bg-amber-300 border-4  dark:border-white hover:border-black rounded-full my-24 mx-5 text-3xl font-semibold text-black dark:hover:border-amber-300 dark:hover:bg-transparent hover:bg-cyan-300  hover:text-black dark:hover:text-white ease-in duration-200 lg:mx-20 hover:scale-105">Get Pyq's Now</button>

                    </Link>
                </div>

            </section>

            {/* Mobile */}

            <section className="sm:hidden w-auto mx-5 mb-8 pt-6  h-[500px] relative  shadow-black ">

                <div className="w-full h-full  border-l-4 border-r-4 border-t-4  dark:border-white border-blue-500 rounded-lg">
                    <img src="./about4.jpg" alt="background img"  className="w-full h-full object-cover pb-28  "/>

                </div>

                <div className="absolute bottom-0 w-full px-4 dark:bg-gradient-to-t dark:from-black dark:to-slate-900
                    bg-gradient-to-t from-green-400 to-green-100
                 border-l-4 border-r-4 border-b-4 dark:border-slate-400 border-emerald-700  rounded-lg">
                    <h1
                        className="text-2xl ark:text-[#FFF8DC] font-semibold py-2">
                        BCA Exam Archive
                    </h1>
                    <p
                        className="text-[18px] dark:text-[#FFF8DC] capitalize">
                        Find all the previous Year Question paper For BCA in One place
                    </p> 

                    <Link to="/pyqSec">

                        <button className="p-2 bg-yellow-200 border-4  dark:border-white border-black rounded-full text-xl font-bold text-black my-4 ">Get Pyq's Now
                        </button>
                    </Link>
                </div>

            </section>




            <section className="w-auto flex flex-col text-center mx-auto">
             
                <h2 className="text-3xl  lg:text-4xl font-bold lg:mb-10 mb-5 border-b-2 w-max mx-auto">
                    Why Us ?
                </h2>

            <Card/>
        
            
            </section>
        </main>
    )
}
export default Home;