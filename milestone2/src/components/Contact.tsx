import React from 'react'

function Contact() {
  return (
    <div className='flex justify-between  my-20 flex-wrap' id='contact'>
        <div className='mx-7'>
            <h1 className='font-extrabold text-4xl text-slate-300 my-6 mx-10 '>Contact Me </h1>
            <h3 className='font-serif text-2xl text-slate-300 my-3 mx-10'>Let&apos;s talk about anything!</h3>
        </div>

        <div className='flex flex-col items-center justify-center m-10'>
            <input className='w-[500px] h-14 p-2 rounded-3xl my-4 bg-slate-600' type="text" placeholder='Enter Your Name ' />
            <input className='w-[500px] h-14 p-2 rounded-3xl my-4 bg-slate-600' type="email" placeholder='Enter Your Email' />

            <textarea className='w-[500px]  p-2 rounded-3xl my-4 bg-slate-600' rows={5} placeholder='Write Your message'></textarea>

            <button className="w-48 h-9 rounded-2xl bg-pink-600 text-white text-xl font-semibold p-1 my-3">send message</button>
        </div>
    </div>
  )
}

export default Contact
