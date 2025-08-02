import { IconPlayerPlay, IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
// @ts-expect-error: swiper/css does not have TypeScript types
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Video {
  id: number;
  title: string;
  src: string;
  thumbnail: string;
}

const VideoCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Sample video data - replace with your actual videos
  const videos: Video[] = [
    {
      id: 1,
      title: "Discover Destinations",
      src: "https://videos.pexels.com/video-files/1820193/1820193-uhd_2560_1440_30fps.mp4",
      thumbnail:
        "https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg",
    },
    {
      id: 2,
      title: "Discover Destinations",
      src: "https://videos.pexels.com/video-files/3018669/3018669-hd_1920_1080_24fps.mp4",
      thumbnail:
        "https://images.pexels.com/photos/5504509/pexels-photo-5504509.jpeg",
    },
    {
      id: 3,
      title: "Discover Destinations",
      src: "https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4",
      thumbnail:
        "https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg",
    },
  ];

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (video: Video) => {
    // Pause autoplay when modal opens
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
    setActiveVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Resume autoplay when modal closes
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
    setIsModalOpen(false);
    setActiveVideo(null);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes("")
  );

  return (
    <section id="inspiration" className="w-full relative pt-10">
      <div className="max-w-7xl my-6 mb-12 w-full px-4 mx-auto flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1A120B] mb-2 text-center">
          Fuel your next move with the right inspiration
        </h3>
        <p className="max-w-lg text-center text-gray-800">
          Find the spark you need to begin your journey. Fresh ideas and
          motivation to help you take the first step.
        </p>
      </div>
      <div className="w-full h-screen max-h-[80vh]">
        <Swiper
// @ts-expect-error: swiper/css does not have TypeScript types
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {filteredVideos.map((video) => (
            <SwiperSlide key={video.id} className="h-full">
              <div className="w-full h-full relative">
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div
                  className="absolute inset-0 bg-black/30 gap-2 flex-col flex items-center justify-center cursor-pointer"
                  onClick={() => openModal(video)}
                >
                  <h2 className="text-3xl text-center md:text-4xl text-white font-semibold">
                    {video.title}
                  </h2>
                  <div className="bg-white/70 rounded-full p-3 hover:bg-opacity-100 transition-all">
                    <IconPlayerPlay className="h-10 w-10 text-gray-900" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Popup Modal */}
      {isModalOpen && activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center backdrop-blur-[2px] justify-center bg-black/60 p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Info in Modal */}
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">{activeVideo.title}</h3>
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-4 right-0 text-white hover:text-red-500 transition-colors"
                aria-label="Close video"
              >
                <IconX className="h-8 w-8" />
              </button>
            </div>

            <div className="w-full aspect-video">
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={activeVideo.src}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoCarousel;
