// import React, { useEffect, useState } from "react";
// import { AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

// function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
//     const [current, setCurrent] = useState(1);

//     const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]]

//     // const prev = () => {
//     //     setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
//     // };
//     const prev = () => {
//         setCurrent((prevIndex) => (prevIndex === 0 ? slides.length : prevIndex - 1));
//     };

//     // const next = () => {
//     //     setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
//     // };
//     const next = () => {
//         setCurrent((prevIndex) => (prevIndex === extendedSlides.length - 1 ? 1 : prevIndex + 1));
//     };

//     useEffect(() => {
//         if (!autoSlide) return;
//         const slideInterval = setInterval(next, autoSlideInterval);
//         return () => clearInterval(slideInterval);
//     }, [autoSlide, autoSlideInterval]);


//     useEffect(() => {
//         if(current === 0){
//             setTimeout(() => setCurrent(slides.length), 500)
//         } else if (current === extendedSlides.length - 1){
//             setTimeout(() => setCurrent(1),500)
//         }
//     },[current, slides.length, extendedSlides.length])

//     return (
//         <div className="overflow-hidden relative flex justify-center">
//             <div
//                 className="flex transition-transform ease-out duration-500"
//                 style={{ transform: `translateX(-${current * 100}%)`, width: `${extendedSlides.length * 100}%` }}
//             >
//                 {/* {React.Children.map(slides, (slide, index) => (
//                     <div
//                         key={index}
//                         className="flex-shrink-0 w-full flex justify-center"
//                     >
//                         {slide}
//                     </div>
//                 ))} */}

//                 {
//                     extendedSlides.map((slide, index) => (
//                         <div key={index} className="flex-shrink-0 w-full flex justify-center">
//                             {slide}
//                         </div>
//                     ))
//                 }
//             </div>

//             <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <button
//                     onClick={prev}
//                     className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//                 >
            
//                     <AiFillCaretLeft size={30}/>

//                 </button>
//                 <button
//                     onClick={next}
//                     className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//                 >
//                     <AiFillCaretRight size={30}/>
//                 </button>
//             </div>
//             <div className="absolute bottom-4 right-0 left-0">
//                 <div className="flex items-center justify-center gap-2">
//                     {slides.map((_, i) => (
//                         <div
//                             key={i}
//                             className={`transition-all w-3 h-3 bg-white rounded-full ${current === i +1 ? "p-2" : "bg-opacity-50"}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carousel;
