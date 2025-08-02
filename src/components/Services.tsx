import { useId } from "react";

export function Services() {
  return (
    <div className="py-10 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative shadow-md cursor-pointer bg-gradient-to-b  from-[#f5faf9]  to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-xl font-bold text-neutral-800  relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-800  mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Tickets & Bookings",
    description:
      "From domestic getaways to international adventures, we book flights that suit your schedule and budget. At Eventours, we ensure smooth, stress-free air travel with trusted routes and competitive fares.",
  },
  {
    title: "Hotel Reservations",
    description:
      "From luxury resorts to cozy stays, we handpick hotels that match your travel style and budget. Our trusted network guarantees comfort and convenience because every stay should feel like the right one.",
  },
  {
    title: "Visa Assistance",
    description:
      "Visa processes can be overwhelming we simplify them for you. From documentation to embassy appointments, Eventours ensures your application is accurate, timely, and stress-free.",
  },
  {
    title: "Sightseeing",
    description:
      "We don’t just show you places we let you live them. From must-see spots to hidden gems, enjoy immersive local experiences tailored to your style.",
  },
  {
    title: "Holidays & Vacation Packages",
    description:
      "At Eventours, we design holidays that fit you your vibe, your pace, your dreams and build 100% customized holiday plans. From destination to detail, every trip is hand-built to match exactly how you want to travel.",
  },
  {
    title: "Corporate Conferences & Offsite Events",
    description:
      "Business travel deserves better planning. From smooth logistics to memorable team experiences, Eventours handles every detail to deliver productive, seamless, and memorable business events.",
  },
  {
    title: "Weddings Celebrations",
    description:
      "Weddings are once-in-a-lifetime and we treat them that way. Eventours handles every element of your celebration, creating elegant, effortless events in breathtaking locations.",
  },
    {
      title: "Customised Ski Guided Experiences",
      description:
        "Embark on a ski journey designed around you. From identifying slopes to expert guides and full support on-ground, Eventours crafts unforgettable ski experiences tailored to your skill and style.",
    },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]  from-zinc-100/30 to-zinc-300/30  opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay   stroke-[#155A52]/20 fill-[#155A52]/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
