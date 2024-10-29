import React, { useRef, useState } from "react";
import GridItems from '../data file/aboutData';
import { UseIsVisible } from "../hooks/useIsVisible";

function About(){
    const slideLeft = useRef();
    const isVisibleLeft = UseIsVisible(slideLeft);

  

  

    return(

        <div className="bg-gradient-to-b from-green-100 from-10% to-green-200 to-90%  px-5 py-8 md:px-10 lg:text-2xl sm:text-xl dark:bg-gradient-to-b dark:from-slate-800  dark:to-slate-900 dark:text-white">

        {/* Desktop view */}
            <div className="sm:grid gap-6 hidden">
                {GridItems.map((item, index) => (
              
                <div key={item.id} className="flex items-center mx-4 mb-4 hover:scale-105 ease-in-out duration-500  ">   
                    {!((index % 2 === 0 && index > 0) || index === 0) ? (
                    <>
                        <div className="w-3/12 ">

                            <img src={item.imgSrc} alt={item.heading} className="h-auto w-auto bg-cover rounded-full shadow-2xl drop-shadow-2xl inset-0 " />
                        
                        </div>

                        <div className={`w-9/12  h-full px-5 lg:pl-20 border-r-4 border-blue-400 dark:border-white rounded-3xl  flex flex-col justify-center `}>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 mt-2  font-bold text-[#1F1F1F] dark:text-[#F8F8FF] ">{item.heading}</h2>

                            <p className="text-xl lg:text-2xl italic font-medium lg:pr-14 text-left lg:my-10 dark:text-[#F0F8FF] flex items-center">{item.text}</p>

                        </div>
                    </>
                    ) : (
                    <>
                       
                        <div className={`w-9/12  h-full px-5 lg:pl-20 border-l-4 border-blue-400 dark:border-white rounded-3xl pl-10  flex flex-col justify-center`}>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 mt-2 font-bold text-[#1F1F1F] dark:text-[#F8F8FF]">{item.heading}</h2>
                        
                            <p className="text-xl lg:text-2xl italic font-medium lg:pr-14 lg:my-10 dark:text-[#F0F8FF]">{item.text}</p>
                        
                        </div>

                        <div className="w-3/12">

                            <img src={item.imgSrc} alt={item.heading} className="h-auto w-auto bg-cover rounded-full shadow-2xl drop-shadow-2xl inset-0  " />
                        
                        </div>
                    </>
                    )}
                </div>
                        ))}
            </div>

            {/* Mobile view */}

            <div className="visible sm:hidden flex flex-col justify-center items-center ">
                {GridItems.map((item,index) => (
                    <div key={item.id} className="relative h-[450px] w-10/12  rounded-md mb-10 border-b-[10px] border-teal-400">

                        <img src={item.imgSrc} alt={item.heading} className="z-0 h-full w-full rounded-md object-cover" />
                    
                        <div className="absolute top inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                        <div className="absolute bottom-4  text-left px-3 w-full">
                          
                            <h1 className="font-semibold text-white  text-2xl">{item.heading}</h1>
                          
                            <p className="mt-2 text-xl text-gray-300 mb-7">
                                {item.text}                          
                            </p>

                        </div>
                    </div>
                ))}
            </div>

       
            <section ref={slideLeft} className={`bg-red-200 text-red-600 p-4 mx-auto text-center border-l-8 border-red-600 rounded-md mt-4 ${isVisibleLeft ? 'animate-slideLeft' : ''}`}>
                <p> <span className="font-semibold ">Disclaimer :</span> This is not the official site of Gurugram University. It is a student-run site to help fellow students by providing previous year question papers.</p>
            </section>
        </div>
        
    )
}
export default About;
