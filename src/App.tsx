import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResourceList } from './components/ResourceList';
import { resources } from './data/resources';
import { searchResources } from './utils/searchUtils';
import type { Resource } from './types/resource';

function App() {
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);

  const handleSearch = (query: string) => {
    const results = searchResources(query);
    setFilteredResources(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero onSearch={handleSearch} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
        <ResourceList resources={filteredResources} />
      </main>
    </div>
  );
}

export default App;