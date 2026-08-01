/**
 * Zentrale Bildquellen – später durch echte Projektfotos ersetzen.
 * Motive: europäische Baustellenoptik (Rohbau, Beton, Erdarbeiten, Fundamente).
 */
export const images = {
  hero: {
    src: "/mauer.webp",
    alt: "Mauerarbeiten und Rohbau auf der Baustelle",
  },
  about: {
    src: "/thomas-hofmann.png",
    alt: "Thomas Hofmann – Maurermeister und staatlich geprüfter Bautechniker",
  },
  services: {
    rohbau: {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      alt: "Rohbau und Betonarbeiten",
    },
    umbau: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      alt: "Umbau und Sanierungsarbeiten",
    },
    erdarbeiten: {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
      alt: "Erdarbeiten mit Bagger auf dem Grundstück",
    },
    spezial: {
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
      alt: "Spezialfundament und Betonarbeiten",
    },
  },
  projects: {
    fundament: {
      src: "/projekte/mobilfunkfundamente.png",
      alt: "Mobilfunkfundament mit Betonplatte und Leerrohr",
    },
    stahltraeger: {
      src: "/projekte/Projekt_Keisner/IMG_0065_ergebnis.webp",
      alt: "Projekt Keisner – Umbau und Stahlträgereinbau",
    },
    anbau: {
      src: "/projekte/Projekt_Abel_Rüsselsheim/IMG_1695web.webp",
      alt: "Projekt Abel Rüsselsheim – Rohbau",
    },
    pflaster: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
      alt: "Pflasterarbeiten und Außenanlage",
    },
    lichtmast: {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      alt: "Technisches Fundament für Außenanlage",
    },
    hebebuehne: {
      src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80",
      alt: "Betonfundament nach technischen Vorgaben",
    },
  },
  details: {
    schalung: {
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
      alt: "Schalungsarbeiten",
    },
    bewehrung: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      alt: "Bewehrungsarbeiten",
    },
  },
} as const;

export type ImageAsset = { src: string; alt: string };
