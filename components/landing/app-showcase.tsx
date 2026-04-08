"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BADGES = [
  { label: "Live Tracking", x: "-left-4 lg:-left-24", y: "top-[1%] lg:top-[15%]", delay: 0 },
  { label: "Instant Quotes", x: "-right-4 lg:-right-12", y: "top-[10%] lg:top-[30%]", delay: 0.8 },
  { label: "Secure Pay", x: "-left-4 lg:-left-8", y: "bottom-[10%] lg:bottom-[30%]", delay: 1.6 },
  { label: "Verified Riders", x: "-right-4 lg:-right-28", y: "-bottom-[10%] lg:bottom-[15%]", delay: 2.4 },
];

export function AppShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            The App
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Everything you need,
            <br />
            <span className="text-primary">right in your pocket</span>
          </h2>
        </motion.div>

        {/* Mockup with floating badges */}
        <div className="relative max-w-lg mx-auto">
          {/* Glow behind mockup */}
          <div className="absolute inset-0 -inset-x-20 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

          {/* Mockup image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/mockup.png"
              alt="GoShats app showing delivery tracking on two iPhones"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Floating badges */}
          {BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`absolute z-20 ${badge.x} ${badge.y}`}
            >
              <div
                className="animate-float bg-white rounded-full px-5 py-2.5 shadow-lg shadow-gray-200/60 border border-gray-100 text-sm font-semibold text-gray-800 whitespace-nowrap"
                style={{ animationDelay: `${badge.delay}s` }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
                {badge.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
