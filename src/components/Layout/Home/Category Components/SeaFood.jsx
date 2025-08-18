import React, { useContext, useEffect } from "react";
import CategoryPage from "../../../Other  Components/CategoryPage";
import { GroceryContext } from "../../../Context/GroceryContext";

function SeaFood() {
  const {addToCart, addToWishlist, wishlistColor, quantityIncrement} = useContext(GroceryContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <CategoryPage
        title="SeaFoods"
        image="https://i.pinimg.com/1200x/0d/b9/2b/0db92b4e4f07e90d0bc6dfb44c7e2e1a.jpg"
        categories={["SeaFood"]}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlistColor={wishlistColor}
        quantityIncrement={quantityIncrement}
      />
    </div>
  );
}

export default SeaFood;
