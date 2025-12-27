import React from "react";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  children: React.ReactNode;
  link?: string;
  role?: string;
};

export function DescriptionCard({ title, children, link, role }: Props) {
  return (
    <div className="persian-card h-full w-full p-6 border-2 border-retro-gray/30 hover:border-persian-gold/50 transition-all duration-300 group">
      <div className="flex items-start justify-between h-full">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-persian-charcoal group-hover:text-persian-crimson transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-retro-gray mb-3 leading-relaxed">
            {children}
          </p>
          {role ? (
            <p className="text-sm font-semibold text-persian-sapphire bg-persian-cream/50 px-2 py-1 rounded-none inline-block">
              {role}
            </p>
          ) : null}
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 p-3 rounded-none bg-persian-gold/10 hover:bg-persian-gold/20 border border-persian-gold/30 hover:border-persian-gold transition-all duration-300 group/link"
            aria-label={`Visit ${title}`}
          >
            <ExternalLink
              size={18}
              className="text-persian-charcoal group-hover/link:text-persian-crimson transition-colors duration-300"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
}
