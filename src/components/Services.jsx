import React, { useState } from 'react';
import { Waves, Wind, Sparkles, Droplets, Truck, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'washing-drying',
    icon: <Waves size={28} />,
    emoji: '🫧',
    title: 'Washing & Drying',
    description:
      'Industrial-grade washing machines with premium detergents tailored to each fabric type. Your clothes come back fresh, soft, and perfectly dried.',
    features: ['Fabric-specific detergents', 'Colour-safe wash', 'Tumble & air dry options'],
    gradient: 'from-blue-500 to-cyan-500',
    light: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800/40',
    badge: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ironing',
    icon: <Wind size={28} />,
    emoji: '🧺',
    title: 'Ironing / Steam Press',
    description:
      'Expert steam pressing that eliminates every wrinkle and gives your garments a crisp, professional finish worthy of any occasion.',
    features: ['Heavy steam press', 'Crease protection', 'Delicate garment safe'],
    gradient: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-100 dark:border-violet-800/40',
    badge: 'from-violet-500 to-purple-600',
  },
  {
    id: 'dry-cleaning',
    icon: <Sparkles size={28} />,
    emoji: '✨',
    title: 'Dry Cleaning',
    description:
      'Professional dry cleaning using eco-friendly solvents, perfect for suits, gowns, silks, and all delicate designer garments.',
    features: ['Chemical-free options', 'Suits & formals', 'Silk & wool safe'],
    gradient: 'from-emerald-500 to-teal-500',
    light: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-800/40',
    badge: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'stain-removal',
    icon: <Droplets size={28} />,
    emoji: '💧',
    title: 'Stain Removal',
    description:
      'Advanced stain treatment techniques for wine, oil, ink, blood, and more. We tackle even the most stubborn stains without damaging your fabric.',
    features: ['Pre-treatment analysis', 'Multi-enzyme formula', 'Safe on all colors'],
    gradient: 'from-rose-500 to-pink-500',
    light: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-100 dark:border-rose-800/40',
    badge: 'from-rose-500 to-pink-500',
  },
  {
    id: 'pickup-delivery',
    icon: <Truck size={28} />,
    emoji: '🚚',
    title: 'Pickup & Delivery',
    description:
      'Convenient doorstep pickup and delivery at your preferred time slot. We handle logistics so you can focus on what matters most.',
    features: ['Time-slot booking', 'Real-time tracking', 'Contactless delivery'],
    gradient: 'from-amber-500 to-orange-500',
    light: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-800/40',
    badge: 'from-amber-500 to-orange-500',
  },
  {
    id: 'express-service',
    icon: <Zap size={28} />,
    emoji: '⚡',
    title: 'Express Service',
    description:
      'Need it fast? Our express 12–24 hour turnaround ensures your clothes are ready when you need them — perfect for last-minute occasions.',
    features: ['12-hour turnaround', 'Priority processing', 'Rush order available'],
    gradient: 'from-indigo-500 to-blue-600',
    light: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-100 dark:border-indigo-800/40',
    badge: 'from-indigo-500 to-blue-600',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-gray-950">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700/50 mb-5">
            <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">What We Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            From everyday laundry to delicate couture — we have a tailored solution for every fabric and every occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {services.slice(0, 3).map((svc, idx) => (
            <div
              key={svc.id}
              id={`service-${svc.id}`}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-3xl border p-7 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${svc.light} ${svc.border} ${hovered === svc.id ? 'shadow-xl' : 'shadow-md'
                }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Top icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {svc.icon}
              </div>

              {/* Emoji floating */}
              <span className="absolute top-6 right-6 text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {svc.emoji}
              </span>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{svc.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{svc.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${svc.gradient} flex-shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${svc.badge} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}
              >
                Book Now <ArrowRight size={14} className={`bg-gradient-to-r ${svc.gradient} text-transparent`} style={{ color: 'inherit' }} />
              </a>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
