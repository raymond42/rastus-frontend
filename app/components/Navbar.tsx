import React from "react";
import LogoDarkBlue from "@/public/rastus-dark-blue-logo.png";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const navLinks = ["MEN", "WOMEN", "KIDS", "COLLECTION", "TRENDS"];

  return (
    <nav className="flex justify-between items-center px-28 pt-6">
      {/* Logo Section */}
      <div>
        <Image
          src={LogoDarkBlue}
          width={155}
          height={82}
          alt="Rastus Logo"
          priority // Ensures the logo is loaded with high priority
        />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-row gap-11">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-primary text-[16px] font-bold hover:text-gray-500 transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart and Login Section */}
      <div className="flex gap-10 items-center">
        <div className="relative">
          <div className="text-white font-extrabold bg-red-600 flex items-center justify-center rounded-full h-5 w-5 text-[10px] absolute right-0 top-1 z-10">
            1
          </div>
          <div className="relative">
            <CiShoppingCart className="w-11 h-12 cursor-pointer font-bold hover:text-gray-500 transition-colors" />
          </div>
        </div>
        <button className="border border-primary font-bold text-primary rounded hover:bg-primary hover:text-white transition-colors w-[108px] h-[45px]">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
