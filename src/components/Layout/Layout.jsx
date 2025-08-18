import React, { useContext } from "react";
import Navbar from "./Navbar Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer Components/Footer";
import { GroceryContext } from "../Context/GroceryContext";
import AddToCart from "./Navbar Components/Navbuttons/AddToCart";
import Wishlist from "./Navbar Components/Navbuttons/Wishlist";
import OrderSummary from "./Navbar Components/Navbuttons/OrderSummary";
function Layout() {
  const {
    totalItems,
    handleScroll,
    setSearchTerm,
    handlePanel,
    wishlist,
    totalWishlistItems,
    activePanel,
    closePanel,
    cart,
    removeItems,
    quantityIncrement,
    quantityDecrement,
    subtotal,
    shippingFee,
    orderTotal,
    setOrderSummary,
    clearAll,
    addToCart,
    removeWishlistItems,
    orderSummary
  } = useContext(GroceryContext);
  return (
    <div>
      <Navbar
        totalItems={totalItems}
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        handlePanel={handlePanel}
        wishlist={wishlist}
        totalWishlistItems={totalWishlistItems}
      />
      <Outlet />
      {/* addtocart */}
      <AddToCart
        activePanel={activePanel}
        closePanel={closePanel}
        cart={cart}
        removeItems={removeItems}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subtotal={subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />
      <Wishlist
        clearAll={clearAll}
        addToCart={addToCart}
        removeWishlistItems={removeWishlistItems}
        activePanel={activePanel}
        closePanel={closePanel}
        wishlist={wishlist}
      />
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subtotal={subtotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          closePanel={closePanel}
          setOrderSummary={setOrderSummary}
        />
      )}
      <Footer />
    </div>
  );
}

export default Layout;
