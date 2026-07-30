import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn
      delay={index * 70}
      as="article"
      id={project.id}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(28,31,33,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,31,33,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite/50 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-anthracite">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-anthracite sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>
        <div className="mt-5">
          <Button href={project.href} variant="ghost" className="px-0">
            Projekt ansehen
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
