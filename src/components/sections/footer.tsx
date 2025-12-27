import React from "react";
import Social from "./social";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t-4 border-persian-gold bg-persian-midnight">
      <p className="text-sm text-persian-cream font-medium">
        © 2026 Chukwuma Nwaugha. All rights reserved.
      </p>

      <Social />
    </footer>
  );
}
