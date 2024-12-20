import {
  faBuilding,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Exp() {
  return (
    <section id="about" className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-6xl font-semibold max-sm:mb-6 max-sm:text-3xl">
        About Me
      </h2>

      <div className="flex items-start justify-between gap-28 max-xl:flex-col-reverse max-xl:gap-20 max-lg:gap-10">
        <div className="w-full shrink-0 grow-0 basis-3/5">
          <div className="mb-10 max-sm:mb-5">
            <h3 className="mb-8 text-3xl font-semibold max-sm:mb-4 max-sm:text-xl">
              Work Experience
            </h3>
            <div className="mb-10 flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6 max-xl:mb-8 max-sm:mb-4">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500 max-sm:text-sm">
                  Frontend Web Developer
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500 max-sm:text-xs">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faBuilding}
                    />{" "}
                    <span className="text-xs">Bin Corporation Group</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faLocationDot}
                    />
                    <span className="text-xs">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon
                    className="w-4 max-sm:w-2.5"
                    icon={faCalendarDays}
                  />{" "}
                  <span className="text-xs">Jun 2022 - Jun 2024</span>
                </div>
              </div>
            </div>
            <div className="mb-10 flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500 max-sm:text-sm">
                  Frontend Web Developer
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500 max-sm:text-xs">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faBuilding}
                    />
                    <span className="text-xs">FPT Software</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faLocationDot}
                    />
                    <span className="text-xs">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon
                    className="w-4 max-sm:w-2.5"
                    icon={faCalendarDays}
                  />{" "}
                  <span className="text-xs">Mar 2020 - May 2020</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500 max-sm:text-sm">
                  Frontend Web Developer
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500 max-sm:text-xs">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faBuilding}
                    />{" "}
                    <span className="text-xs">WEBA</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faLocationDot}
                    />
                    <span className="text-xs">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon
                    className="w-4 max-sm:w-2.5"
                    icon={faCalendarDays}
                  />{" "}
                  <span className="text-xs">Jun 2018 - Aug 2018</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-8 text-3xl font-semibold max-sm:mb-4 max-sm:text-xl">
              Education
            </h3>
            <div className="flex flex-col gap-3 border-b-2 border-solid border-gray-500 pb-6">
              <div className="flex justify-between">
                <span className="text-xl text-gray-500 max-sm:text-sm">
                  Software Engineering
                </span>
                <div className="flex w-24 items-center justify-center rounded-full bg-green-200">
                  <span className="text-sm font-medium text-green-500 max-sm:text-xs">
                    Full time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faBuilding}
                    />{" "}
                    <span className="text-xs">IUH</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <FontAwesomeIcon
                      className="w-4 max-sm:w-2.5"
                      icon={faLocationDot}
                    />
                    <span className="text-xs">Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FontAwesomeIcon
                    className="w-4 max-sm:w-2.5"
                    icon={faCalendarDays}
                  />{" "}
                  <span className="text-xs">Sep 2016 - Sep 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/avatar2.jpeg"
            width={300}
            height={300}
            quality={90}
            alt="Nguyen Hai Nguyen"
            title="Nguyen Hai Nguyen"
            className="w-[24vw] rounded-[3rem] max-sm:w-40"
          />
          <span className="text-center text-sm text-gray-500 max-sm:text-xs">
            I have two years of experience in coding UI templates and landing
            pages.
          </span>
        </div>
      </div>
    </section>
  );
}
