"use client";

import { motion } from "framer-motion";

export function DownloadCTA() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Green gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0a1f14]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to deliver?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
            Download GoShats and start moving things across Nigeria today.
            Available on iOS and Android.
          </p>

          {/* Store buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="group flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-7 py-4 transition-all hover:bg-white/20 hover:border-white/25 hover:-translate-y-0.5"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[11px] text-white/60 leading-tight">
                  Download on the
                </div>
                <div className="text-base font-semibold text-white leading-tight">
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="group flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-7 py-4 transition-all hover:bg-white/20 hover:border-white/25 hover:-translate-y-0.5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.81zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[11px] text-white/60 leading-tight">
                  Get it on
                </div>
                <div className="text-base font-semibold text-white leading-tight">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
