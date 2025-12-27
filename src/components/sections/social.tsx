import React from "react";
import { LinkedinIcon, Github, BookOpen, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Social() {
  return (
    <nav className="sm:ml-auto flex gap-8 sm:gap-10">
      <Link
        className="inline-flex h-14 w-14 items-center justify-center p-4 rounded-none border-4 border-persian-gold/60 hover:border-persian-gold bg-persian-cream/60 hover:bg-persian-gold/15 shadow-persian hover:shadow-persian-lg transition-all duration-300 group hover:scale-105"
        href="https://www.linkedin.com/in/cpnwaugha"
        target="_blank"
      >
        <LinkedinIcon className="h-7 w-7 text-persian-charcoal group-hover:text-persian-crimson transition-colors duration-300" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        className="inline-flex h-14 w-14 items-center justify-center p-4 rounded-none border-4 border-persian-gold/60 hover:border-persian-gold bg-persian-cream/60 hover:bg-persian-gold/15 shadow-persian hover:shadow-persian-lg transition-all duration-300 group hover:scale-105"
        href="https://github.com/nwaughachukwuma"
        target="_blank"
      >
        <Github className="h-7 w-7 text-persian-charcoal group-hover:text-persian-crimson transition-colors duration-300" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        className="inline-flex h-14 w-14 items-center justify-center p-4 rounded-none border-4 border-persian-gold/60 hover:border-persian-gold bg-persian-cream/60 hover:bg-persian-gold/15 shadow-persian hover:shadow-persian-lg transition-all duration-300 group hover:scale-105"
        href="https://medium.com/@c.nwaugha"
        target="_blank"
      >
        <BookOpen className="h-7 w-7 text-persian-charcoal group-hover:text-persian-crimson transition-colors duration-300" />
        <span className="sr-only">Medium</span>
      </Link>
      <Link
        className="inline-flex h-14 w-14 items-center justify-center p-4 rounded-none border-4 border-persian-gold/60 hover:border-persian-gold bg-persian-cream/60 hover:bg-persian-gold/15 shadow-persian hover:shadow-persian-lg transition-all duration-300 group hover:scale-105"
        href="https://chukwuman.substack.com"
        target="_blank"
      >
        <Newspaper className="h-7 w-7 text-persian-charcoal group-hover:text-persian-crimson transition-colors duration-300" />
        <span className="sr-only">Substack</span>
      </Link>
    </nav>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
