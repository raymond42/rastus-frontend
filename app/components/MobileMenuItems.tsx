import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

type MobileMenuItemsProps = {
  menuItems: MenuItem[];
  onClose: () => void;
};

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({
  menuItems,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300); // Match with the animation duration
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  const MenuItemLink: React.FC<MenuItem> = ({ label, href }) => (
    <Link
      href={href}
      className="group relative text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
    >
      {label}
      <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );

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
        {/* Close Button */}
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
            <MenuItemLink key={index} label={item.label} href={item.href} />
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="mt-auto pt-8 flex flex-col space-y-4">
          <Link
            href="/#"
            className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            Log In
          </Link>

          <Link
            href="/#"
            className="text-center text-primary hover:underline font-medium transition"
          >
            Don’t have an account? Sign Up
          </Link>

          <Link
            href="/#"
            className="text-center text-sm text-gray-500 hover:underline transition"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuItems;
