import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaSnapchatGhost, FaInstagram } from "react-icons/fa";
import logoWithNoBackground from "@/public/logo-no-background.png";
import { jost, jostSemiBold } from "@/app/utils/fonts";
import visaIcon from "@/public/visa.png";
import mastercarIcon from "@/public/mastercard.png";
import mtnmomoIcon from "@/public/mtnmomo.png";

const footerLinks1 = [
  "Delivery Information",
  "Privacy Policy",
  "Terms & Condition",
  "Search Terms",
  "Order & Return",
];

const footerLinks2 = [
  "Customer Service",
  "Privacy Policy",
  "Terms & Condition",
  "Best Seller",
  "Manufactures",
];

const socialIcons = [
  { icon: <FaXTwitter />, label: "Twitter" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaSnapchatGhost />, label: "Snapchat" },
  { icon: <FaInstagram />, label: "Instagram" },
];

const workingHours = [
  { day: "Monday - Friday", hours: "08:00 - 20:00" },
  { day: "Saturday", hours: "13:00 - 08:00" },
  { day: "Sunday", hours: "CLOSED" },
];

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-40 justify-between w-full p-10 md:p-20 bg-primary text-lightBrown-20">
      {/* Left Section: Logo & Contact Info */}
      <div className="flex flex-col gap-10 max-w-xs">
        <div>
          <Image
            src={logoWithNoBackground}
            alt="Rastus Logo"
            width={150}
            height={50}
            priority
          />
        </div>
        <div className="flex flex-col gap-6 py-2">
          <address className={`${jost.className} text-sm not-italic`}>
            Calista Wise 7292 Dictum Av. Antonio, Italy.
          </address>
          <p className={`${jost.className} text-sm`}>+250 7993 238 1</p>
          <p className={`${jost.className} text-sm`}>rastus@mail.com</p>
          <p className={`${jost.className} text-sm`}>www.rastus.com</p>
        </div>
      </div>

      {/* Middle Section: Social Icons & Footer Links */}
      <div className="flex flex-col gap-10 py-6">
        <div className="flex gap-6">
          {socialIcons.map(({ icon, label }, index) => (
            <span
              key={index}
              className="text-lightBrown-20 text-xl"
              aria-label={label}
            >
              {icon}
            </span>
          ))}
        </div>
        <ul className="flex flex-col gap-6">
          {footerLinks1.map((link, index) => (
            <li key={index} className={`${jost.className} text-sm`}>
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Newsletter Subscription */}
      <div className="flex-grow flex flex-col gap-10">
        <div className="relative flex gap-2 items-center overflow-hidden">
          <input
            id="userInput"
            type="email"
            placeholder="Enter your email..."
            className="w-full text-white-primary border outline-none px-3 bg-transparent h-10"
            aria-label="Enter your email for subscription"
          />
          <div className="bg-white-primary hover:bg-opacity-75">
            <button
              className={`${jostSemiBold.className} text-primary text-[12px] leading-[16.8px] tracking-[2px] px-6 h-10 flex items-center justify-center hover:transition-transform duration-500 transition-all hover:scale-110`}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex gap-40">
          <div>
            <ul className="flex flex-col gap-6 py-2">
              {footerLinks2.map((link, index) => (
                <li key={index} className={`${jost.className} text-sm`}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          {/* add table logic here */}
          <div className="flex flex-col flex-grow">
            {workingHours.map((item, key) => (
              <div
                key={key}
                className={`${
                  key - 2 ? "border-b" : "border-none"
                }  w-full flex justify-between py-2`}
              >
                <p
                  className={`${jost.className} text-[14px] text-white-secondary`}
                >
                  {item.day}
                </p>
                <p
                  className={`${jost.className} text-[14px] text-white-secondary`}
                >
                  {item.hours}
                </p>
              </div>
            ))}
            <div className="flex justify-end gap-6 pt-10">
              <Image
                src={visaIcon}
                alt="visa"
                width={0}
                height={0}
                className="h-auto w-[45px]"
              />
              <Image
                src={mastercarIcon}
                alt="masterard"
                width={0}
                height={0}
                className="h-auto w-[45px]"
              />
              <Image
                src={mtnmomoIcon}
                alt="mtn momo"
                width={0}
                height={0}
                className="h-auto w-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
