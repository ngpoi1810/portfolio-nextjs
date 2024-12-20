import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex items-center justify-center container mx-auto px-4" id="hainguyen">
      <div className="flex items-center justify-center gap-40 max-xl:gap-20 max-md:flex-col max-md:gap-6">
        <Image
          src="/avatar.jpeg"
          alt="Nguyen Hai Nguyen"
          width={400}
          height={400}
          quality={100}
          className="w-[30vw] rounded-full max-sm:w-52"
        />
        <div className="flex flex-col items-center justify-between gap-6 text-center">
          <div>
            <h3 className="text-3xl font-medium opacity-80 max-sm:text-xl">Hi, I&apos;m</h3>
            <h1 className="my-6 text-6xl font-semibold text-nowrap max-sm:text-3xl max-sm:my-3">Hai Nguyen</h1>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-3xl text-transparent max-sm:text-xl">
              Frontend Developer
            </span>
          </div>

          <div className="flex gap-4">
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:bg-black hover:text-white">
              Dowload CV
            </div>
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:bg-black hover:text-white">
              Contact
            </div>
          </div>
          <div className="flex gap-8">
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
    </section>
  );
}
