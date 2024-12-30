import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      onSearch(searchQuery.trim());
      setIsSearching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      onSearch(value.trim());
    } else {
      onSearch(''); // Reset to show all resources when search is empty
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search health topics..."
          className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          disabled={isSearching}
        />
      </div>
    </form>
  );
}