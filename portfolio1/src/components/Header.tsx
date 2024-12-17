import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  return (
    <div>
      <div id="header-container">
        <div id="name">Hooriya Siddiqui</div>
        <div>
          <ul id="nav-ul">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>

        <div  id="sidebar">
          <Sheet>
            <SheetTrigger id="menu-icon">
              {" "}
              <Menu />
            </SheetTrigger>
            <SheetContent id="menu-content">
              <ul className="text-xl text-white font-medium flex justify-center items-center flex-col gap-8">
                <li className="">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About me</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact Me</a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Header;
