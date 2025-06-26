"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { jost, jostSemiBold } from "@/utils/fonts";
import EmbroideryMachinePhoto from "@/public/embroidery-machine.jpeg";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { startLoading } from "@/lib/redux/slices/loadingSlice";

function OurStory() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.message) {
      return alert("Please fill out your email and message.");
    }

    console.log("Message sent:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const goToProducts = () => {
    dispatch(startLoading());
    router.push("/#products");
  };

  return (
    <main className="bg-white-primary text-primary pt-36 sm:px-40 px-5 pb-20">
      {/* Story Content */}
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h1
          className={`${jostSemiBold.className} text-4xl sm:text-6xl font-bold`}
        >
          Our Story
        </h1>
        <p className={`${jost.className} text-lg sm:text-xl leading-8`}>
          Rastus started with a simple idea and a lot of passion. We&apos;ve
          always loved fashion, not just wearing it, but creating it. In Rwanda,
          there&apos;s a real shortage of original designs featuring embroidery.
          That inspired us to bring something fresh and unique to the market.
        </p>
        <p className={`${jost.className} text-lg sm:text-xl leading-8`}>
          We wanted to create something different, a brand where people could
          find pieces that reflect who they are. So we got an embroidery machine
          and started designing, making, and customizing clothes and caps
          ourselves. At Rastus, you&apos;ll find ready-made items we&apos;ve
          designed, but also the option to order something personalized just for
          you.
        </p>
        <p className={`${jost.className} text-lg sm:text-xl leading-8`}>
          It&apos;s been an exciting journey so far, and we&apos;re just getting
          started. This is more than a brand to us, it&apos;s a way to bring
          creativity and individuality into everyday style.
        </p>

        {/* Call to Action Button */}
        <Button
          onClick={goToProducts}
          variant="default"
          size="lg"
          className={jostSemiBold.className}
          aria-label="Shop Our Products"
        >
          Shop Our Products
        </Button>
      </div>

      {/* Embroidery Machine Image */}
      <div className="mt-20 max-w-5xl mx-auto px-4">
        <h2
          className={`${jostSemiBold.className} text-2xl sm:text-4xl text-center mb-6`}
        >
          The Tools Behind The Craft in Our Factory
        </h2>
        <div className="w-full rounded-2xl overflow-hidden shadow-md">
          <Image
            src={EmbroideryMachinePhoto}
            alt="Embroidery Machine used at Rastus"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-24 max-w-3xl mx-auto text-center border-t pt-16">
        <h2 className={`${jostSemiBold.className} text-3xl sm:text-4xl mb-4`}>
          Reach Out to Us
        </h2>
        <p className={`${jost.className} text-lg sm:text-xl mb-8`}>
          Have a question or custom idea? We&apos;d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="text-left mb-10 space-y-2">
          <p className={`${jost.className} text-base`}>📍 Kigali, Rwanda</p>
          <p className={`${jost.className} text-base`}>📞 +250 7944 0956 1</p>
          <p className={`${jost.className} text-base`}>✉️ help@rastus.rw</p>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <p className="text-green-600 text-lg">
            Thank you! We&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name (optional)"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-primary rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-primary rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-primary rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className={jostSemiBold.className}
              aria-label="Send Message"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}

export default OurStory;
