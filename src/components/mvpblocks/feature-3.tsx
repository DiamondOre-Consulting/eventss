import { cn } from '@/lib/utils';
import {
  Globe,
  MapPlus,
  NotebookTabs,
  Phone,
  Plane,
  Route
} from 'lucide-react';

// Define the feature item type
type FeatureItem = {
  icon: React.ComponentType;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Globe,
    title: 'MOBILE CONCIERGE',
    description:
      'A dedicated concierge team provides expert support and guidance before and throughout your journey, ensuring a smooth and personalized travel experience.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: MapPlus,
    title: 'DETAILED SIGHTSEEING PLAN',
    description:
      `A customized sightseeing itinerary ensures you never have to stress about the 'where, what, and how' of your vacation.`,
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Phone,
    title: 'EXPERT TRAVEL PLANNERS',
    description:
      'Expert travel planners curate your journey with deep global insight, ensuring a personalized and enriching experience at every destination.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: NotebookTabs ,
    title: 'DETAIL-ORIENTED',
    description:
      'A fully personalized itinerary ensures a fun and fulfilling holiday for travelers of all ages and interests.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Plane,
    title: 'VACATION OF A LIFETIME',
    description:
      'We craft unforgettable experiences, ensuring every moment of your cherished holiday is truly exceptional.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Route,
    title: 'IT IS YOUR TRIP',
    description:
      'No generic group tours our personalized approach puts you in complete control of your holiday experience.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'from-[#042a26] bg-gradient-to-tr to-[#155A52] ring-border ring',
          feature.cornerStyle,
        )}
      >
        <div className="text-white mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-white mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-[#FDF6EE] text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-primary/0 via-[#FF4F0F] to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pt-20 pb-8 bg-[#e6e6e6]" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">

            <h2 className="text-[#155A52]  text-center text-5xl font-light mb-4 font-heading md:text-5xl">
              Why choose us?
            </h2>
            <p className="text-gray-800 text-md font-semibold mx-auto max-w-[18rem] text-center text-pretty">
              {/* Cohorts are best way to learn because you finish the course in a
              timely manner */}
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
