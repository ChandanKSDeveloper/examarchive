// import React from 'react'
// import Carousel from './carousel';

// const data = [
//     {
//         id: 1,
//         feature: "Wide Collection",
//         about: "Access a wide range of previous year question papers from various BCA subjects.",
//         image: "/img1.jpg"
//     },
//     {
//         id: 2,
//         feature: "Easy Navigation",
//         about: "Easily navigate through different categories and find the papers you need.",
//         image: "/img2.jpg"
//     },
//     {
//         id: 3,
//         feature: "Latest PYQ's",
//         about: "Stay updated with the latest question papers to enhance your preparation.",
//         image: "/img3.jpg"
//     },
//     {
//         id: 4,
//         feature: "Exam Pattern",
//         about: "Improve your understanding of the exam pattern and question types.",
//         image: "/img4.jpg"
//     },
//     {
//         id: 5,
//         feature: "Confidence Boost",
//         about: "Practice with real exam questions to boost your confidence.",
//         image: "/img5.png"
//     }
// ];

// function Card() {
//   return (
//     <div className='flex justify-center items-center pb-8'>
//       <Carousel autoSlide={true} autoSlideInterval={5000}>
//         {data.map((item) => (
//           <div key={item.id}
//               className="relative h-[420px] lg:h-[450px] w-[320px] lg:w-[350px] rounded-md ">
//                <img
//                   src={item.image}
//                   className="z-0 h-full w-full rounded-md object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//               <div className="absolute bottom-4 left-4 text-left">
//                   <h1 className="font-semibold text-white lg:text-3xl sm:text-2xl">{item.feature}</h1>
//                   <p className="mt-2 text-xl text-gray-300 lg:text-2xl sm:xl mb-7">
//                       {item.about}
//                   </p>
//               </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   )
// }

// export default Card


// // <div className='flex'>
// //     {
        
// //         data.map((item) => (
// //             <div key={item.id}
// //                 className="relative h-[450px] w-[350px] rounded-md mx-1">
// //                  <img
// //                     src={item.image}
// //                     className="z-0 h-full w-full rounded-md object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
// //                 <div className="absolute bottom-4 left-4 text-left">
// //                     <h1 className="text-lg font-semibold text-white">{item.feature}</h1>
// //                     <p className="mt-2 text-sm text-gray-300">
// //                         {item.about}
// //                     </p>
            
// //                 </div>
// //             </div>
// //         ))
// //     }

// // </div> 