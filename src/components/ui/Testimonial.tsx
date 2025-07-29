"use client"

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "When I booked, I knew how to start but by sheer luck, my buddy recommended Mr. Maheshwari, the owner of the event tour. He gave us an amazing itinerary and thanks to his help, we saw a ton of attractions at a really good price.",
    by: "Jitender Singh",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },

  {
    tempId: 2,
    testimonial: "We planned a Trip to Mauritius with Eventours Mudit and he planned it meticulously, all arrangements were done before we reached for our stay , he chose the perfect resort and helped us planning airlines and activities there ! We had an amazing trip ! Thanks to Mudit ! Will definitely recommend your service to friends and family!",
    by: "Rati Mehrotra",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "My family and I have been booking holidays all over the world with Mudit and Eventours for almost 10 yrs now and we have never been disappointed. Right from the stage of deciding on the destination till the actual travel, Mudit gets personally involved with every single detail, ensuring that he is giving you not only the best deal but also the best experience .",
    by: "Ritika Sharan",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "On our recent trip to Spain, we reached out to Eventours and Mudit for help with all the planning and the itinerary. Mudit takes a personal interest and was extremely meticulous with his planning and organisation of the entire trip and we didnt have to worry about a thing! Even when we had a contingency while on the trip, Mudit helped us resolve the issue asap.",
    by: "Anjali krishnakumar",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "I recently booked a trip through EVENTOURS and I must say it was a fantastic experience from start to finish. The itinerary was well-planned, accommodations were comfortable, and the transport was punctual. Every detail was taken care of, allowing us to simply relax and enjoy our vacation.",
    by: "Nidhi Singh",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "I didn’t go, but my wife, daughter, and son went on a short trip to Goa. When my daughter returned, she exclaimed, “Wow!” It was a hassle-free trip—everything was well-planned and smoothly arranged. Thank you so much, Mudit! We’ll definitely get back to you soon!",
    by: "Anil Rahal",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: `Passionate !!! That is the word for Mudit. He is no regular adviser who just help in arranging and booking. He gets himself so involved in your planning, as if he himself is going with you.
He has spent countless hours with us , just to finalize one city ,one hotel, in in our tours of France, Switzerland and Italy.`,
    by: "Rajbir Singh",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: `Mudit planned our honeymoon trip to Mauritius. He provided the detailed itinerary and customised it according to our needs and liking. The resorts, sightseeing, activities, and commute provided were all excellent. Looking forward to taking Eventours services for our future excursions as well.`,
    by: "Diksha Madan",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },

];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      {/* <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      /> */}
      <h3 className={cn(
        "text-base  font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const Testimonial: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
