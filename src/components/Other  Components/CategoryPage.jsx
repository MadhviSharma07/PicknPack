import React from "react";
import Cards from "./Cards";
import ProductList from "../Layout/Home/Products Components/ProductList";
import Banner from "./Banner";

function CategoryPage({
  title,
  image,
  categories = [],
  addToCart,
  addToWishlist,
  wishlistColor,
  quantityIncrement
}) {
  const filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((items) => categories.includes(items.category));
  const renderProducts = filteredItems.map((i) => {
    return (
      <Cards
        key={i.id}
        className=""
        image={i.image}
        title={i.name}
        price={i.price}
        onclick={() => addToCart(i)}
        addToWishlist={() => addToWishlist(i)}
        clickColor={wishlistColor(i)}
        quantityIncrement={()=>quantityIncrement(i)}
      />
    );
  });
  return (
    <div>
      <Banner title={title} image={image} />
      <div className="max-w-[90%] md:mx-auto grid md:grid-cols-4 grid-cols-2  md:gap-18 gap-5  mx-4 mt-10">
        {renderProducts}
      </div>
    </div>
  );
}

export default CategoryPage;
