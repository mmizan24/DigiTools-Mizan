import React from 'react';

export const CTA = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto bg-inverse-surface rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Ready to transform your <br/>digital output?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Join over 50,000 creators who have already simplified their workflow with DigiTools.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-primary text-on-primary font-bold rounded-2xl shadow-xl hover:scale-105 transition-all">Create Free Account</button>
            <button className="px-10 py-5 text-white font-bold rounded-2xl border-2 border-white/10 hover:bg-white/5 transition-all">Talk to an Expert</button>
          </div>
        </div>
      </div>
    </section>
  );
};
