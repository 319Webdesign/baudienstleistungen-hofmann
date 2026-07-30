import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="projekte">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Referenzen"
            title="Ausgewählte Bauprojekte"
            description="Echte Projekte zeigen am besten, wie aus Planung, Erfahrung und handwerklicher Arbeit tragfähige Ergebnisse entstehen."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/projekte" variant="secondary" size="lg">
            Alle Projekte ansehen
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
