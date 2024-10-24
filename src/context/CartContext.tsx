import React, { createContext, useContext, useReducer } from 'react';
import { Herb } from '../data/herbs';

interface CartItem extends Herb {
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Herb }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { name: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + existingItem.price
        };
      }
      const price = 29.99; // Default price, you might want to store this in the herb data
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1, price }],
        total: state.total + price
      };
    }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.name === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.name !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0)
      };
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.name === action.payload.name);
      if (!item) return state;
      const quantityDiff = action.payload.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff)
      };
    }
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}