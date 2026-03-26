import React from 'react';
import { ArrowRight, Star, CheckCircle2, Construction, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-indigo-400/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-36 pb-12">
        {/* Maintenance Message - Styled as a Premium Reveal Section */}
        <div className="w-full max-w-2xl mb-16 animate-fadeInUp">
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50">
              <Construction size={16} className="text-amber-600 animate-bounce" />
              <span className="text-md font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Site Under Development
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl sm:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                RS Fabricare <br />
                <span className="gradient-text">Coming in April 2026</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
                We're currently stitching together a premium fabric care experience.
                Our platform is undergoing its final rinse and press.
              </p>
            </div>

          </div>
        </div>

        {/* Hero Header */}
        {/* <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
          <h1 className="text-8xl sm:text-9xl lg:text-[11rem] font-black text-gray-900 dark:text-white leading-[0.8] tracking-tighter">
            THE <span className="gradient-text">FUTURE</span> <br />
            OF CARE
          </h1>


        </div> */}
      </div>

    </section>
  );
}
