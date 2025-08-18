import React from "react";
import Heading from "../../../Other  Components/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

function Value() {
  const leftValues = values.slice(0, 2).map((val) => {
    return (
      <div className="flex md:flex-row-reverse gap-2 mt-5" key={val.id}>
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-green-500 to-green-600 w-12 h-12 rounded-full text-white text-2xl">
            {val.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-2xl font-bold">{val.title}</h3>
          <p className="text-zinc-800 mt-2">{val.description}</p>
        </div>
      </div>
    );
  });

  const rightValues = values.slice(2).map((val) => {
    return (
      <div className="flex gap-2 mt-5" key={val.title}>
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-green-500 to-green-600 w-12 h-12 rounded-full text-white text-2xl">
            {val.icon}
          </span>
        </div>
        <div className="">
          <h3 className="text-zinc-800 text-2xl font-bold">{val.title}</h3>
          <p className="text-zinc-800 mt-2">{val.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[90%] md:h-[70vh] h-[100%] md:m-auto m-10 py-2">
        <Heading highlight="Our" heading="Value" />

        <div className="flex md:flex-row flex-col items-center mt-10">
          {/* left value*/}
          <div className="flex flex-col h-70 gap-1 md:justify-between ">
            {leftValues}
          </div>
          {/* middle image */}
          <div className="md:flex hidden">
            <img
              className="md:w-80 md:h-60 md:object-cover"
              src="https://i.pinimg.com/1200x/83/46/7a/83467aff2dcf65b48102e6fe567e8727.jpg"
              alt="vegetables basket"
            />
          </div>
          {/* right value*/}
          <div className="flex flex-col h-70 gap-1 md:justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;

const values = [
  {
    id: 1,
    title: "Trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
