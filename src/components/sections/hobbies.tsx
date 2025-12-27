import React from "react";
import { DescriptionCard } from "../DescriptionCard";

export default function HobbiesSection() {
  return (
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
