import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-6xl font-semibold max-sm:mb-6 max-sm:text-3xl">
        Projects
      </h2>
      <p className="mx-auto max-w-[700px] text-center opacity-80 max-sm:text-xs">
        Some personal projects
      </p>
      <div className="mt-7 grid grid-cols-3 items-center justify-center gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-[375px] max-sm:mx-auto">
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">
              Booking Hotel
            </h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A website that allows viewing and booking hotel rooms.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, NextJS, Tailwinds.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://the-hotel-website.vercel.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/the-hotel-website"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project2.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">
              Hotel Management
            </h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A dashboard for managing bookings, staff, and rooms.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, ReactJS, Styled Comp.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://manage-hotel.netlify.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/manage-hotel"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project3.png"
              alt="Fast Pizza"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">Fast Pizza</h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A website for ordering pizza and viewing the invoice.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, ReactJS, Tailwinds.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://fast-pizza-dun.vercel.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/fast-pizza"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">
              Booking Hotel
            </h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A website that allows viewing and booking hotel rooms.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, NextJS, Tailwinds.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://the-hotel-website.vercel.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/the-hotel-website"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project2.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">
              Hotel Management
            </h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A dashboard for managing bookings, staff, and rooms.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, ReactJS, Styled Comp.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://manage-hotel.netlify.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/manage-hotel"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="group flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:w-full max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project3.png"
              alt="Fast Pizza"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">Fast Pizza</h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              A website for ordering pizza and viewing the invoice.
            </p>
            <p className="text-sm max-md:text-xs">
              <strong>Tech stack:</strong> HTML, ReactJS, Tailwinds.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://fast-pizza-dun.vercel.app/"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ngpoi1810/fast-pizza"
                target="_blank"
                className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1"
              >
                Github Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
