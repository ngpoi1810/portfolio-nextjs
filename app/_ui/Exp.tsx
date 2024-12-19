import {
  faBuilding,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Exp() {
  return (
    <section id="about">
      <h2 className="mb-12 text-center text-6xl font-semibold">About Me</h2>
     
      <div className="mt-20 flex items-start justify-between gap-28">
        <div className="flex-1">
          <div className="mb-10">
            <h3 className="mb-10 text-3xl font-semibold">Work Experience</h3>
            <div className="mb-10 flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500">
                  Junior Frontend Web Developer
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faBuilding} /> Bin
                    Corporation Group
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon className="w-4" icon={faCalendarDays} />{" "}
                  <span>Sep 2021 - Dec 2021</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500">
                  Junior Frontend Web Developer
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faBuilding} /> Bin
                    Corporation Group
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon className="w-4" icon={faCalendarDays} />{" "}
                  <span>Sep 2021 - Dec 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="mb-10 text-3xl font-semibold">Education</h3>
            <div className="flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500">
                  Software Engineering
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faBuilding} /> IUH
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon className="w-4" icon={faCalendarDays} />{" "}
                  <span>Sep 2021 - Dec 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/avatar2.jpeg"
          width={300}
          height={300}
          quality={90}
          alt="Nguyen Hai Nguyen"
          className="w-[24vw] rounded-[3rem]"
        />
      </div>
    </section>
  );
}
