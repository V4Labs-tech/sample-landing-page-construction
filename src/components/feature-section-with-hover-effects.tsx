import { cn } from "@/lib/utils";
import {
  RotateCw,
  Scissors,
  Settings,
  Drill,
  BoxSelect,
  CircleDot,
  Nut,
  ShieldCheck, // A more fitting icon for Quality Assurance
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "CNC Lathe Machining",
      description:
        "High-precision turning operations for components requiring tight tolerances and smooth finishes.",
      icon: <RotateCw className="w-8 h-8" />,
    },
    {
      title: "Milling",
      description:
        "Accurate shaping and contouring of parts using vertical and horizontal milling machines.",
      icon: <Scissors className="w-8 h-8" />,
    },
    {
      title: "Traub Machine Operations",
      description:
        "High-volume, automatic turning for small and medium-sized components with consistent quality.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Drilling",
      description:
        "Accurate hole-making and finishing operations for a variety of industrial parts.",
      icon: <Drill className="w-8 h-8" />,
    },
    {
      title: "Surface Grinding",
      description:
        "Precision flat surface finishing to achieve tight tolerances and excellent surface quality.",
      icon: <BoxSelect className="w-8 h-8" />,
    },
    {
      title: "Centerless Grinding",
      description:
        "High-efficiency cylindrical grinding for achieving uniformity in parts without the need for centers.",
      icon: <CircleDot className="w-8 h-8" />,
    },
    {
      title: "Thread Rolling",
      description:
        "Cold-forming process to produce precise and durable threads with enhanced strength and surface finish.",
      icon: <Nut className="w-8 h-8" />,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and inspection to ensure every component meets the highest standards.",
      icon: <ShieldCheck className="w-8 h-8" />, // Replaced icon
    }
  ];
  return (
    <div className="bg-gray-50 dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Our Core Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Precision manufacturing services tailored to meet diverse client needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-gray-600 dark:text-gray-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-neutral-700 group-hover/feature:bg-gray-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
