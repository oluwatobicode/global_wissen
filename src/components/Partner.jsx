const Partners = () => {
  const partnerLogos = [
    { name: "Partner 1", logo: "/partners/logoOne.png" },
    { name: "Partner 2", logo: "/partners/logoTwo.png" },
    { name: "Partner 3", logo: "/partners/logoThree.png" },
    { name: "Partner 4", logo: "/partners/logoFour.png" },
    { name: "Partner 5", logo: "/partners/logoFive.png" },
    { name: "Partner 6", logo: "/partners/logoSix.png" },
    { name: "Partner 7", logo: "/partners/logoSeven.png" },
    { name: "Partner 8", logo: "/partners/logoEight.png" },
    { name: "Partner 9", logo: "/partners/logoNine.jpeg" },
    { name: "Partner 10", logo: "/partners/logoTen.png" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide the best learning
            experience
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg py-8">
          <div className="flex animate-scroll space-x-12">
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-16 w-auto object-contain  transition-all duration-300"
                />
              </div>
            ))}

            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-16 w-auto object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
          display: flex;
          width: calc(200% + 96px);
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
