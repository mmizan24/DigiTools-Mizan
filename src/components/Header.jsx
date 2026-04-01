import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export const Header = ({ cartCount, activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-container-high">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onTabChange('products')}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-violet-800 to-pink-500 bg-clip-text text-transparent">
              DigiTools
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onTabChange('products')}
              className={`font-semibold transition-colors ${activeTab === 'products' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Products
            </button>
            <a href="#steps" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">Features</a>
            <a href="#pricing" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">Pricing</a>

            <div className="h-6 w-px bg-surface-container-high mx-4"></div>

            <button
              onClick={() => onTabChange('cart')}
              className="relative p-2 text-on-surface-variant hover:text-primary transition-colors group"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="bg-gradient-to-r from-violet-800 to-pink-500 text-white px-6 py-2.5 rounded-xl font-bold  transition-all shadow-lg shadow-primary/20 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onTabChange('cart')}
              className="relative p-2 text-on-surface-variant"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-on-surface-variant"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-container-high animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => { onTabChange('products'); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-on-surface font-semibold hover:bg-surface-container rounded-xl"
            >
              Products
            </button>
            <a
              href="#steps"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-on-surface font-semibold hover:bg-surface-container rounded-xl"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-on-surface font-semibold hover:bg-surface-container rounded-xl"
            >
              Pricing
            </a>
            <button className="w-full mt-4 bg-primary text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
