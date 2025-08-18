import React from "react";
import Button from "../../../Other  Components/Button";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mt-10">About Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Fresh groceries, delivered with love and care.
        </p>
      </div>

      {/* Mission */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700">
          We started this grocery store with one simple belief — everyone
          deserves access to fresh, healthy, and affordable food. From local
          farmers to your doorstep, we make sure every product is picked with
          care.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 shadow-lg rounded-2xl bg-white">
          <h3 className="text-xl font-bold mb-2">🥬 Farm Fresh</h3>
          <p className="text-gray-600">Directly sourced from trusted farmers.</p>
        </div>
        <div className="p-6 shadow-lg rounded-2xl bg-white">
          <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
          <p className="text-gray-600">Groceries at your door in 30 minutes.</p>
        </div>
        <div className="p-6 shadow-lg rounded-2xl bg-white">
          <h3 className="text-xl font-bold mb-2">🌍 Eco Friendly</h3>
          <p className="text-gray-600">Sustainable packaging, better future.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
       <Link to="/allproducts"> <Button content="Shop Now"></Button></Link>
      </div>
    </section>
  );
}

export default AboutUs;
