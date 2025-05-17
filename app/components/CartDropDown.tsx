"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { closeCart, removeFromCart } from "@/lib/redux/cartSlice";
import { X } from "lucide-react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartDropdown() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-lg z-50 flex flex-col bg-white-primary"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button onClick={() => dispatch(closeCart())}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size.name}-${item.color.name}-${index}`}
                    className="flex gap-3 border-b pb-3 relative"
                  >
                    {/* Remove Icon */}
                    <button
                      onClick={() => {
                        // console.log('first', first)
                        dispatch(
                          removeFromCart({
                            id: item.id,
                            size: item.size,
                            color: item.color,
                          })
                        );
                      }}
                      className="absolute top-0 right-0 p-1 text-primary hover:text-red-600"
                      aria-label="Remove from cart"
                    >
                      <Trash2 size={20} />
                    </button>

                    {/* Image */}
                    <div className="relative w-20 h-24 flex-shrink-0 rounded overflow-hidden border">
                      <Image
                        src={item.color.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between h-full pr-6">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-800 font-bold">
                        {item.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        Size: {item.size.name}, Color: {item.color.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <button
                className="w-full py-2 bg-primary text-white rounded hover:bg-opacity-80 transition text-white-primary"
                onClick={() => {
                  dispatch(closeCart());
                  // navigate to checkout if desired
                }}
              >
                Go to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
