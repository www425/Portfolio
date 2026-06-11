"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "PostgreSQL",
  "Docker",
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>

        <div className="prose prose-gray max-w-none mb-10">
          <p>
            I'm a developer based in [Your City]. I enjoy building things for
            the web, from small side projects to full-scale applications.
          </p>
          <p>
            I'm passionate about clean code, good design, and creating
            experiences that users love. When I'm not coding, you'll find me
            [your hobbies].
          </p>
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
            href="mailto:your-email@example.com"
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
