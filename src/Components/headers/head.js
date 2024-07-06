import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { AiOutlineAudio } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { navbar } from "../constant";
import { Link } from "react-router-dom";
import CustomeBtn from "../CustomeBtn";

const HeadNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className="w-full relative py-4 px-8">
      <div className="flex items-center gap-4 justify-between">
        {/* left */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">
            Career <span className="text-blue-600">***</span>{" "}
          </Link>
          <div className="w-52 flex items-center py-1 px-3 gap-1 bg-slate-300 rounded-2xl">
            <CiSearch />
            <input
              type="text"
              placeholder="search"
              className="outline-none bg-transparent border-none w-full"
            />
          </div>
        </div>
        {/* right */}
        <div className="lg:flex hidden items-center gap-4">
          
          {navbar.map((item, index) => (
            <div key={index} className="flex items-center text-xl font-medium">
              <Link to={item.path}>{item.head}</Link>
            </div>
          ))}
          <CustomeBtn title="Get Started" stylebtn="w-36"/>
        </div>
        {/* burger */}
        <div onClick={handleNav} className="lg:hidden md:flex">
          {!nav ? <RxHamburgerMenu size={24} /> : <IoMdClose size={24} />}
        </div>
      </div>
      {/* responsive */}
      <div
        className={
          nav
            ? "lg:hidden fixed top-0 left-0 w-72 h-[100vh] bg-[#bfbcbcf8] flex flex-col items-center justify-center gap-4 transition z-50 duration-500"
            : " fixed -left-[100%]  "
        }
      >
        {navbar.map((item, index) => (
          <div key={index} className="flex items-center text-xl font-medium">
            <Link to={item.path}>{item.head}</Link>
          </div>
        ))}
        <div className="w-32 p-2 text-center rounded-full bg-black text-white">
          <Link>Get Started</Link>
        </div>
      </div>
    </section>
  );
};

export default HeadNav;
