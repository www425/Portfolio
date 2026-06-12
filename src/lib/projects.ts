import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  date: string;
}

export interface Section {
  title: string;
  items: string[];
}

export interface ProjectData {
  meta: ProjectMeta;
  sections: Section[];
}

const projectsDir = path.join(process.cwd(), "src", "content", "projects");

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir);
  const projects = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        tech: data.tech || [],
        github: data.github || null,
        live: data.live || null,
        image: data.image || null,
        date: data.date || "",
      } as ProjectMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return projects;
}

export function getProjectBySlug(slug: string): ProjectData | null {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const sections: Section[] = [];
  let currentTitle = "";
  let currentItems: string[] = [];

  for (const line of content.split("\n")) {
    if (line.startsWith("## ")) {
      if (currentTitle && currentItems.length > 0) {
        sections.push({ title: currentTitle, items: currentItems });
      }
      currentTitle = line.replace("## ", "").trim();
      currentItems = [];
    } else if (line.startsWith("- ")) {
      currentItems.push(line.replace("- ", "").trim());
    } else if (line.trim() && !line.startsWith(">")) {
      currentItems.push(line.trim());
    }
  }
  if (currentTitle && currentItems.length > 0) {
    sections.push({ title: currentTitle, items: currentItems });
  }

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      tech: data.tech || [],
      github: data.github || null,
      live: data.live || null,
      image: data.image || null,
      date: data.date || "",
    },
    sections,
  };
}
