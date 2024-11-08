import Home from "../components/Home"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"

import React from 'react'

function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page
