import React from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

import Project from "@/components/Project";
function page() {
  return (
    <div>
      <Home />
      <About />
      <Services/>
      <Project />
      <Contact />
    </div>
  );
}

export default page;
