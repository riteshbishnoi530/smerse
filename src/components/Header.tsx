"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LIST } from "@/utils/helper";
import CustomButton from "@/components/common/CustomButton";

const Header = () => {
  const [showSlide, setShowSlide] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleSidebar = () => setShowSlide(!showSlide);
  const closeNavbar = () => setShowSlide(false);

  useEffect(() => {
    document.body.style.overflow = showSlide ? "hidden" : "auto";
  }, [showSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`overflow-hidden fixed top-0 left-0 w-full mx-auto px-4 py-4 max-md:py-[5px] transition-all duration-300 ease-in-out z-50 ${scrolling ? "bg-dark-blue bg-opacity-100 shadow-lg" : "bg-dark-blue bg-opacity-50"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            className="max-lg:size-[76px] max-md:size-[40px]"
            src="/assets/images/logo.webp"
            alt="logo"
            width={68}
            height={68}
          />
        </Link>

        <div
          className={`flex gap-5 max-lg:gap-3 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-gradient-to-bl max-lg:from-light-purple max-lg:via-light-pink max-lg:to-light-orange duration-300 ease-linear z-20 ${showSlide ? "max-lg:left-0" : "max-lg:left-full"
            }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <ul key={i}>
              <li className="flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white">
                <Link
                  href={obj.link}
                  onClick={closeNavbar}
                  className="text-base text-white max-lg:text-xl"
                >
                  {obj.title}
                </Link>
              </li>
            </ul>
          ))}
          <CustomButton myOnClick={closeNavbar} btn="Mint Now" myClass="lg:hidden" />
        </div>
        <CustomButton btn="Mint Now" myClass="max-lg:hidden" />
        <div
          onClick={toggleSidebar}
          className="z-[21] flex-col gap-2 max-sm:gap-[3px] lg:hidden flex cursor-pointer"
        >
          <span
            className={`${showSlide
              ? "w-9 max-sm:w-4 max-sm:h-[3px] h-1 bg-white rotate-45 translate-y-5 max-sm:translate-y-2 duration-300 ease-linear rounded"
              : "w-9 max-sm:w-4 max-sm:h-[3px] h-1 bg-white duration-300 ease-linear rounded"
              }`}
          ></span>
          <span
            className={`${showSlide
              ? "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-white opacity-0 duration-300 ease-linear"
              : "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-white rounded duration-300 ease-linear"
              }`}
          ></span>
          <span
            className={`${showSlide
              ? "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
              : "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-white duration-300 ease-linear rounded"
              }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
