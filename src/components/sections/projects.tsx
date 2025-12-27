import React from "react";
import { DescriptionCard } from "../DescriptionCard";

export default function ProjectsSection() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 lg:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center persian-border pb-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-persian-charcoal mb-4">
              My Projects
            </h2>
            <p className="max-w-[700px] text-retro-gray md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto leading-relaxed">
              Recent ventures - click on the icon to learn more.
            </p>
          </div>
          <div className="grid gap-6 md:gap-y-6 place-items-start gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              {`Relevant daily news and newsletters, adapted AI`}
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
