import React from "react";

export function About() {
  return (
    <div className="block max-w-3xl">
      <div className="flex space-x-0 gap-x-10">
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
    </div>
  );
}

export default About;
