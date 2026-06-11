import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
      <p className="text-gray-600 mb-10">
        Things I've built and worked on.
      </p>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
