import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { loadProjectGallery } from "@/lib/loadProjectGallery";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const gallery = loadProjectGallery(
    project.folder,
    project.title,
    project.coverFile,
    project.image,
  );
  const related = getRelatedProjects(project.slug, 3);

  return (
    <ProjectCaseStudy
      project={project}
      gallery={gallery}
      related={related}
    />
  );
}
