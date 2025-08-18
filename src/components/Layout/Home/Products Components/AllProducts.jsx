import React, { useContext, useEffect } from "react";
import CategoryPage from "../../../Other  Components/CategoryPage";
import { GroceryContext } from "../../../Context/GroceryContext";

function AllProducts() {
  const {addToCart, addToWishlist, wishlistColor, quantityIncrement} = useContext(GroceryContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <CategoryPage
        title="All Products"
        image="https://i.pinimg.com/1200x/c7/99/6a/c7996accde95d1bd16db8b14dfd73ea4.jpg"
        categories={["All"]}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlistColor={wishlistColor}
        quantityIncrement={quantityIncrement}
      />
    </div>
  );
}

export default AllProducts;
