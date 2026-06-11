"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Writing maintainable, well-structured code is my priority.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building modern web applications with cutting-edge tech.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized for speed and great user experience.",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A passionate developer who loves building things for the web.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View My Work
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <item.icon className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
