import React from 'react';
import { Heart, BookOpen, Video, MonitorPlay } from 'lucide-react';
import { handleExternalSearch } from '../utils/searchUtils';
import { NavButton } from './NavButton';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">FamilyHealth</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavButton icon={BookOpen} label="Articles" onClick={() => handleExternalSearch('articles')} />
            <NavButton icon={Video} label="Videos" onClick={() => handleExternalSearch('videos')} />
            <NavButton icon={MonitorPlay} label="Webinars" onClick={() => handleExternalSearch('webinars')} />
          </div>
        </div>
      </nav>
    </header>
  );
}