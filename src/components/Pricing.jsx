import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Pricing = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Simple, Transparent Pricing</h2>
        <p className="text-on-surface-variant">No hidden fees. Choose the plan that scales with your ambition.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10">
          <div className="text-lg font-bold mb-2">Starter</div>
          <div className="text-4xl font-black mb-6">$0 <span className="text-base font-normal text-on-surface-variant">/mo</span></div>
          <p className="text-sm text-on-surface-variant mb-8">Perfect for hobbyists and solo creators just starting out.</p>
          <ul className="space-y-4 mb-10 text-sm">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 5 Downloads / mo</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Basic AI Writing</li>
            <li className="flex items-center gap-3 text-on-surface-variant/50"><X className="w-5 h-5" /> Premium Templates</li>
          </ul>
          <button className="w-full py-4 bg-white text-primary font-bold rounded-xl border-2 border-primary/20 hover:border-primary transition-all">Get Started</button>
        </div>

        {/* Pro */}
        <div className="bg-gradient-to-br from-primary to-primary-dim p-10 rounded-2xl text-on-primary shadow-2xl scale-105 z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-[10px] font-black uppercase mb-4 tracking-widest">Most Popular</div>
          <div className="text-lg font-bold mb-2">Pro</div>
          <div className="text-4xl font-black mb-6">$29 <span className="text-base font-normal opacity-80">/mo</span></div>
          <p className="text-sm opacity-90 mb-8">The complete toolkit for professionals and small teams.</p>
          <ul className="space-y-4 mb-10 text-sm">
            <li className="flex items-center gap-3"><Check className="w-5 h-5" /> Unlimited Downloads</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" /> Advanced AI Tools</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" /> Priority Support</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5" /> All Premium Templates</li>
          </ul>
          <button className="w-full py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-surface-bright transition-all">Upgrade Now</button>
        </div>

        {/* Enterprise */}
        <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10">
          <div className="text-lg font-bold mb-2">Enterprise</div>
          <div className="text-4xl font-black mb-6">$99 <span className="text-base font-normal text-on-surface-variant">/mo</span></div>
          <p className="text-sm text-on-surface-variant mb-8">Tailored solutions for agencies and large organizations.</p>
          <ul className="space-y-4 mb-10 text-sm">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Everything in Pro</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Dedicated Manager</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Custom API Access</li>
          </ul>
          <button className="w-full py-4 bg-white text-primary font-bold rounded-xl border-2 border-primary/20 hover:border-primary transition-all">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};
