import React from "react";
import { DescriptionCard } from "../DescriptionCard";

export default function ProjectsSection() {
  return (
    <section className="w-full">
      <div className="container px-4 lg:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="gap-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              My Projects
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Recent ventures - click on the icon to learn more.
            </p>
          </div>
          <div className="grid gap-4 md:gap-y-4 place-items-start gap-y-6 grid-cols-1 md:grid-cols-2">
            <DescriptionCard
              title="VeedoAI"
              role="Founder & Product Engineer"
              link="https://veedo.ai"
            >
              {`Find the moments that matter in seconds`}
            </DescriptionCard>

            <DescriptionCard
              title="Guekn"
              role="Creator/AI Engineer"
              link="https://guekn.com"
            >
              {`Create stunning AI generated images in just a few clicks`}
            </DescriptionCard>

            <DescriptionCard
              title="Bible Links"
              role="Creator"
              link="https://bible-links.vercel.app"
            >
              {`AI-driven bible study guide and companion`}
            </DescriptionCard>

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
              {`AI-driven viewer feedback over interactive video`}
            </DescriptionCard>

            <DescriptionCard
              title="Audiora"
              role="AI Engineer"
              link="https://audiora.veedo.ai"
            >
              {`Listen to bite-sized content anywhere, anytime`}
            </DescriptionCard>

            <DescriptionCard
              title="Siruss"
              role="Creator"
              link="https://siruss.vercel.app"
            >
              {`Create content that resonates with your audience`}
            </DescriptionCard>

            <DescriptionCard
              title="Amped"
              role="Creator"
              link="https://amped.veedo.ai"
            >
              {`Connect with Investors, effortlessly`}
            </DescriptionCard>

            <DescriptionCard
              title="vLLM"
              role="OSS Contributor"
              link="https://github.com/vllm-project/vllm"
            >
              {`High-throughput, memory-efficient inference and serving engine for LLMs`}
            </DescriptionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
