const Hero = () => {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-24" id="hero">
      <div className="max-w-6xl mx-auto h-screen flex flex-col items-center gap-10 justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[24px] text-[#003058] text-center xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold  mb-6 sm:mb-8 leading-[125%] px-2">
            DEVELOPING DIGITAL ENTREPRENEURSHIP & SKILL
          </h1>

          <p className="text-sm text-center xs:text-base sm:text-lg md:text-xl leading-[1.34] tracking-tight font-family-sans-serif text-[#58595B] mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-2xl drop-shadow-md px-4">
            Learn industry-ready skills with hands-on projects, mentorship, and
            career support. Transform your career with cutting-edge technology
            education.
          </p>
        </div>

        <div className="flex items-center justify-center md:flex-row flex-col md:gap-[24px] gap-[12px]">
          <img
            className="lg:w-[250px] lg:h-[280px] w-[345px] h-[160px] rounded-[12px]"
            src="/hero-section-one.jpg"
            alt="Hero-section-one"
          />

          <img
            className="lg:w-[522px] lg:h-[280px] w-[345px] h-[160px]"
            src="/hero-section-two.jpg"
            alt="Hero-section-two"
          />

          <img
            className="lg:w-[247px] lg:h-[280px] w-[345px] h-[160px]"
            src="/hero-section-three.png"
            alt="Hero-section-three"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
