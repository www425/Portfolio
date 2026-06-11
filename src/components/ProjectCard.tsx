"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
          {project.title}
        </Link>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <GitFork className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
