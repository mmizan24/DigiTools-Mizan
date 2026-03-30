/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ProductGrid } from './components/ProductGrid';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CartView } from './components/CartView';

export default function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleRemoveFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart(prev => prev.filter(item => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from cart.`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Order placed successfully! Cart cleared.", {
      position: "top-center",
      autoClose: 3000,
    });
    setActiveTab('products');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Header 
        cartCount={cartCount} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <Hero />
      <Stats />

      {/* Toggling Section */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex bg-surface-container p-1 rounded-xl shadow-sm border border-surface-container-high">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'products'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'cart'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'products' ? (
        <ProductGrid 
          onAddToCart={handleAddToCart} 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          cartCount={cartCount}
        />
      ) : (
        <CartView 
          items={cart} 
          onRemove={handleRemoveFromCart} 
          onCheckout={handleCheckout}
          onTabChange={setActiveTab} 
        />
      )}

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer aria-label="Notifications" />
    </div>
  );
}
