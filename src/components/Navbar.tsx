import React from 'react';
import { Leaf, Menu } from 'lucide-react';
import CartButton from './CartButton';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    collectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">AyurVeda</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</a>
            <button 
              onClick={scrollToCollection}
              className="text-gray-600 hover:text-emerald-600 transition-colors">
              Products
            </button>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Benefits</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
            <CartButton onClick={onCartClick} />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <CartButton onClick={onCartClick} />
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}