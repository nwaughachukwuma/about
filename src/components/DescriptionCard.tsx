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
    <div className="block h-full w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
          <p className="text-sm text-gray-700 mb-2">{children}</p>
          {role ? (
            <p className="text-sm font-medium text-gray-900">Role: {role}</p>
          ) : null}
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label={`Visit ${title}`}
          >
            <ExternalLink size={16} className="text-black" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
