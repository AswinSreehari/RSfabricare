import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Fashion Designer',
    avatar: '👩‍🎨',
    rating: 5,
    review:
      'RS Fabric Solutions is my go-to for all delicate designer pieces. They handled my silk sarees with absolute care. The steam press finish is impeccable — better than any dry cleaner I\'ve used!',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    role: 'Corporate Executive',
    avatar: '👨‍💼',
    rating: 5,
    review:
      'The express service is a lifesaver! I needed my suits ready overnight for an important meeting and they delivered — perfectly pressed and fresh. Pickup and delivery was smooth and on time.',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    role: 'Home Maker',
    avatar: '👩‍🏠',
    rating: 5,
    review:
      'Finally found a reliable laundry service that treats my kids\' clothes gently. The stain removal on my son\'s white shirt was miraculous. I\'ve recommended RS to all my neighbours!',
  },
  {
    id: 4,
    name: 'Sanjay Reddy',
    role: 'Restaurant Owner',
    avatar: '👨‍🍳',
    rating: 5,
    review:
      'We use RS for all our restaurant linens and staff uniforms. Consistent quality, always on schedule, and the eco-friendly approach aligns with our brand values. Highly recommended for businesses.',
  },
  {
    id: 5,
    name: 'Meena Iyer',
    role: 'Yoga Instructor',
    avatar: '🧘‍♀️',
    rating: 5,
    review:
      'Eco-friendly washing was my top priority and RS delivers exactly that. My workout gear always comes back smelling fresh without harsh chemical residue. Brilliant service!',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(testimonials.length / 3);

  const visible = () => {
    if (window.innerWidth < 640) return [testimonials[current]];
    const start = current * 3;
    return testimonials.slice(start, start + 3);
  };

  const prev = () => setCurrent(c => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent(c => (c === total - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700/50 mb-5">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Customer Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Real stories from real customers who trust RS Fabric Solutions with their precious garments.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-indigo-200 dark:text-indigo-800 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">4.9 / 5.0</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Based on 1,200+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
