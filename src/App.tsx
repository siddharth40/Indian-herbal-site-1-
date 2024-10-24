import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HerbDetailPage from './pages/HerbDetailPage';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <main className="min-h-screen bg-gray-50">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/herb/:herbName" element={<HerbDetailPage />} />
          </Routes>
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;