import React from 'react';
import { ShieldCheck, Leaf, Clock, Award, HeartHandshake, Smile } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={24} />,
    title: '100% Satisfaction Guarantee',
    description: 'Not happy? We redo it — free of charge. Your satisfaction is our top priority, no questions asked.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-100 dark:bg-indigo-900/40',
  },
  {
    icon: <Leaf size={24} />,
    title: 'Eco-Friendly Processes',
    description: 'We use biodegradable detergents and water-efficient machines to minimize our environmental footprint.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
  },
  {
    icon: <Clock size={24} />,
    title: 'On-Time Every Time',
    description: 'We respect your schedule. Deliveries are always on time with real-time SMS & app notifications.',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-100 dark:bg-amber-900/40',
  },
  {
    icon: <Award size={24} />,
    title: 'Expert Fabric Specialists',
    description: 'Our team of certified fabric care professionals handles your garments with precision and expertise.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-900/40',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Upfront pricing with itemised bills so you always know what you\'re paying for.',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-100 dark:bg-rose-900/40',
  },
  {
    icon: <Smile size={24} />,
    title: '10,000+ Happy Customers',
    description: 'Trusted by households and businesses across the city for over a decade of consistent quality.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-100 dark:bg-cyan-900/40',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Clients' },
  { value: '12+', label: 'Years Experience' },
  { value: '99%', label: 'On-time Rate' },
  { value: '50+', label: 'Service Areas' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700/50 mb-5">
            <Award size={14} className="text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
            The <span className="gradient-text">RS Difference</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            We go beyond cleaning. We care for your clothes like our own — with precision, passion, and professionalism.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl shadow-indigo-500/30">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(reason => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${reason.bg} ${reason.color}`}>
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">{reason.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
