import { resources } from '../data/resources';

export type SearchType = 'articles' | 'videos' | 'webinars' | 'resources';

const EXTERNAL_URLS = {
  articles: 'https://www.google.com/search?q=family+health+articles',
  videos: 'https://www.youtube.com/results?search_query=family+health+education',
  webinars: 'https://www.eventbrite.com/d/online/family-health-webinars/'
};

export const handleExternalSearch = (type: Exclude<SearchType, 'resources'>) => {
  window.open(EXTERNAL_URLS[type], '_blank');
};

export const searchResources = (query: string) => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return resources.filter(resource => {
    const searchableText = `${resource.title} ${resource.description} ${resource.category}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  });
};