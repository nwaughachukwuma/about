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
import { prefix } from "../utils/prefix";
import { DescriptionCard } from "./DescriptionCard";

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

      <main className="flex-1 space-y-20">
        <section className="w-full pt-16">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-4">
              <div className="gap-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Product & AI Engineer
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-2">
                  {`Building mission-critical AI systems at scale and bringing delightful AI-powered products to the next billion users.`}
                </p>
                <div className="my-4">
                  <Social />
                </div>

                <div className="my-4 py-6">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="container px-4 lg:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="gap-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  My Projects
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Recent ventures - click on the link to learn more.
                </p>
              </div>
              <div className="grid gap-4 md:gap-y-4 place-items-start gap-y-6 grid-cols-1 md:grid-cols-2">
                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">VeedoAI</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`VeedoAI is an AI-powered platform that provides deep insights for video content, using state of the art Generative AI and Large Language Models.`}
                  </p>
                </div> */}

                <DescriptionCard
                  title="VeedoAI"
                  role="Founder and Product Engineer"
                  link="https://veedo.ai"
                >
                  {`AI-powered insights for video content`}
                </DescriptionCard>

                <DescriptionCard
                  title="Guekn"
                  role="Creator"
                  link="https://guekn.com"
                >
                  {`Create stunning AI generated images in just a few clicks`}
                </DescriptionCard>

                <DescriptionCard
                  title="Bible Links"
                  role="Creator; AI Engineer"
                  link="https://bible-links.vercel.app"
                >
                  {`AI-driven bible study guide and companion`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project Three</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of project three. This project allowed me to experiment with some new technologies and I
                    learned a lot in the process.
                  </p>
                </div> */}

                <DescriptionCard
                  title="Goldmine"
                  role="Creator"
                  link="https://goldmine-ai.vercel.app"
                >
                  {`Relevant daily news and newsletters, adapated AI`}
                </DescriptionCard>

                <DescriptionCard
                  title="Ex: Latitude+Lumiere"
                  role="Staff Software Engineer"
                  link="https://latd.com"
                >
                  {`AI-propelled viewer feedback, advanced analytics and human-generated intelligence company`}
                </DescriptionCard>

                <DescriptionCard
                  title="Cayalx"
                  role="Product Engineer"
                  link="https://cayalx.com"
                >
                  {`Car hire and ride-share service that puts riders & drivers in control of their experience`}
                </DescriptionCard>

                <DescriptionCard
                  title="AudioRA"
                  role="AI Engineer"
                  link="https://audiora.veedo.ai"
                >
                  {`AI-powered audio insights and analysis`}
                </DescriptionCard>

                <DescriptionCard
                  title="Siruss"
                  role="Creator"
                  link="https://siruss.vercel.app"
                >
                  {`Innovative AI application`}
                </DescriptionCard>

                <DescriptionCard
                  title="Amped"
                  role="Product Engineer"
                  link="https://amped.veedo.ai"
                >
                  {`Advanced AI platform`}
                </DescriptionCard>

                <DescriptionCard
                  title="vLLM"
                  role="Open Source Contributor"
                  link="https://github.com/vllm-project/vllm"
                >
                  {`High-throughput, memory-efficient inference and serving engine for LLMs`}
                </DescriptionCard>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="container px-4 lg:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="gap-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Hobbies and Interests
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {`Things I do when I'm not building or experimenting with new technologies.`}
                </p>
              </div>
              <div className="grid gap-4 md:gapy-4 place-items-start gap-y-6 grid-cols-1 md:grid-cols-2">
                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">HTML/CSS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`I'm a master of the fundamentals. I can write clean, semantic HTML and style it with beautiful,
                    responsive CSS.`}
                  </p>
                </div> */}

                <DescriptionCard
                  title="Technical Articles"
                  link="https://medium.com/@c.nwaugha"
                >
                  {`I love to share my knowledge and experiences with others. You can find my posts & articles on Medium and Notion`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">JavaScript</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`I love working with JavaScript to create interactive and dynamic user experiences. I'm comfortable
                    with frameworks like React and Vue.`}
                  </p>
                </div> */}

                <DescriptionCard title="Hiking">
                  {`I love to hike and explore the outdoors. I find it's a great way to clear my mind and get some exercise.`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Accessibility</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I believe the web should be accessible to all. I make sure my sites are keyboard navigable, screen
                    reader friendly, and have high contrast modes.
                  </p>
                </div> */}

                <DescriptionCard title="Prayer & Meditation">
                  {`I'm a Christian and Catholic. I love to pray and meditate to keep God's words close to mind.`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Performance</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I know the importance of a fast website. I optimize my assets, lazy load images, and use performance
                    budgets to keep my sites running smoothly.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
