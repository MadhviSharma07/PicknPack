import React, { useContext, useEffect } from "react";
import CategoryPage from "../../../Other  Components/CategoryPage";
import { GroceryContext } from "../../../Context/GroceryContext";

function Dairy() {
  const {addToCart, addToWishlist, wishlistColor, quantityIncrement} = useContext(GroceryContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <CategoryPage
        title="Dairy & Eggs"
        image="https://i.pinimg.com/1200x/ed/86/a8/ed86a8008f408dfa45687c420dfef7ec.jpg"
        categories={["Dairy"]}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlistColor={wishlistColor}
        quantityIncrement={quantityIncrement}
      />
    </div>
  );
}

export default Dairy;
