import React, { useContext, useEffect } from "react";
import CategoryPage from "../../../Other  Components/CategoryPage";
import { GroceryContext } from "../../../Context/GroceryContext";

function Fruits() {
   const {addToCart, addToWishlist, wishlistColor, quantityIncrement} = useContext(GroceryContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <CategoryPage
        title="Fruits & Veggies"
        image="https://i.pinimg.com/1200x/69/28/79/692879548d7ec0cfe86924e0017bfce8.jpg"
        categories={["Fruits", "Vegetables"]}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlistColor={wishlistColor}
        quantityIncrement={quantityIncrement}
      />
    </div>
  );
}

export default Fruits;
