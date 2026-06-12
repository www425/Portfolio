"use client";

import { useState } from "react";
import { ArrowLeft, ExternalLink, GitFork, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectData {
  meta: {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    github?: string | null;
    live?: string | null;
    image?: string | null;
  };
  content: string;
}

export default function ProjectContent({ project }: { project: ProjectData }) {
  const { meta, content } = project;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {meta.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{meta.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {meta.github && (
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <GitFork className="w-4 h-4" />
                Source Code
              </a>
            )}
            {meta.live && (
              <a
                href={meta.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </header>

        <ImageToggle image={meta.image} title={meta.title} />

        <div className="prose prose-gray max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-1.5
          prose-li:text-gray-700
          prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-gray-100 prose-code:rounded prose-code:text-sm prose-code:font-normal
          prose-hr:border-gray-200">
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
      </article>
    </div>
  );
}

function ImageToggle({ image, title }: { image?: string | null; title: string }) {
  const [open, setOpen] = useState(false);

  if (!image) return null;

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {open ? "Hide architecture diagram" : "Show architecture diagram"}
      </button>
      {open && (
        <div className="mt-4 rounded-xl border border-gray-200 p-2 bg-gray-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`${title} diagram`}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
