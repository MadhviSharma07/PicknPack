import React, { useContext } from "react";
import Hero from "./Hero Component/Hero";
import Category from "./Category Components/Category";
import Value from "./Value Components/Value";
import Product from "./Products Components/Product";
import Discount from "./Discount Components/Discount";
import Process from "./Process Components/Process";
import Testimonial from "./Testimonial Components/Testimonial";
import { GroceryContext } from "../../Context/GroceryContext";
function Home() {
  const {
    removeWishlistItems,
    quantityIncrement,
    addToCart,
    wishlist,
    addToWishlist,
    searchTerm,
    wishlistColor,
  } = useContext(GroceryContext);

  return (
    <div>
      <Hero />
      <Category />
      <Value />
      <Product
        quantityIncrement={quantityIncrement}
        wishlist={wishlist}
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        removeWishlistItems={removeWishlistItems}
        wishlistColor={wishlistColor}
      />
      <Discount />
      <Process />
      <Testimonial />
    </div>
  );
}

export default Home;
