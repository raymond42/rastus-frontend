"use client";

import React, { useEffect, useMemo, useState } from "react";
import LogoDarkBlue from "@/public/rastus-dark-blue-logo.png";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import MobileMenuItems from "./MobileMenuItems";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/redux/slices/cartSlice";
import { RootState } from "@/lib/redux/store";
import { startLoading } from "@/lib/redux/slices/loadingSlice";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const navItems = useMemo<MenuItem[]>(
    () => [
      { label: "Our Story", href: "our-story" },
      { label: "Products", href: "#products" },
      { label: "Men", href: "#men" },
      { label: "Women", href: "#women" },
      { label: "Design Your Own", href: "#design" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);

      if (pathname === "/") {
        let currentSection = "";
        for (const item of navItems) {
          if (!item.href.startsWith("#")) continue;

          const id = item.href.slice(1);
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = item.href;
            break;
          }
        }
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navItems]);

  const handleNavigate = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
        return;
      }

      dispatch(startLoading());
      router.push(`/${href}`);
      setIsMenuOpen(false);
      return;
    }

    const targetPath = href.startsWith("/") ? href : `/${href}`;
    if (targetPath === pathname || targetPath === `${pathname}/`) {
      setIsMenuOpen(false);
      return;
    }

    dispatch(startLoading());
    router.push(targetPath);
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && activeSection === href;
    } else {
      return pathname === `/${href}` || pathname === `/${href}/`;
    }
  };

  return (
    <nav
      className={`flex justify-between items-center sm:px-40 h-28 fixed w-full bg-white-primary top-0 z-50 ${
        hasScrolled ? "border-b" : ""
      }`}
    >
      {/* Logo */}
      <div>
        <button
          onClick={() => {
            dispatch(startLoading());
            router.push("/");
            setIsMenuOpen(false);
          }}
          className="cursor-pointer p-0 border-0 bg-transparent"
          aria-label="Go to homepage"
        >
          <Image
            src={LogoDarkBlue}
            width={0}
            height={0}
            alt="Rastus Logo"
            priority
            className="sm:w-[155px] sm:h-[82px] w-[120px] h-[64px] object-contain"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenuItems
          menuItems={navItems}
          onClose={() => setIsMenuOpen(false)}
          currentHash={activeSection}
          currentPathname={pathname}
          onNavigate={handleNavigate}
        />
      )}

      {/* Desktop nav links */}
      <div className="hidden sm:block">
        <ul className="flex flex-row gap-11">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigate(item.href)}
                className={`text-[16px] font-bold cursor-pointer transition-colors ${
                  isActive(item.href)
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "text-primary hover:text-gray-500"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart + menu button */}
      <div className="flex gap-10 items-center">
        <button
          className="relative cursor-pointer"
          onClick={() => {
            dispatch(toggleCart());
          }}
          aria-label="Toggle cart"
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

        <div className="sm:hidden block pr-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <RiMenu3Fill className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
