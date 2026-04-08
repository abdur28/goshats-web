"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Book",
    description: "Tell us what to move, where from, and where to",
    color: "#006B3F",
  },
  {
    title: "Match",
    description: "We match you with the nearest available rider",
    color: "#DAA520",
  },
  {
    title: "Track",
    description: "Watch your delivery in real-time on the map",
    color: "#10B981",
  },
  {
    title: "Deliver",
    description: "Your package arrives safe and on time",
    color: "#006B3F",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top - windowH;
      const end = rect.bottom - windowH * 0.4;
      const total = end - start;
      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, -start / total));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const PATH_D =
    "M 300 40 C 300 140, 500 160, 500 260 C 500 360, 100 380, 100 480 C 100 580, 500 600, 500 700 C 500 800, 300 820, 300 920";
  const PATH_LENGTH = 1500;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Four steps to
            <span className="text-primary"> delivery</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
            From booking to doorstep — it only takes a few minutes.
          </p>
        </motion.div>

        {/* Journey container */}
        <div className="relative max-w-2xl mx-auto">
          {/* SVG Journey Line — desktop */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:block pointer-events-none"
            width="600"
            height="960"
            viewBox="0 0 600 960"
            fill="none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#006B3F" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
            </defs>
            {/* Track (faint) */}
            <path
              d={PATH_D}
              stroke="#E5E7EB"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Animated draw */}
            <path
              d={PATH_D}
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={PATH_LENGTH}
              strokeDashoffset={PATH_LENGTH * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
            <path id="journeyPath" d={PATH_D} fill="none" />
          </svg>

          {/* Mobile: simple vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-gold transition-all duration-100"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="relative space-y-16 md:space-y-24" style={{ zIndex: 1 }}>
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative pl-14 md:pl-0 ${
                    isEven ? "md:pr-[55%]" : "md:pl-[55%]"
                  }`}
                >
                  {/* Step number dot (mobile) */}
                  <div
                    className="absolute left-3 top-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white md:hidden"
                    style={{ backgroundColor: step.color }}
                  >
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-bold text-white shrink-0"
                        style={{ backgroundColor: step.color }}
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed ml-11">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
