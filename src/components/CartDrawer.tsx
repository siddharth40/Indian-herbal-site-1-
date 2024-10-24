import React from 'react';
import { X, Minus, Plus, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch } = useCart();

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { name, quantity } });
  };

  const removeItem = (name: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: name });
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="rounded-full p-1 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="rounded-full p-1 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <div className="border-t p-4">
              <div className="mb-4 flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
                >
                  <CreditCard className="h-5 w-5" />
                  Checkout
                </button>
                <button
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}