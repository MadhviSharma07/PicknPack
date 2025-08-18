import React from "react";
import Button from "../../../Other  Components/Button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function AddToCart({ activePanel, closePanel, cart, removeItems, quantityIncrement, quantityDecrement, subtotal, shippingFee, orderTotal, setOrderSummary }) {
 

  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 w-80 h-screen fixed top-0 right-0 bottom-0 z-40 left-auto border-1 border-zinc-300 py-4 transform transition-transform duration-300 ${
        activePanel === "cart" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* heading */}
      <div>
        <h3 className="text-2xl text-zinc-900 font-bold text-center">
          Your Cart
        </h3>
      </div>
      {/* Cart items */}
      <div className="flex-1 flex flex-col  gap-2 overflow-y-auto scroll">
        {
          cart.length === 0 ?
         (<p className="text-zinc-800 text-center">Your cart is empty</p>) :
         (cart.map((product, index) => {
         return(
          <div className={`px-5 gap-3 flex items-center py-1 border-y-1 border-zinc-300 ${index % 2 ==0? "bg-green-100" :"bg-white"}`} key={product.id}>
            <div className="w-15 h-10 flex justify-center items-center">
              <img
                className="w-18 h-18 object-cover"
                src={product.image}
                alt="product"
              />
            </div>
            {/* product details */}
            <div className="flex-1">
              <div className="flex justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {product.name}
                </h3>
                <button className="w-7 h-7 bg-gradient-to-b from-red-500 to-red-600 rounded-full text-white flex justify-center items-center text-sm cursor-pointer active:to-red-700" onClick={()=>removeItems(product)}>
                  <FaTrash />
                </button>
              </div>
              <div className="flex justify-between gap-2">
                <span>${product.price}</span>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <button className="w-7 h-7 bg-gradient-to-b from-green-500 to-green-600 rounded-full text-white flex justify-center items-center text-sm cursor-pointer active:to-green-700" onClick={()=>quantityDecrement(product)}>
                    <FaMinus />
                  </button>
                  <span>{product.quantity}</span>
                  <button className="w-7 h-7 bg-gradient-to-b from-green-500 to-green-600 rounded-full text-white flex justify-center items-center text-sm cursor-pointer active:to-green-700" onClick={()=>quantityIncrement(product)}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
         )
        }))
        }
      </div>
      {/* cart total */}
      <div className="border-y border-zinc-300 px-5">
        <div className="flex justify-between pt-2">
          <span className="text-zinc-800">Subtotal</span>
          <span className="text-zinc-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800">Shipping & Handling</span>
          <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-300">
          <span className="text-green-500 text-lg font-bold">Order total</span>
          <span className="text-green-500 text-lg font-bold">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-5 justify-center">
        <span onClick={() => closePanel()}>
          <Button className="flex-1" content="Close" />
        </span>
        <span >
             <button className={`px-3 py-2  rounded-md text-white md:mt-3 mt-2  ${cart.length === 0 ? "bg-gradient-to-b from-zinc-500 to-zinc-600" :"bg-gradient-to-b from-green-500 to-green-600 cursor-pointer hover:scale-105 hover:to-green-700 transition-all duration-300 " }`} onClick={()=>setOrderSummary(true)} disabled={cart.length===0}>Checkout</button>
        </span>
      </div>
    </div>
  );
}

export default AddToCart;
