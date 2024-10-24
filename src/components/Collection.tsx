import React from 'react';
import ProductCard from './ProductCard';
import { herbs } from '../data/herbs';

export default function Collection() {
  return (
    <section className="py-24 bg-gray-50" id="collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Herbal Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the healing power of traditional Indian herbs, carefully selected and preserved for their authentic medicinal properties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {herbs.map((herb) => (
            <ProductCard key={herb.name} herb={herb} />
          ))}
        </div>
      </div>
    </section>
  );
}