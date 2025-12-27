import React from "react";

export function About() {
  return (
    <div className="block mt-4">
      <div className="grid grid-cols-1 col-auto space-x-0 space-y-5 sm:space-y-0 sm:space-x-5 sm:grid-cols-2 sm:grid-flow-row flex-cols gap-x-10">
        <div className="">
          <h2 className="mb-4 text-4xl font-normal sm:text-5xl text-grey-900">
            About me
          </h2>
          <p className="text-sm text-gray-700 sm:text-md">
            Built mission-critical RAG and video insights applications serving
            thousands of users. Passionate about building reliable,
            high-performance systems at scale. Deeply focused on optimizing for
            optimal UX, latency, and security.
            <br />
            <br />
            I&apos;m on the bleeding edge of experimenting and deploying AI
            products that bring emerging technologies powered by LLMs, RAG, and
            Vector DBs to market.
            <br />
            <br />
            When I&apos;m not busy, I contribute to OSS, e.g., vLLM
            {" - "}
            <a
              className="text-blue-600"
              href="https://github.com/vllm-project/vllm"
            >
              https://github.com/vllm-project/vllm
            </a>
          </p>
        </div>
        <div className="pl-10 sm:pl-0 sm:ml-0">
          {/* <!-- Experience 🏆--> */}
          <h2 className="mb-4 text-4xl font-normal sm:text-5xl text-grey-900">
            Key Achievements
          </h2>
          <div className="text-gray-700">
            <ul className="text-sm sm:text-md list-disc space-y-1.5">
              <li>
                🚀 Built RAG systems with 95% search accuracy and 250ms response
                times
              </li>
              <li>
                💰 Reduced inference costs by 65% through multi-LLM integration
              </li>
              <li>
                ⚡ Delivered 80% performance improvements in video processing
                pipelines
              </li>
              <li>☁️ Achieved 99.9% uptime on serverless infra</li>
              <li>🤝 Served Fortune 500 clients with advanced AI solutions</li>
              <li>
                🌐 Multiple AI products powered by LLMs, RAG, and Vector DBs
              </li>
              <li>🛠️ Active contributor to OSS like vLLM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
