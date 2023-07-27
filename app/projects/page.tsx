import { Github, Link } from "lucide-react";
import { Metadata } from "next";

import projects from "@/data/projects";

export const metadata: Metadata = {
  title: "Christoph Stach - Projects",
  openGraph: {
    title: "Christoph Stach - Projects",
  },
};

export default function Projects() {
  return (
    <div>
      <div className="prose prose-indigo mb-10 max-w-none dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl">
        <h2>Projects</h2>
      </div>

      <section className="mb-10">
        <p>
          Here, you{"'"}ll find a selection of the projects I{"'"}ve worked on
          that showcase my skills and interests as a developer. I am constantly
          learning and experimenting with new technologies, and these projects
          reflect that passion for growth and innovation.
        </p>
      </section>

      <div className="flex flex-wrap justify-between gap-10">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex max-w-xs flex-col gap-3 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-w-md"
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div
                className="prose prose-sm prose-indigo dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="block rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}

              {project.website && (
                <div className="flex items-center gap-3">
                  <div>
                    <Link />
                  </div>
                  <a
                    href={project.website}
                    className="flex-1 break-all text-sm text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    {project.website}
                  </a>
                </div>
              )}

              {project.repository && (
                <div className="flex items-center gap-3">
                  <div>
                    <Github />
                  </div>
                  <a
                    href={project.repository}
                    className="flex-1 break-all text-sm text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    {project.repository}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
