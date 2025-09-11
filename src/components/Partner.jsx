const Partners = () => {
  const partnerLogos = [
    { name: "Partner 1", logo: "/partners/logoOne.png" },
    { name: "Partner 2", logo: "/partners/logoTwo.png" },
    { name: "Partner 3", logo: "/partners/logoThree.png" },
    { name: "Partner 4", logo: "/partners/logoFour.png" },
    { name: "Partner 5", logo: "/partners/logoFive.png" },
  ];

  return (
    <section className="py-16" id="partners">
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

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 sm:h-20 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}

            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 sm:h-20 w-auto object-contain  transition-all duration-300 "
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
          animation: scroll 30s linear infinite;
          width: 200%;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
