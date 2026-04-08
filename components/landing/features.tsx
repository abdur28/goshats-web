"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Banknote,
  ShieldCheck,
  PackageOpen,
  CreditCard,
  Headphones,
} from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Live GPS tracking on every delivery. Know exactly where your package is at all times.",
    accent: "#006B3F",
  },
  {
    icon: Banknote,
    title: "Instant Pricing",
    description:
      "Get an upfront quote before you book. No hidden fees, no surprises.",
    accent: "#DAA520",
  },
  {
    icon: ShieldCheck,
    title: "Verified Riders",
    description:
      "Every rider is background-checked and trained. Your packages are in safe hands.",
    accent: "#10B981",
  },
  {
    icon: PackageOpen,
    title: "Multiple Load Types",
    description:
      "Documents, packages, food, groceries — if it fits on a bike, we'll deliver it.",
    accent: "#006B3F",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay with card or wallet, protected by Paystack. Every transaction is encrypted.",
    accent: "#DAA520",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is always available. Get help whenever you need it.",
    accent: "#10B981",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#FAFBFC]">
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
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Why <span className="text-primary">GoShats</span>?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
            Built for everyone, designed for speed, and focused on trust.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="group relative bg-white rounded-2xl border border-gray-100 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${feature.accent}12` }}
                >
                  <Icon size={24} style={{ color: feature.accent }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
