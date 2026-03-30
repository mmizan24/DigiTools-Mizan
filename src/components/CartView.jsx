import React from 'react';
import { motion } from 'motion/react';
import { Trash2, ShoppingBag, ArrowRight, Star, PenTool, Search, Palette, Calendar, Video, Mail, Code, BarChart } from 'lucide-react';

const iconMap = {
  PenTool, Search, Palette, Calendar, Video, Mail, Code, BarChart
};

export const CartView = ({ items, onRemove, onCheckout, onTabChange }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <section className="py-24 bg-surface min-h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-on-surface-variant opacity-20" />
          </div>
          <h2 className="text-3xl font-bold text-on-surface mb-4">Your cart is empty</h2>
          <p className="text-on-surface-variant mb-12">
            Looks like you haven't added any digital tools to your cart yet.
          </p>
          <button
            onClick={() => onTabChange('products')}
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dim transition-all shadow-xl shadow-primary/20"
          >
            Browse Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-on-surface">Shopping Cart</h2>
          <span className="text-on-surface-variant font-medium">{items.length} items</span>
        </div>

        <div className="space-y-4 mb-12">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center bg-surface-container-lowest p-6 rounded-3xl border border-surface-container-high shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mr-6 flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-on-surface text-lg">{item.name}</h3>
                  <p className="text-on-surface-variant text-sm">
                    {item.period === 'one-time' ? 'One-time purchase' : `${item.period.charAt(0).toUpperCase() + item.period.slice(1)} subscription`}
                  </p>
                </div>
                <div className="text-right mr-8">
                  <p className="font-bold text-on-surface text-xl">${item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-3 text-error hover:bg-error/10 rounded-xl transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-high shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-medium text-on-surface-variant">Total Amount</span>
            <span className="text-4xl font-black text-on-surface">${total}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98]"
          >
            Proceed to Checkout
          </button>
          <p className="text-center text-on-surface-variant text-sm mt-6">
            Secure checkout powered by DigiTools Payments
          </p>
        </div>
      </div>
    </section>
  );
}
