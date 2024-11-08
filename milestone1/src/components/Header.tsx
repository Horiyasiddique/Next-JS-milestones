import React from 'react'

function Header() {
  return (
    <div>
      <div id='header-container'>
        <div id='name'>Hooriya <span id='last-name'> Siddiqui</span></div>
        <div >
        <ul id='nav-ul'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#Contact">Contact Me</a></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
