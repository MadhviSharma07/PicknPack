import React from 'react';
import Button from '../../../Other  Components/Button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-white w-full">
      <div className="md:max-w-[90%] max-w-7xl md:min-h-screen flex flex-col md:flex-row md:justify-between items-center mx-auto px-4 md:mt-1 mt-20 md:px-8 py-12">
        {/* hero content */}
        <div className="flex-1 text-center md:text-left ">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-semibold leading-tight">
            Fresh <span className="text-green-500">fruits</span>. Crisp <span className="text-green-500">veggies</span>.<br /> Happy you!
          </h1>
          <p className="text-zinc-700 mt-6 sm:mt-8 text-base sm:text-lg">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>
          <div className="mt-3 md:text-lg text-xl md:mb-0 mb-10">
            <Link to="/allproducts"><Button content="Shop Now" /></Link>
          </div>
        </div>

        {/* hero image */}
        <div className="flex-1 flex justify-center ">
          <img
            src="https://i.pinimg.com/736x/08/02/fe/0802fec0882f2934c94f9a26720b58ef.jpg"
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            alt="basket"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
