import React from "react";
import { DescriptionCard } from "../DescriptionCard";

export default function HobbiesSection() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 lg:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center persian-border pb-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-persian-charcoal mb-4">
              Hobbies and Interests
            </h2>
            <p className="max-w-[700px] text-retro-gray md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto leading-relaxed">
              {`Things I do when I'm not building or experimenting with new technologies.`}
            </p>
          </div>
          <div className="grid gap-6 md:gap-y-6 place-items-start gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <DescriptionCard
              title="Technical Articles"
              link="https://medium.com/@c.nwaugha"
            >
              {`I love to share my knowledge and experiences with others. You can find my posts & articles on Medium and Notion`}
            </DescriptionCard>

            <DescriptionCard title="Hiking">
              {`I love to hike and explore the outdoors. I find it's a great way to clear my mind and get some exercise.`}
            </DescriptionCard>

            <DescriptionCard title="Prayer & Meditation">
              {`I'm a Christian and Catholic. I love to pray and meditate to keep God's words close to mind.`}
            </DescriptionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
