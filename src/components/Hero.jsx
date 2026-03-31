import { motion } from 'motion/react';
import { ArrowRight, Play, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
      {/* Background Accents */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div> 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: AI Content Generator 2.0
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-on-surface leading-[1.1] mb-8 tracking-tight">
              Supercharge Your <br />Digital Workflow
            </h1>

            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.

              Explore Products

            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 flex items-center group">
                Explore Tools
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-surface-container text-on-surface px-8 py-4 rounded-2xl font-bold text-lg hover:bg-surface-container-high transition-all flex items-center">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {/* <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div> */}
              {/* <p className="text-sm text-on-surface-variant">
                <span className="font-bold text-on-surface">10k+</span> creators already using DigiTools
              </p> */}
            </div>
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1, delay: 0.2 }}
            // className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
              <img className='w-full h-auto' src="/src/assets/banner.png" alt="" />
            </div>

            {/* Floating Elements */}
            <motion.div
              // animate={{ y: [0, -20, 0] }}
              // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              // className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-surface-container-high hidden md:block"
            >
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <ArrowRight className="text-green-600 w-6 h-6 rotate-[-45deg]" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Efficiency</p>
                  <p className="text-xl font-black text-on-surface">+145%</p>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              // animate={{ y: [0, 20, 0] }}
              // transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              // className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-surface-container-high hidden md:block"
            >
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Star className="text-primary w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Rating</p>
                  <p className="text-xl font-black text-on-surface">4.9/5.0</p>
                </div>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
