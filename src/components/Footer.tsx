import { GitFork, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <GitFork className="w-5 h-5" />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
