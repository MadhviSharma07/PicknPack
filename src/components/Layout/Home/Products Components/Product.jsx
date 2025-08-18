import React, { useState } from "react";
import Heading from "../../../Other  Components/Heading";
import Cards from "../../../Other  Components/Cards";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

function Product({ searchTerm, addToCart , addToWishlist,wishlistColor, quantityIncrement}) {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems = ProductList.filter((item) => {
    const matchesCategory = activeTab === "All" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderCards = filteredItems.slice(0, 10).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        title={product.name}
        price={product.price}
        onclick={()=>addToCart(product)}
        addToWishlist={()=>addToWishlist(product)}
        clickColor = {wishlistColor(product) }
        quantityIncrement={()=>quantityIncrement(product)}
      />
    );
  });

  return (
    <section id="product-section">
      <div className="md:max-w-[90%] h-fit mx-auto mb-15">
        <Heading highlight="Our" heading="Products" />
        <div className="flex md:gap-5 gap-1 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                className={`px-2 py-1 cursor-pointer text-lg rounded-md ${
                  activeTab === category
                    ? "bg-gradient-to-b from-green-500 to-green-600 text-white"
                    : "bg-zinc-200"
                }`}
                onClick={() => setActiveTab(category)}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2  md:gap-18 gap-5 mx-4 mt-10">
          {
            filteredItems.length === 0 ?
            <p className="text-center col-span-4 text-zinc-800 text-lg">No products found</p>:
          renderCards
          }
        </div>

        <div className="flex justify-center">
          <Link
            to="/allproducts"
            className="px-3 py-2 bg-gradient-to-b from-green-500 to-green-600 rounded-md text-white md:mt-10 mt-2 hover:scale-105 hover:to-green-700 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
