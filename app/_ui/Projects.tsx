import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-6xl font-semibold max-sm:mb-6 max-sm:text-3xl">
        Recent Projects
      </h2>
      <p className="mx-auto max-w-[700px] text-center opacity-80 max-sm:text-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem{" "}
      </p>
      <div className="flex items-center justify-center gap-8 max-lg:flex-col mt-7">
        <div className="group flex max-w-[375px] cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">Project X</h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis accusamus rerum
            </p>
            <div className="flex justify-center gap-4">
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Live Demo
              </div>
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Github Repo
              </div>
            </div>
          </div>
        </div>
        <div className="group flex max-w-[375px] cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">Project X</h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis accusamus rerum
            </p>
            <div className="flex justify-center gap-4">
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Live Demo
              </div>
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Github Repo
              </div>
            </div>
          </div>
        </div>
        <div className="group flex max-w-[375px] cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl text-center shadow-xl duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white max-xl:gap-2 max-lg:gap-0">
          <div className="relative h-60 w-full max-xl:h-52 max-lg:h-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              fill
              className="w-[20vw] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 pb-10 max-xl:p-2 max-xl:pb-5 max-lg:p-7">
            <h3 className="text-3xl font-medium max-xl:text-2xl">Project X</h3>
            <p className="max-xl:text-sm max-sm:text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis accusamus rerum
            </p>
            <div className="flex justify-center gap-4">
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Live Demo
              </div>
              <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white group-hover:hover:text-black max-2xl:px-4 max-2xl:text-sm max-xl:py-1">
                Github Repo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
