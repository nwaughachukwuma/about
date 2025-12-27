/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ad9FhogGAQB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import Link from "next/link";
import Footer from "./sections/footer";
import Social from "./sections/social";
import About from "./sections/about";
import ProjectsSection from "./sections/projects";
import HobbiesSection from "./sections/hobbies";
import { prefix } from "../utils/prefix";

export default function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          className="flex gap-x-4 items-center justify-center"
          href="https://twitter.com/ChukwumaNwaugha"
          target="_blank"
        >
          <img
            className="object-contain object-center rounded-md"
            width="50"
            height="50"
            src={`${prefix}/images/dev_avatar.png`}
            alt="Chukwuma Nwaugha Avatar"
          />
          <h1 className="text-gray-600 font-medium">Chukwuma NWAUGHA</h1>
          <span className="sr-only">Chukwuma Nwaugha</span>
        </Link>
      </header>

      <main className="flex-1 space-y-20 pb-10">
        <section className="w-full pt-16">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Product & AI Engineer
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {`Building mission-critical AI systems at scale and bringing delightful AI-powered products to the next billion users.`}
              </p>
              <div className="my-4">
                <Social />
              </div>

              <div className="my-4">
                <About />
              </div>
            </div>
          </div>
        </section>
        <ProjectsSection />
        <HobbiesSection />
      </main>

      <Footer />
    </div>
  );
}
