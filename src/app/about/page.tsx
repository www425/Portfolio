"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, GraduationCap, Phone } from "lucide-react";

const skills = [
  "C++", "Python", "Java",
  "MySQL", "LangChain", "LangGraph",
  "RAG", "Agent", "NLP",
  "PyTorch", "Git",
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

        {/* 个人信息卡片 */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>华东师范大学 · 软件工程 本硕 (2020-2027)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>上海 (现居成都)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>182-1556-3618</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>51275902053@stu.ecnu.edu.cn</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none mb-10">
          <h3>教育背景</h3>
          <ul>
            <li><strong>硕士</strong> — 华东师范大学 软件工程 (2024-2027) | GPA: 3.44/4.0 | Rank: 15/60</li>
            <li><strong>本科</strong> — 华东师范大学 软件工程 (2020-2024) | GPA: 3.51/4.0 (87.75/100) | Rank: 36/184</li>
          </ul>
          <p>CET-4: 507 | CET-6: 523</p>

          <h3>研究方向</h3>
          <p>自然语言处理、偏见消除、大模型应用、RAG 系统、Agent 智能体</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="mailto:51275902053@stu.ecnu.edu.cn"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </motion.section>
    </div>
  );
}
