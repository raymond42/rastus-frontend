"use client";
import React, { useEffect, useState } from "react";
import LogoDarkBlue from "@/public/rastus-dark-blue-logo.png";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenuItems from "./MobileMenuItems";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/redux/slices/cartSlice";
import { RootState } from "@/lib/redux/store";

type MenuItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const navItems: MenuItem[] = [
    { label: "Our Story", href: "#our-story" },
    { label: "Products", href: "#products" },
    { label: "Men", href: "#men" },
    { label: "Women", href: "#women" },
    { label: "Design Your Own", href: "#design" },
  ];

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
    window.addEventListener("scroll", handleScroll);

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
      {/* Logo Section */}
      <div>
        <Link href="/">
          <Image
            src={LogoDarkBlue}
            width={0}
            height={0}
            alt="Rastus Logo"
            priority
            className="sm:w-[155px] sm:h-[82px] w-[120px] h-[64px] object-contain cursor-pointer"
          />
        </Link>
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
            <li key={index}>
              <Link
                href={`/${item.href}`}
                className="text-primary text-[16px] font-bold hover:text-gray-500 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Cart and Login Section */}
      <div className="flex gap-10 items-center">
        <button
          className="relative cursor-pointer"
          onClick={() => {
            dispatch(toggleCart());
          }}
        >
          {cartItems.length > 0 && (
            <div className="text-white-primary font-extrabold bg-red-600 flex items-center justify-center rounded-full h-5 w-5 text-[10px] absolute right-0 top-1 z-10">
              {cartItems.length}
            </div>
          )}
          <div className="relative flex">
            <CiShoppingCart className="w-11 h-12 font-bold hover:text-gray-500 transition-colors" />
          </div>
        </button>
        {/* <button className="sm:block hidden border border-primary font-bold text-primary rounded hover:bg-primary hover:text-white-primary transition-colors w-[108px] h-[45px]">
          LOGIN
        </button> */}
        <div className="sm:hidden block pr-3">
          <RiMenu3Fill className="w-7 h-7" onClick={handleClickMenuBurger} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
