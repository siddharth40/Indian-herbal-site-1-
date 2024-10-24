import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getHerbByName } from '../data/herbs';
import AddToCartButton from '../components/AddToCartButton';

export default function HerbDetailPage() {
  const { herbName } = useParams();
  const navigate = useNavigate();
  
  const herb = herbName ? getHerbByName(herbName.replace(/-/g, ' ')) : undefined;

  if (!herb) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Herb not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <img
              src={herb.image}
              alt={herb.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{herb.name}</h1>
                <p className="text-2xl font-semibold text-emerald-600">$29.99</p>
              </div>
              <AddToCartButton herb={herb} className="px-6 py-3" />
            </div>
            
            <p className="text-gray-600 mb-8">{herb.description}</p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Scientific Name</h2>
                <p className="text-gray-600 italic">{herb.scientificName}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h2>
                <p className="text-gray-600">{herb.benefits}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Traditional Uses</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {herb.traditionalUses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Preparation & Usage</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {herb.preparation.map((prep, index) => (
                    <li key={index}>{prep}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Precautions</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {herb.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}