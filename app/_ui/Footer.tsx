import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="w-full px-[12%]">
      <div className="flex items-center justify-between border-b border-solid border-black pb-14">
        <Link
          href=""
          className="text-nowrap text-xl font-semibold transition-transform hover:scale-110"
        >
          <span>Hai Nguyen</span>
        </Link>
        <div className="flex items-center gap-14">
          <Link href="">+038 6474 579</Link>
          <Link href="">nguyenhainguyen47944@gmail.com</Link>

          <div className="flex gap-5">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-8 w-8 cursor-pointer duration-200 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="py-14">
        <ul className="flex gap-8">
          <li>
            <Link className="line relative font-light " href="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="line relative font-light "
              href="#techstack"
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              className="line relative font-light "
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="line relative font-light "
              href="#contact"
            >
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
