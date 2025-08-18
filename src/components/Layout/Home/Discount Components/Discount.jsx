import React from "react";
import Button from "../../../Other  Components/Button";

function Discount() {
  return (
    <section
      className="bg-zinc-200 bg-cover bg-right md:bg-[url('https://i.pinimg.com/1200x/fe/3b/08/fe3b08736453ca1e86b1e0a0c9b621e9.jpg')] bg-no-repeat mb-10">
      <div className="md:max-w-[90%] h-fit mx-auto px-10 py-10 flex md:flex-row flex-col">
        <span className="text-8xl text-green-600 font-bold transform md:-rotate-90 rotate-none h-fit self-center self:left animate-bounce z-0">
          20%
        </span>
        <div className="max-w-200 md:text-left text-center">
          <h1 className="md:text-6xl text-5xl text-zinc-900 font-bold">
            First Order Discount
          </h1>
          <p className="text-zinc- mt-5">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your firstcontent purchase. Fast
            delivery and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
}

export default Discount;
