import {
  Shovel,
  Layers,
  Grid3X3,
  BrickWall,
  Hammer,
  Building2,
  Settings,
  BadgeCheck,
  Ruler,
  MapPin,
  CalendarDays,
  Clock3,
  HardHat,
  Users,
  Maximize2,
  type LucideIcon,
} from "lucide-react";
import type { ProjectWorkIcon } from "@/data/projects";

export const workIconMap: Record<ProjectWorkIcon, LucideIcon> = {
  shovel: Shovel,
  layers: Layers,
  grid: Grid3X3,
  brick: BrickWall,
  hammer: Hammer,
  building: Building2,
  settings: Settings,
  check: BadgeCheck,
  ruler: Ruler,
};

export const metaIconMap = {
  location: MapPin,
  completion: CalendarDays,
  duration: Clock3,
  service: HardHat,
  client: Users,
  size: Maximize2,
} as const;
