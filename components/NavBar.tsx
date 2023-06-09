"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "@/app/libs/constants";
import { motion } from "framer-motion";
import { slideIn } from "@/app/utils/motions";

export default function NavBar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full px-4 sm:px-20 fixed top-0 z-50 shadow bg-[#F5EFE7] transition duration-300 dark:bg-stone-800 dark:border-b dark:border-stone-700">
      <div className={`justify-between md:items-center md:flex`}>
        <div>
          <div className="flex justify-between py-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">George Chang</h2>
              </div>
            </Link>

            <div className="md:hidden">
              <button onClick={() => setNavbar((prev) => !prev)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <motion.div
            variants={slideIn("right", "spring", 0, 0.8)}
            initial="hidden"
            whileInView="show"
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-y-0 md:space-x-6">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                  smooth={true}
                  activeClass="active"
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    setNavbar((prev) => !prev);
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-200 p-2 rounded-xl transition"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-200 p-2 rounded-xl transition"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
