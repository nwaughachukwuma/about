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
    <div className="flex flex-col min-h-[100dvh] animate-fade-in">
      {/* Persian-inspired header with 2000s styling */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-persian-midnight border-b-4 border-persian-gold">
        <Link
          className="flex gap-x-4 items-center justify-center group"
          href="https://twitter.com/ChukwumaNwaugha"
          target="_blank"
        >
          <div className="relative">
            <img
              className="object-contain object-center rounded-none border-2 border-persian-gold"
              width="50"
              height="50"
              src={`${prefix}/images/dev_avatar.png`}
              alt="Chukwuma Nwaugha Avatar"
            />
            <div className="absolute inset-0 bg-persian-gold/20 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-persian-cream font-bold text-lg tracking-wider">
            CHUKWUMA NWAUGHA
          </h1>
          <span className="sr-only">Chukwuma Nwaugha</span>
        </Link>
      </header>

      <main className="flex-1 space-y-24 pb-16">
        {/* Hero section with Persian accents */}
        <section className="w-full pt-20">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              <div className="persian-border pb-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-persian-charcoal mb-4">
                  Product & AI Engineer
                </h1>
                <p className="max-w-[700px] text-retro-gray md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed leading-relaxed">
                  {`Building mission-critical AI systems at scale and bringing delightful AI-powered products to the next billion users.`}
                </p>
              </div>

              <div className="my-6">
                <Social />
              </div>

              <div className="animate-slide-up">
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
