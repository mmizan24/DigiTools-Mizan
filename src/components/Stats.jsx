import React from 'react';
import { Users, LayoutGrid, Star } from 'lucide-react';

export const Stats = () => {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-2">
          <div className="text-4xl font-black text-primary">50K+</div>
          <div className="flex justify-center text-primary-container">
            <Users className="w-6 h-6 fill-primary-container" />
          </div>
          <p className="text-on-surface-variant font-medium">Active Users Worldwide</p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-black text-primary">200+</div>
          <div className="flex justify-center text-primary-container">
            <LayoutGrid className="w-6 h-6 fill-primary-container" />
          </div>
          <p className="text-on-surface-variant font-medium">Premium Digital Tools</p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-black text-primary">4.9/5</div>
          <div className="flex justify-center text-primary-container">
            <Star className="w-6 h-6 fill-primary-container" />
          </div>
          <p className="text-on-surface-variant font-medium">Average User Rating</p>
        </div>
      </div>
    </section>
  );
};
