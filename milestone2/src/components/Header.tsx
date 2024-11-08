import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between items-center bg-black text-white fixed top-0 left-0 right-0  '>
        <div className='font-bold text-3xl m-2 '>Hooriya <span className='text-yellow-500'> Siddiqui</span></div>
        <div >
        <ul className='flex gap-8 m-2 text-2xl font-semibold  '>
            <li className='hover:text-yellow-500'><a href="#home">Home</a></li>
            <li className='hover:text-yellow-500'><a href="#about">About me</a></li>
            <li className='hover:text-yellow-500'><a href="#project">Projects</a></li>
            <li className='hover:text-yellow-500'><a href="#contact">Contact Me</a></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
