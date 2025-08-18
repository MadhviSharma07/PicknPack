import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-200 py-20 ">
      <div className="max-w-[90%] mx-auto flex md:flex-row flex-col gap-10">
        <div className="flex-1 basis">
          <a href="#" className="text-3xl font-[DynaPuff]">
            Pick <span className="text-green-500 uppercase">'n'</span> Pack
          </a>
          <p className="text-zinc-800 text-sm mt-6 w-[400px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 text-sm mt-6">2025 &copy; All Rights Reserved</p>
        </div>
        <ul className="flex-1">
          <li>
            <h3 className="text-zinc-900 text-xl font-bold">Company</h3>
          </li>
          <li className="mt-6">
            <a
              href="#about"
              className="hover:text-green-500 text-md text-zinc-800"
            >
              About
            </a>
          </li>
          <li className="mt-6">
            <a
              href="#faq"
              className="hover:text-green-500 text-md text-zinc-800"
            >
              FAQ'S
            </a>
          </li>
        </ul>
        <ul className="flex-1">
          <li>
            <h3 className="text-zinc-900 text-xl font-bold">Support</h3>
          </li>
          <li className="mt-6">
            <a
              href="#about"
              className="hover:text-green-500 text-md text-zinc-800"
            >
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a
              href="#faq"
              className="hover:text-green-500 text-md text-zinc-800"
            >
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a
              href="#faq"
              className="hover:text-green-500 text-md text-zinc-800"
            >
              Contact Us
            </a>
          </li>
        </ul> 
        
        <div className="flex-1">
          <h5 className="text-zinc-900 text-xl font-bold">Stay Connected</h5>
          <p className="text-zinc-700 text-sm mt-6">
            Question to feedback?
            <br />
            We'd love to hear from you
          </p>
          <div className="bg-white mt-6 flex items-center p-1 rounded-lg">
            <input
              className="flex-1 h-[3vh] pl-2 focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-green-500 to-green-600 p-2 text-white text-xl rounded-md hover:to-green-700 cursor-pointer">
              <IoIosArrowForward />
            </button>
         </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
