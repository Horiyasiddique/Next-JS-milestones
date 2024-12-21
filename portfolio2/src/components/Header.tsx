import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Header() {
  return (
    <main>
      <div className="flex justify-between items-center text-black fixed top-0 left-0 right-0 py-4 px-8 bg-transparent z-30">
        {/* Logo */}
        <div className="text-xl comfortaa-bold">Hooriya Siddiqui</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[16px] comfortaa-regular">
          <ul className="flex gap-8">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About Me</Link>
            </li>
            <li>
              <Link href="#project">Project</Link>
            </li>
            <li>
              <Link href="#service">Service</Link>
            </li>
            <li>
              <Link href="#contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
            
                {/* Menu Icon */}
                <Menu />
             
            </SheetTrigger>
            <SheetContent side="right">
              <ul className="flex flex-col gap-4 mt-4 text-lg comfortaa-regular">
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#about">About Me</Link>
                </li>
                <li>
                  <Link href="#project">Project</Link>
                </li>
                <li>
                  <Link href="#service">Service</Link>
                </li>
                <li>
                  <Link href="#contact-me">Contact Me</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
}

export default Header;
