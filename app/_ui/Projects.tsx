import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-12 text-center text-6xl font-semibold">
        Recent Projects
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        <div className="group flex cursor-pointer flex-col items-center justify-center gap-6 rounded-[3rem] border-2 border-solid border-black px-8 py-12 text-center duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white">
          <Image
            src="/project1.png"
            alt="Project 1"
            width={300}
            height={300}
            className="w-[20vw] rounded-2xl"
          />
          <h3 className="mb-3 text-3xl font-medium">Project X</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            accusamus rerum
          </p>
          <div className="flex gap-4">
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Live Demo
            </div>
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Github Repo
            </div>
          </div>
        </div>
        <div className="group flex cursor-pointer flex-col items-center justify-center gap-6 rounded-[3rem] border-2 border-solid border-black px-8 py-12 text-center duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white">
          <Image
            src="/project1.png"
            alt="Project 1"
            width={500}
            height={500}
            className="w-[20vw] rounded-2xl"
          />
          <h3 className="mb-3 text-3xl font-medium">Project X</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            accusamus rerum
          </p>
          <div className="flex gap-4">
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Live Demo
            </div>
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Github Repo
            </div>
          </div>
        </div>
        <div className="group flex cursor-pointer flex-col items-center justify-center gap-6 rounded-[3rem] border-2 border-solid border-black px-8 py-12 text-center duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white">
          <Image
            src="/project1.png"
            alt="Project 1"
            width={500}
            height={500}
            className="w-[20vw] rounded-2xl"
          />
          <h3 className="mb-3 text-3xl font-medium">Project X</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            accusamus rerum
          </p>
          <div className="flex gap-4">
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Live Demo
            </div>
            <div className="cursor-pointer text-nowrap rounded-[3rem] border-2 border-solid border-black px-6 py-2 font-medium duration-200 ease-in-out hover:border-2 hover:border-solid hover:border-white hover:bg-white group-hover:hover:text-black group-hover:border-2 group-hover:border-solid group-hover:border-white group-hover:text-white">
              Github Repo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
