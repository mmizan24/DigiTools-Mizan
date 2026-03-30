import React from 'react';
import { Share2, Globe, MessageSquare, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 w-full pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto mb-20">
        <div>
          <div className="text-xl font-black text-white mb-8">DigiTools</div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">Providing the highest quality digital assets and tools for the modern internet age.</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
              <Globe className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Marketplace</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">AI Writing</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Integrations</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">About Us</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8">Newsletter</h4>
          <p className="text-slate-400 text-xs mb-6">Weekly insights on digital growth directly to your inbox.</p>
          <div className="flex gap-2">
            <input 
              className="bg-slate-900 border-0 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary w-full px-4 py-2" 
              placeholder="Email" 
              type="email"
            />
            <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dim transition-all">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-10 border-t border-white/5 text-center">
        <p className="text-slate-400 text-sm">© 2024 DigiTools Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
