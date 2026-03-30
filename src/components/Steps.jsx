import React from 'react';
import { UserCircle, ShoppingBasket, Rocket } from 'lucide-react';

export const Steps = () => {
  return (
    <section className="bg-surface-container py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Get Started In 3 Steps</h2>
          <p className="text-on-surface-variant">The fastest way to elevate your digital game.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl font-black text-xl shadow-lg">1</div>
            <UserCircle className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Create Account</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Sign up in seconds and gain instant access to our unified platform dashboard.</p>
          </div>
          
          <div className="relative bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl font-black text-xl shadow-lg">2</div>
            <ShoppingBasket className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Choose Products</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Browse our curated marketplace and pick the tools that fit your current needs.</p>
          </div>
          
          <div className="relative bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-xl font-black text-xl shadow-lg">3</div>
            <Rocket className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Start Creating</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Download your assets or activate your tools and start building immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
