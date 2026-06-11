"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/Carousel";

const highlights = [
  {
    icon: Code,
    title: "Software Engineering",
    desc: "华东师范大学软件工程本硕，扎实的计算机基础与工程实践能力。",
  },
  {
    icon: Globe,
    title: "NLP & AI",
    desc: "研究方向包括偏见消除、文本分类、RAG 系统等，有开源项目。",
  },
  {
    icon: Zap,
    title: "Full-Stack Dev",
    desc: "熟练使用 C++/Python/Java，掌握 LangChain、MySQL、前后端开发。",
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
          Hi, I'm <span className="text-blue-600">王锡宽</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          华东师范大学 软件工程本硕 2027届 · 热爱构建有影响力的软件
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

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        </h2>
        <Carousel
          images={[
            { src: "/certificates/1.jpg", alt: "Certificate 1" },
            { src: "/certificates/2.jpg", alt: "Certificate 2" },
            { src: "/certificates/3.jpg", alt: "Certificate 3" },
          ]}
        />
      </section>
    </div>
  );
}
