"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center justify-center gap-20 rounded-[3rem] bg-black px-6 py-2 text-white opacity-80 backdrop-blur">
      <Link
        href="/"
        className="text-nowrap text-xl font-semibold text-white transition-transform hover:scale-110 max-xl:text-lg"
      >
        <span>Hai Nguyen</span>
      </Link>
      <ul
        className={`max-sm:opacity-8 flex gap-8 max-sm:absolute max-sm:top-full max-sm:mt-4 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4 max-sm:rounded-3xl max-sm:bg-black max-sm:p-4 ${isOpen ? "max-sm:flex" : "max-sm:hidden"}`}
      >
        <li>
          <Link
            className="line relative text-nowrap font-light text-white max-xl:text-sm"
            href="#about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="line relative text-nowrap font-light text-white max-xl:text-sm"
            href="#techstack"
          >
            Tech Stack
          </Link>
        </li>
        <li>
          <Link
            className="line relative text-nowrap font-light text-white max-xl:text-sm"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="line relative text-nowrap font-light text-white max-xl:text-sm"
            href="#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      {isOpen ? (
        <FontAwesomeIcon
          icon={faXmark}
          className="hidden w-4 max-sm:block"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="hidden w-4 max-sm:block"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <Link
        href="https://github.com/ngpoi1810"
        target="_blank"
        title="Github"
        className="cursor-pointer text-nowrap rounded-[3rem] border-none bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 max-xl:px-4 max-xl:py-2 max-xl:text-sm max-md:hidden"
      >
        Visit Github
      </Link>
    </header>
  );
}
