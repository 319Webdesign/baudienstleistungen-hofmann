import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/seo";

export function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="faq">
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <FadeIn className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen"
            description="Kurze Antworten zu Leistungen, Ablauf und Zusammenarbeit – weitere Details gerne im persönlichen Gespräch."
          />
        </FadeIn>
        <FadeIn delay={80}>
          <Accordion items={faqs} />
        </FadeIn>
      </div>
    </section>
  );
}
