// import React from 'react'

// function Contact() {
//   return (
//     <div className=' max-w-screen min-h-screen py-14 px-10 flex flex-col justify-center items-center gap-7 flex-wrap' id='contact'>
//         <div className='flex justify-center items-center'>
//             <h1 className='comfortaa-semibold text-4xl text-black py-2 border-b-2 border-[#fdc435]'>Contact Me </h1>
            
//         </div>

//         <div className='flex flex-col items-center justify-center gap-10'>
//             <input className='w-[500px] h-14 p-2 rounded-3xl  border-[1px] border-blue-300 shadow-md shadow-slate-400' type="text" placeholder='Enter Your Name ' />
//             <input className='w-[500px] h-14 p-2 rounded-3xl  border-[1px] border-blue-300 shadow-md shadow-slate-400 ' type="email" placeholder='Enter Your Email' />

//             <textarea className='w-[500px]  p-2 rounded-3xl border-[1px] border-blue-300 shadow-md shadow-slate-400 ' rows={5} placeholder='Write Your message'></textarea>

//             <button className="w-48 h-9 rounded-2xl bg-[#fdc435] text-black text-xl comfortaa-regular ">send message</button>
//         </div>
//     </div>
//   )
// }

// export default Contact


import React from "react";

function Contact() {
  return (
    <div
      className="max-w-screen min-h-screen py-14 px-6 md:px-10 flex flex-col justify-center items-center gap-7 flex-wrap"
      id="contact"
    >
      {/* Header */}
      <div className="flex justify-center items-center">
        <h1 className="comfortaa-semibold text-2xl md:text-4xl text-black py-2 border-b-2 border-[#fdc435]">
          Contact Me
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[500px]">
        <input
          className="w-full h-12 md:h-14 p-3 rounded-3xl border-[1px] border-blue-300 shadow-md shadow-slate-400 text-sm md:text-base"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className="w-full h-12 md:h-14 p-3 rounded-3xl border-[1px] border-blue-300 shadow-md shadow-slate-400 text-sm md:text-base"
          type="email"
          placeholder="Enter Your Email"
        />
        <textarea
          className="w-full p-3 rounded-3xl border-[1px] border-blue-300 shadow-md shadow-slate-400 text-sm md:text-base"
          rows={4}
          placeholder="Write Your Message"
        ></textarea>
        <button className="w-40 h-10 md:w-48 md:h-12 rounded-2xl bg-[#fdc435] text-black text-sm md:text-xl comfortaa-regular">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
