"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { PaymentInstructionsModal } from "../components";
import { stopLoading } from "@/lib/redux/slices/loadingSlice";
import { Button } from "@/components/ui/button";
import { jost } from "../utils/fonts";

export default function CheckoutPage() {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    return total + numericPrice * item.quantity;
  }, 0);

  useEffect(() => {
    dispatch(stopLoading());
  }, []);

  const isFormValid =
    fullName.trim() !== "" &&
    phone.trim() !== "" &&
    streetAddress.trim() !== "";

  const handleProceedToPayment = () => {
    if (!isFormValid) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:pt-44 pt-36">
      {/* Left - Shipping Info */}
      <div className={`lg:col-span-2 space-y-6 ${jost.className}`}>
        <h2 className="text-2xl font-bold text-primary">Checkout</h2>
        <h2 className="text-xl font-semibold text-primary">
          Shipping Information
        </h2>
        <div className="space-y-4 text-primary">
          <div>
            <label className="block mb-1 font-medium">
              Full Name <span className="text-red-400">*</span>
            </label>
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={showErrors && !fullName.trim() ? "border-red-400" : ""}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <PhoneInput
              country={"rw"}
              value={phone}
              onChange={setPhone}
              enableSearch={true}
              inputProps={{ name: "phone", required: true }}
              containerClass="w-full"
              inputClass="!w-full !py-2 !pl-12 !pr-4 !border !rounded text-sm"
              buttonClass="!border !bg-white"
              dropdownClass="!max-h-60 !overflow-y-auto !text-sm"
              searchClass="!px-2 !py-1 !border !mb-2"
              containerStyle={{
                border:
                  showErrors && !phone.trim()
                    ? "1px solid red"
                    : "1px solid #ccc",
                borderRadius: "0.375rem",
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Street Address <span className="text-red-400">*</span>
            </label>
            <Input
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className={
                showErrors && !streetAddress.trim() ? "border-red-400" : ""
              }
            />
          </div>

          <p className="text-sm text-yellow-600 bg-yellow-100 px-3 py-2 rounded-md border border-yellow-300">
            <strong>Note:</strong> We currently only deliver within{" "}
            <strong>Kigali</strong>.
          </p>

          <div>
            <label className="block mb-1 font-medium">
              House Number (Optional)
            </label>
            <Input placeholder="House Number" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-10 text-primary">Your Items</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.size.name}-${item.color.name}-${index}`}
              className="flex items-center gap-4 border-b pb-4"
            >
              <div className="relative w-20 h-24 border rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.color.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-400">
                  Size: {item.size.name}, Color: {item.color.name}
                </div>
                <div className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="font-semibold text-sm">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Summary */}
      <div
        className={`${jost.className} text-primary border p-6 rounded-lg shadow-sm bg-white space-y-6 h-fit`}
      >
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="flex justify-between text-sm">
          <span>Items</span>
          <span>{cartItems.length}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{subtotal}K RWF</span>
        </div>

        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Total</span>
          <span>{subtotal.toLocaleString()}K FRW</span>
        </div>

        {!isFormValid && showErrors && (
          <p className="text-sm text-red-500">
            Please fill in all required fields that marked with *.
          </p>
        )}

        <Button className="w-full" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>

        <PaymentInstructionsModal
          amount={subtotal}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </div>
  );
}
