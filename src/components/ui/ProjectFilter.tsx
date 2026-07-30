"use client";

import { useMemo, useState } from "react";
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectFilter() {
  const [active, setActive] = useState<ProjectFilter>("Alle");

  const filtered = useMemo(() => {
    if (active === "Alle") return projects;
    return projects.filter((p) => p.filterCategories.includes(active));
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Projekte filtern"
      >
        {projectFilters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-orange text-white shadow-sm"
                  : "bg-white text-anthracite hover:bg-anthracite hover:text-white",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-muted">
          Für diesen Filter sind noch keine Projekte hinterlegt.
        </p>
      ) : null}
    </div>
  );
}
