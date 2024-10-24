import React from 'react';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Herb } from '../data/herbs';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  herb: Herb;
}

export default function ProductCard({ herb }: ProductCardProps) {
  const herbUrlName = herb.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/herb/${herbUrlName}`}>
        <div className="relative h-48">
          <img src={herb.image} alt={herb.name} className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/herb/${herbUrlName}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{herb.name}</h3>
          <p className="text-gray-600 mb-4">{herb.description}</p>
          <div className="flex items-start gap-2 text-sm text-emerald-700 mb-4">
            <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>{herb.benefits}</p>
          </div>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">$29.99</span>
          <AddToCartButton herb={herb} />
        </div>
      </div>
    </div>
  );
}