import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-32 sm:py-24" id="home">
      <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center gap-10">
        <motion.div
          className="flex flex-col items-center text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[#003058] font-family-montserrat  font-bold mb-6 sm:mb-8 leading-[125%]  text-[24px] md:text-5xl lg:text-[48px] max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            DEVELOPING DIGITAL ENTREPRENEURSHIP & SKILL
          </motion.h1>
          <motion.p
            className="text-[#58595B] font-family-manrope mb-6 sm:mb-8 leading-[1.34] tracking-normal  max-w-3xl text-sm xs:text-base sm:text-lg md:text-xl  px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Learn industry-ready skills with hands-on projects, mentorship, and
            career support. Transform your career with cutting-edge technology
            education.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row md:gap-6 gap-4 items-center justify-center w-full max-w-6xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.img
            className="rounded-[12px] w-[345px] md:max-w-[250px] h-[160px] md:h-[280px] object-cover"
            src="/hero-section-one.png"
            alt="Hero-section-one"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            className="w-full md:max-w-[520px] h-auto md:h-[280px] object-cover"
            src="/hero-section-two.jpg"
            alt="Hero-section-two"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            className="rounded-[12px] w-[345px] md:max-w-[250px] h-[160px] md:h-[280px] object-cover"
            src="/hero-section-three.png"
            alt="Hero-section-three"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
