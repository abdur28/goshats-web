"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const TubesBackground = dynamic(
  () => import("./tubes-background").then((mod) => mod.TubesBackground),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0a1f14" }}>
      {/* 3D Tubes Background */}
      <TubesBackground />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-[#0a1f14]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-24 pb-20 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full h-full flex justify-center item-center pb-6"
        >
          <Image
              src="/icon.png"
              alt="GoShats"
              width={120}
              height={120}
              className="object-contain"
            />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Delivery,
          <br  />
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Simplified.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Move anything across Nigeria — documents, packages, food, and more.
          Book a rider in seconds, track in real-time, and get it delivered fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
          >
            <Play size={16} className="text-gold" />
            See How It Works
          </a>
        </motion.div>
      </div>

         </section>
  );
}
