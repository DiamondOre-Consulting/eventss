import { Timeline } from "@/components/ui/timeline";

export function OurApproachTimeline() {
  const data = [
    {
      title: "1. Consultation",
      content: (
        <div>
          <p className=" text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Every journey with Eventours India begins with a personal
            consultation. We ask about the number of travellers, the destination
            you wish to explore, and the purpose of your travel whether it’s
            leisure, business, family time, or adventure. We also note the
            duration, your past travel experiences, and any special needs. This
            helps us clearly understand what you want. With this base, we start
            designing your trip.
          </p>
        </div>
      ),
    },
    {
      title: "2. Planning Your Travel",
      content: (
        <div>
          <p className=" text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Once we have your inputs, the Eventours team creates a tailored
            itinerary. We suggest hotel options at the best B2B rates, keeping
            them affordable yet comfortable. Sightseeing, activities, and
            experiences are planned according to your interests. We also provide
            support in booking domestic or international tickets. The plan is
            shared with you, and we refine it until you are fully satisfied.
          </p>
        </div>
      ),
    },
    {
      title: "3. Confirming & Booking",
      content: (
        <div>
          <p className=" text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After your approval, Eventours India moves ahead with all
            reservations. Hotels, flights, rental cars, and guided tours are
            confirmed with complete transparency. Our priority is to secure the
            best value deals without compromising quality. With every detail
            managed carefully, the booking process becomes simple and
            worry-free. You can focus on the excitement while we handle the
            logistics.
          </p>
        </div>
      ),
    },
    {
      title: "4. Support During Travel",
      content: (
        <div>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our work doesn’t end after bookings are done. The Eventours team
            stays connected throughout your journey to provide round-the-clock
            assistance. Whether it’s rescheduling, last-minute changes, or
            on-ground support, we are always just a call away. With us by your
            side, you can enjoy your trip with complete peace of mind. We make
            sure your experience is smooth and stress-free.{" "}
          </p>
        </div>
      ),
    },
    {
      title: "5. Feedback & Follow-Up",
      content: (
        <div>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Once you return, Eventours India takes time to connect with you
            again. We listen to your feedback, understand what you loved the
            most, and note areas where we can improve. This not only helps us
            serve you better but also builds a lasting relationship. For us,
            it’s not about a single booking, it's about being your trusted
            travel partner for every journey ahead.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
