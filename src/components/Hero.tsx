import React from 'react';
import { SearchBar } from './SearchBar';

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-rose-500 to-rose-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Your Family's Health Journey
            <span className="block text-rose-200">Starts Here</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-rose-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Access trusted health resources, expert advice, and educational content tailored for your family's wellbeing.
          </p>
          <div className="mt-8">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}