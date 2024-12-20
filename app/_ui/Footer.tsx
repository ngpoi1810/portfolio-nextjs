import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="container mx-auto w-full px-4">
      <div className="flex items-center justify-between border-b border-solid border-black pb-14 max-md:pb-7 max-sm:flex-col max-sm:gap-3">
        <Link
          href="#about"
          className="text-nowrap text-xl font-semibold transition-transform hover:scale-110"
          title="Nguyen Hai Nguyen"
        >
          <span>Hai Nguyen</span>
        </Link>
        <div className="flex items-center gap-14 max-lg:gap-7 max-md:gap-3 max-md:text-sm max-sm:flex-col">
          <Link href="tel:0386474579" title="+038 6474 579" target="_blank">
            +038 6474 579
          </Link>
          <Link
            href="mailto:nguyenhainguyen47944@gmail.com"
            title="nguyenhainguyen47944@gmail.com"
            target="_blank"
          >
            nguyenhainguyen47944@gmail.com
          </Link>

          <div className="flex gap-5 max-md:gap-3">
            <Link
              href="https://github.com/ngpoi1810"
              target="_blank"
              title="Github"
            >
              {" "}
              <FontAwesomeIcon
                icon={faGithub}
                className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110 max-md:w-6"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nguyen-hai-nguyen-59b229241/"
              target="_blank"
              title="Linked in"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110 max-md:w-6"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-14 max-md:py-7">
        <ul className="flex gap-8 max-[375px]:grid max-[375px]:grid-cols-2">
          <li>
            <Link
              className="line relative text-nowrap font-light max-xl:text-sm"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="line relative text-nowrap font-light max-xl:text-sm"
              href="#techstack"
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              className="line relative text-nowrap font-light max-xl:text-sm"
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="line relative text-nowrap font-light max-xl:text-sm"
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </footer>
  );
}
