import React from "react";
import Button from "../../../Other  Components/Button";
import { FaTrash } from "react-icons/fa";

function Wishlist({ activePanel, closePanel, wishlist, removeWishlistItems, addToCart, clearAll }) {
  return (
    <div
      className={`flex flex-col justify-between gap-2 bg-zinc-100 w-80 h-screen fixed top-0 right-0 bottom-0 z-40 left-auto border-1 border-zinc-300 py-7 transform transition-transform duration-300 transform transition-transform duration-300 ${
        activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* heading */}
      <div>
        <h3 className="text-2xl text-zinc-900 font-bold text-center">
          Your Wishlist
        </h3>
      </div>
      {/* Cart items */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll mt-3">
        {wishlist.length === 0 ? (
        <p className="text-zinc-800 text-center">Your wishlist is empty</p>
      ) : (
        wishlist.map((product, index) => {
          return (
           
              <div
                className={`px-5 gap-3 flex items-center py-1 border-y-1 border-zinc-300 ${
                  index % 2 == 0 ? "bg-green-100" : "bg-white"
                }`}
                key={product.id}
              >
                <div className="w-20 h-20 bg-red-200">
                  <img
                    className="w-20 h-20 object-cover"
                    src={product.image}
                    alt="fruits"
                  />
                </div>
                {/* product details */}
                <div className="flex-1">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {product.name}
                    </h3>
                    <button className="w-8 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full text-white flex justify-center items-center text-10 cursor-pointer active:to-red-700" onClick={()=>removeWishlistItems(product)}>
                      <FaTrash />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>${product.price}</span>
                    <button className="px-2 py-1 text-sm bg-gradient-to-b from-green-500 to-green-600 rounded-md text-white md:mt-3 mt-2 active:scale-105 active:to-green-700 transition-all duration-300 cursor-pointer" onClick={()=>addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
          );
        })
      )}

      </div>
      {/* buttons */}
      <div className="flex gap-5 justify-center">
        <span onClick={() => closePanel()}>
          <Button className="flex-1" content="Close" />
        </span >
        <span >
         <button className={`px-3 py-2  rounded-md text-white md:mt-3 mt-2  ${wishlist.length === 0 ? "bg-gradient-to-b from-zinc-500 to-zinc-600" :"bg-gradient-to-b from-green-500 to-green-600 cursor-pointer hover:scale-105 hover:to-green-700 transition-all duration-300 " }`} onClick={clearAll} disabled={wishlist.length===0}>Clear All</button>
        </span>
      </div>
    </div>
  );
}

export default Wishlist;
