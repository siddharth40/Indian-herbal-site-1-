import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Herb } from '../data/herbs';

interface AddToCartButtonProps {
  herb: Herb;
  className?: string;
}

export default function AddToCartButton({ herb, className = '' }: AddToCartButtonProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: herb });
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors ${className}`}
    >
      <ShoppingBag className="h-5 w-5" />
      Add to Cart
    </button>
  );
}