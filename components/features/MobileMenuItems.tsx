"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

type MobileMenuItemsProps = {
  menuItems: MenuItem[];
  onClose: () => void;
  currentPathname: string;
  currentHash: string;
  onNavigate: (href: string) => void;
};

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({
  menuItems,
  onClose,
  currentPathname,
  currentHash,
  onNavigate,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return currentPathname === "/" && currentHash === href;
    } else {
      return currentPathname === `/${href}` || currentPathname === `/${href}/`;
    }
  };

  const handleClick = (href: string) => {
    onNavigate(href);
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Slide panel */}
      <div
        className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white-primary shadow-xl p-6 flex flex-col transition-transform ${
          isClosing ? "animate-slideOutRight" : "animate-slideInRight"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
            aria-label="Close menu"
          >
            <X
              size={22}
              className="text-gray-500 group-hover:text-gray-800 group-hover:rotate-90 transform transition-all duration-300"
            />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-6 flex-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.href)}
              className={`group relative text-xl font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-primary underline underline-offset-4 decoration-2"
                  : "text-gray-800 hover:text-primary"
              }`}
            >
              {item.label}
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="mt-auto pt-8 flex flex-col space-y-4">
          <button
            onClick={() => {
              onNavigate("/login");
              handleClose();
            }}
            className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            Log In
          </button>

          <button
            onClick={() => {
              onNavigate("/signup");
              handleClose();
            }}
            className="text-center text-primary hover:underline font-medium transition"
          >
            Don’t have an account? Sign Up
          </button>

          <button
            onClick={() => {
              onNavigate("/forgot-password");
              handleClose();
            }}
            className="text-center text-sm text-gray-500 hover:underline transition"
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuItems;
