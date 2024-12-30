import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

export function ResourceCard({ title, description, imageUrl, category, link }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center">
          <span className="px-3 py-1 text-sm text-rose-600 bg-rose-100 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center text-rose-600 hover:text-rose-700"
        >
          Learn More
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}