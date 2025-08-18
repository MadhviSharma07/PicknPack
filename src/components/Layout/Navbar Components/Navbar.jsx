import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Navbar({
  handleScroll,
  setSearchTerm,
  handlePanel,
  totalItems,
  wishlist,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [IsScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-20 bg-white fixed top-0 left-0 right-0 ${
        IsScroll ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-[90%] h-15 m-auto flex mt-2 justify-between items-center">
        <Link to="/" className="text-3xl font-[DynaPuff]">
          Pick <span className="text-green-500 uppercase">'n'</span> Pack
        </Link>
        {/* desktop menu */}
        <ul className="md:flex gap-10 hidden">
          <li>
            <Link
              to="/"
              className="font-semibold text-lg tracking-wider text-zinc-800 hover:text-green-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold text-lg tracking-wider text-zinc-800 hover:text-green-500"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className="font-semibold text-lg tracking-wider text-zinc-800 hover:text-green-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold text-lg tracking-wider text-zinc-800 hover:text-green-500"
            >
              Contact us
            </Link>
          </li>
        </ul>
        {/* Nav Search */}
        <div className="flex gap-4 items-center">
          <div className="md:flex p-1 border-2 border-green-500 rounded-full hidden">
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-6 px-3 focus:outline-none"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="text-xl bg-gradient-to-b from-green-500 to-green-600 text-white rounded-full p-1 flex justify-center items-center">
              <IoSearch />
            </button>
          </div>
          <a
            href="#wishlist"
            className="text-zinc-800 text-2xl cursor-pointer relative"
            onClick={() => handlePanel("wishlist")}
          >
            <GoHeartFill />
            {wishlist.length > 0 ? (
              <span className="bg-red-600 w-3 h-3  rounded-full flex justify-center items-center text-white text-[10px] absolute top-4">
                {wishlist.length}
              </span>
            ) : (
              ""
            )}
          </a>
          <a
            href="#cart"
            className="text-zinc-800 text-2xl cursor-pointer relative"
            onClick={() => handlePanel("cart")}
          >
            <HiShoppingBag />
            {totalItems > 0 ? (
              <span className="bg-red-600 w-3 h-3  rounded-full flex justify-center items-center text-white text-[10px] absolute top-4">
                {totalItems}
              </span>
            ) : (
              ""
            )}
          </a>

          {/* menu */}
          <a
            href="#menu"
            className="md:text-zinc-800 text-2xl lg:hidden"
            onClick={toggleMenu}
          >
            <TbMenu2 />
          </a>
          {/* mobile menu */}
          <ul
            className={`flex flex-col md:hidden gap-10 absolute -top-100 right-5 shadow-xl bg-green-500/20 backdrop-blur-xl rounded-xl p-5 gap-y-8 transition-all duration-500 ${
              showMenu ? "top-full" : ""
            }`}
          >
            <li>
              <a
                href="#home"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
              >
                About us
              </Link>
            </li>
            <li>
              <a
                href="#process"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-500"
              >
                Contact us
              </a>
            </li>
            <li className="flex p-1 border-2 border-green-500 rounded-full md:hidden">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Search..."
                autoComplete="off"
                className="flex-1 h-6 px-3 focus:outline-none"
                onFocus={handleScroll}
              />
              <button className="text-xl bg-gradient-to-b from-green-500 to-green-600 text-white rounded-full p-1 flex justify-center items-center">
                <IoSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
