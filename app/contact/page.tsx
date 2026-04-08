"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Mail, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <Image
                src="/icon.png"
                alt="GoShats"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Go<span className="text-gold">.</span>Shats
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-24">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
            <Mail size={28} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto">
            Have a question, feedback, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>
        </motion.div>

        {/* Form */}
        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Message Sent!
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Thanks for reaching out. We&apos;ve sent a confirmation to your
              email and will get back to you soon.
            </p>
            <button
              onClick={() => setState("idle")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400",
                    "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                  )}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="you@example.com"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400",
                    "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                  )}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) =>
                  setForm((p) => ({ ...p, subject: e.target.value }))
                }
                placeholder="What's this about?"
                className={cn(
                  "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400",
                  "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                )}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Tell us what's on your mind..."
                className={cn(
                  "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-none",
                  "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                )}
              />
            </div>

            {/* Error */}
            {state === "error" && (
              <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "submitting"}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all",
                state === "submitting"
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              )}
            >
              {state === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </main>
    </div>
  );
}
