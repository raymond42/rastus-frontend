"use client";
import React, { useEffect, useState } from "react";
import LogoDarkBlue from "@/public/rastus-dark-blue-logo.png";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenuItems from "./MobileMenuItems";

type MenuItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const navItems: MenuItem[] = [
    { label: "MEN", href: "#" },
    { label: "WOMEN", href: "#" },
    { label: "KIDS", href: "#" },
    { label: "COLLECTION", href: "#" },
    { label: "TRENDS", href: "#" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleClickMenuBurger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center sm:px-40 h-28 fixed w-full bg-white-primary top-0 z-50 ${
        hasScrolled ? "border-b" : ""
      }`}
    >
      {" "}
      {/* Logo Section */}
      <div>
        <Image
          src={LogoDarkBlue}
          width={0}
          height={0}
          alt="Rastus Logo"
          priority
          className="sm:w-[155px] sm:h-[82px] w-[120px] h-[64px] object-contain cursor-pointer"
        />
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="">
          <MobileMenuItems
            menuItems={navItems}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      )}
      {/* Navigation links */}
      <div className="hidden sm:block">
        <ul className="flex flex-row gap-11">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-primary text-[16px] font-bold hover:text-gray-500 transition-colors cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {/* Cart and Login Section */}
      <div className="flex gap-10 items-center">
        <div className="relative">
          <div className="text-white-primary font-extrabold bg-red-600 flex items-center justify-center rounded-full h-5 w-5 text-[10px] absolute right-0 top-1 z-10">
            1
          </div>
          <div className="relative flex">
            <CiShoppingCart className="w-11 h-12 cursor-pointer font-bold hover:text-gray-500 transition-colors" />
          </div>
        </div>
        <button className="sm:block hidden border border-primary font-bold text-primary rounded hover:bg-primary hover:text-white-primary transition-colors w-[108px] h-[45px]">
          LOGIN
        </button>
        <div className="sm:hidden block pr-3">
          <RiMenu3Fill className="w-7 h-7" onClick={handleClickMenuBurger} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
