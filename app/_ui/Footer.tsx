import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="w-full container mx-auto px-4">
      <div className="flex items-center justify-between border-b border-solid border-black pb-14 max-md:pb-7 max-sm:flex-col max-sm:gap-3">
        <Link
          href=""
          className="text-nowrap text-xl font-semibold transition-transform hover:scale-110"
        >
          <span>Hai Nguyen</span>
        </Link>
        <div className="flex items-center gap-14 max-lg:gap-7 max-md:text-sm max-md:gap-3 max-sm:flex-col">
          <Link href="">+038 6474 579</Link>
          <Link href="">nguyenhainguyen47944@gmail.com</Link>

          <div className="flex gap-5 max-md:gap-3">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110 max-md:w-6"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110 max-md:w-6"
            />
          </div>
        </div>
      </div>
      <div className="py-14 max-md:py-7">
      <ul className="flex gap-8 max-[375px]:grid max-[375px]:grid-cols-2">
        <li>
          <Link className="line relative font-light max-xl:text-sm text-nowrap" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="line relative font-light max-xl:text-sm text-nowrap"
            href="#techstack"
          >
            Tech Stack
          </Link>
        </li>
        <li>
          <Link
            className="line relative font-light max-xl:text-sm text-nowrap"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link className="line relative font-light max-xl:text-sm text-nowrap" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
        <div>

        </div>
      </div>
    </footer>
  );
}
