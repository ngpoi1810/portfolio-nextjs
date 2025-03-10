import Image from "next/image";
import React from "react";

export default function Tech() {
  return (
    <section id="techstack" className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-6xl font-semibold max-sm:text-3xl max-sm:mb-6">
        My Tech Stack
      </h2>
      <p className="mx-auto max-w-[700px] text-center opacity-80">
        Technologies I’ve been working with recently
      </p>
      <div className="mt-20 grid grid-cols-6 gap-20 justify-center items-center max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3">
        <Image src="/html.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/css.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/js.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/bootstrap.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/sass.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/tailwinds.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/react.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/next.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
        <Image src="/redux.svg" alt="HTML" width={120} height={120} className="mx-auto"/>
      </div>
    </section>
  );
}
