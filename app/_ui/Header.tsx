import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center justify-center gap-20 rounded-[3rem] bg-zinc-700 px-6 py-2 text-white backdrop-blur">
      <Link
        href="#hainguyen"
        className="text-nowrap text-xl font-semibold text-white transition-transform hover:scale-110"
      >
        <span>Hai Nguyen</span>
      </Link>
      <ul className="flex gap-8">
        <li>
          <Link className="line relative font-light text-white" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="line relative font-light text-white"
            href="#techstack"
          >
            Tech Stack
          </Link>
        </li>
        <li>
          <Link
            className="line relative font-light text-white"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link className="line relative font-light text-white" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="hidden w-8" />
      <button className="cursor-pointer text-nowrap rounded-[3rem] border-none bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">
        Visit Github
      </button>
    </header>
  );
}
