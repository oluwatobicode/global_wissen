const Partners = () => {
  const partnerLogos = [
    { name: "Partner 1", logo: "/logoOne.png" },
    { name: "Partner 2", logo: "/logoTwo.png" },
    { name: "Partner 3", logo: "/logoThree.png" },
    { name: "Partner 4", logo: "/logoFour.png" },
    { name: "Partner 5", logo: "/logoFive.png" },
    { name: "Partner 6", logo: "/logoSix.jpg" },
    { name: "Partner 7", logo: "/logoSeven.png" },
    { name: "Partner 8", logo: "/logoEight.png" },
  ];

  return (
    <section className="py-16" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-[16px] lg:text-[28px] leading-[125%] font-bold text-[#003058] mb-4 font-family-montserrat">
            Our Partners
          </h2>
          <p className="text-[16px] lg:text-[20px] leading-[150%] font-medium text-[#58595B] font-family-manrope">
            We collaborate with industry leaders to provide the best learning
            experience
          </p>
        </div>
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll space-x-12">
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-16 w-auto object-contain transition-all duration-300"
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
                  className="h-12 sm:h-16 w-auto object-contain transition-all duration-300"
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
            transform: translateX(-1456px);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
          display: flex;
          width: 2912px;
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
