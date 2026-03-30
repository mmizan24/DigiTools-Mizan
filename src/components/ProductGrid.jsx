import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Check, Star, Zap, Clock, PenTool, Search, Palette, Calendar, Video, Mail, Code, BarChart } from 'lucide-react';
import productsData from '../products.json';

const iconMap = {
  PenTool, Search, Palette, Calendar, Video, Mail, Code, BarChart
};

export function ProductGrid({ onAddToCart }) {
  const [addedIds, setAddedIds] = useState(new Set());

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedIds(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <section id="products" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => {
            const IconComponent = iconMap[product.icon] || Star;
            const isAdded = addedIds.has(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-surface-container-lowest rounded-3xl p-8 border border-surface-container-high hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
              >
                {/* Tag */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    product.tagType === 'popular' ? 'bg-primary/10 text-primary' :
                    product.tagType === 'new' ? 'bg-tertiary/10 text-tertiary' :
                    'bg-secondary/10 text-secondary'
                  }`}>
                    {product.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-on-surface mb-2">{product.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-on-surface-variant">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-surface-container-high mt-auto">
                  <div>
                    <span className="text-2xl font-bold text-on-surface">${product.price}</span>
                    <span className="text-on-surface-variant text-sm ml-1">
                      {product.period === 'one-time' ? '/once' : `/${product.period.replace('ly', '')}`}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={isAdded}
                    className={`flex items-center px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                      isAdded 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-primary text-white hover:bg-primary-dim shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
