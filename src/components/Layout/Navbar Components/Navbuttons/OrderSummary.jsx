import React, { useState } from "react";
import Button from "../../../Other  Components/Button";

function OrderSummary({ cart, subtotal, orderTotal, shippingFee, setOrderSummary }) {
  const [showMessage, setShowMessage] = useState(false);

  const handlePlaceOrder = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <section className="flex justify-center items-center inset-0 bg-black/90 fixed z-40">
      <div className="bg-zinc-100 p-3 w-[600px] rounded-lg border border-zinc-300 relative">
        <h3 className="text-3xl font-bold mb-5 text-center">Order Summary</h3>

        {/* Success Message */}
        {showMessage && (
          <div
            style={{
              animation: "pop 0.4s ease-out forwards",
            }}
            className="absolute top-5 right-0 bg-green-100 text-lg text-green-800 px-6 py-4 rounded-lg shadow-lg transform scale-90 opacity-0"
          >
            ✅Order Placed!
          </div>
        )}
        <div className="px-2">
          <div>
            {cart.map((items) => (
              <div key={items.id} className="flex justify-between items-center">
                <span className="text-zinc-800 py-3">
                  {items.name}(x{items.quantity})
                </span>
                <span className="text-zinc-800 py-3">
                  ${(items.price * items.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-y border-zinc-300">
            <div className="flex justify-between py-2">
              <span className="text-zinc-800">Subtotal</span>
              <span className="text-zinc-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-zinc-800">Shipping & Handling</span>
              <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full py-2 border-t border-zinc-300">
              <span className="text-green-600 font-bold">Order Total</span>
              <span className="text-green-600 font-bold">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-center mt-4">
          <span onClick={()=>setOrderSummary(false)}>
            <Button className="flex-1" content="Close" />
          </span>
          <span onClick={handlePlaceOrder}>
            <Button
              
              className="flex-1"
              content="Place Order"
            />
          </span>
        </div>

        {/* Inline CSS for animation */}
        <style>
          {`
            @keyframes pop {
              0% { transform: scale(0.8); opacity: 0; }
              50% { transform: scale(1.05); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default OrderSummary;
