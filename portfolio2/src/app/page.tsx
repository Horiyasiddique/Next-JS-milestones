import Home from "../components/Home"
import About from "../components/About"
import Project from "../components/Project"
import Service from "../components/Service"
import Contact from "../components/Contact"

import React from 'react'

function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default page
