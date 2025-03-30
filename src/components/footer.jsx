import React from "react";

function Footer(){
    console.log(new Date().getFullYear());
    
    return(
        <footer
            className="text-center bg-pink-100 lg:text-2xl sm:text-xl dark:bg-slate-900 pb-4">
            <p className="dark:text-white"><span><i className="ri-copyright-line dark:text-white "></i></span> {new Date().getFullYear()} BCA Exam Archive . All rights reserved.</p>
        </footer>

    )
}

export default Footer;