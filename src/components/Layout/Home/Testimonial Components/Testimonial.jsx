import React from "react";
import Heading from "../../../Other  Components/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <section>
      <div className="max-w-[90%] h-fit mb-10 mx-auto">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end gap-3 mt-4">
          <button className="custom-prev bg-zinc-200 text-zinc-900 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-600 w-8 h-8 flex justify-center items-center rounded-md">
            <IoIosArrowBack />
          </button>
          <button className="custom-next bg-zinc-200 text-zinc-900 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-600 w-8 h-8 flex justify-center items-center rounded-md">
            <IoIosArrowForward />
          </button>
        </div>
        {/* reviews */}
        <Swiper 
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        }}
         modules={[Navigation]} 
         loop={true} 
         breakpoints={{
            640:{slidesPerView:1, spaceBetween:20},
            768:{slidesPerView:2, spaceBetween:20},
            1024:{slidesPerView:3, spaceBetween:20},

         }
         }
         className="mySwiper">
          {review.map((items) => {
            return (
              <SwiperSlide
                className="bg-zinc-100 rounded-xl mt-10 p-8">
                <div className="flex gap-5 items-center" key={items.id}>
                  <div className="w-15 h-15 rounded-full outline-2 outline-green-500 bg-red-300 outline-offset-4 overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={items.image} alt="" />
                  </div>
                  <div>
                    <h3 className="text-bold text-xl">{items.name}</h3>
                    <p className="text-zinc-700">{items.profession}</p>
                    <span className="flex gap-1 text-yellow-400 text-lg">
                        {Array.from({length : items.rating}, (_, index)=>(
                            <FaStar key={index} />
                        ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-700">{items.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    image: "https://i.pinimg.com/736x/d3/7c/2b/d37c2b5d09c1cdfa805d6487ea80d10f.jpg",
    description:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    image: "https://i.pinimg.com/736x/ed/03/a5/ed03a50aa4896c2b35c87c4fbed966c1.jpg",
    description:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3,
    image: "https://i.pinimg.com/736x/0e/f8/08/0ef8085f88f4a229e18aff06abd6ddbe.jpg",
    description:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    image: "https://i.pinimg.com/1200x/0b/7d/c2/0b7dc2575a08606023aa9edf7ae1b0f6.jpg",
    description:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    image: "https://i.pinimg.com/736x/a9/67/27/a96727d343d319c458c757cef37a1379.jpg",
    description:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
  },
];
