import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    collectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Indian Herbs Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center sm:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover the Ancient Wisdom of Indian Herbs
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the healing power of nature through our carefully curated selection of traditional herbs and remedies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToCollection}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
              Explore Collection
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}