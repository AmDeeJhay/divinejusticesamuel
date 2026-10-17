import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-14 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-mono">
              Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Client &amp; Engineering Endorsements
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Authentic feedback from VPs of Engineering, founders, and product directors.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/70 bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/70 bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-purple-600/10 dark:text-purple-400/10 -rotate-12 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl"
            >
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400" />
                ))}
              </div>

              {/* Main Quote */}
              <blockquote className="text-xl sm:text-2xl font-medium text-slate-900 dark:text-white leading-relaxed tracking-tight mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-purple-500/40 shrink-0 shadow-sm">
                  <ImageWithFallback
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    {testimonials[currentIndex].relationship}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-purple-600 dark:bg-purple-400'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
