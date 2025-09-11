import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    "image/i12.png",
    "image/banner3.png",
    "image/i7.png",
    "image/i1.png",
    "image/i13.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <main className="min-h-screen relative overflow-hidden" id="hero">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      <div className="relative z-10 min-h-screen px-4 sm:px-6 py-24 flex items-center">
        <div className="max-w-7xl flex items-center justify-center mx-auto w-full">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium font-family-mono tracking-tight mb-6 sm:mb-8 leading-[1.1] text-white drop-shadow-lg px-2">
              DEVELOPING DIGITAL AND ENTREPRENEURSHIP SKILL
            </h1>

            <p className="text-sm text-center xs:text-base sm:text-lg md:text-xl leading-[1.34] tracking-tight font-family-sans-serif text-white/90 mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-2xl drop-shadow-md px-4">
              Learn industry-ready skills with hands-on projects, mentorship,
              and career support. Transform your career with cutting-edge
              technology education.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
