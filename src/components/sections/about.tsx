import React from "react";

export function About() {
  return (
    <div className="persian-card p-8 max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none">
        <p className="text-retro-gray leading-relaxed mb-4">
          Built mission-critical RAG and video insights applications serving
          thousands of users. Passionate about building reliable,
          high-performance systems at scale. Deeply focused on optimizing for
          optimal UX, latency, and security.
        </p>
        <p className="text-retro-gray leading-relaxed mb-4">
          I&apos;m on the bleeding edge of experimenting and deploying AI
          products that bring emerging technologies powered by LLMs, RAG, and
          Vector DBs to market.
        </p>
        <p className="text-retro-gray leading-relaxed">
          When I&apos;m not busy, I contribute to OSS, e.g., vLLM{" "}
          <a
            className="text-persian-crimson hover:text-persian-gold transition-colors duration-300 font-semibold"
            href="https://github.com/vllm-project/vllm"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/vllm-project/vllm
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
