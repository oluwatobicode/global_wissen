import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Students Empowered." },
    { number: "250,000+", label: "Projected students empowered by 2030." },
    { number: "25", label: "Companies Started." },
    { number: "1000", label: "Project Companies Started by 2030." },
  ];

  const journeySteps = [
    {
      id: 1,
      title: "Choose Your Path",
      desc: "Select from our comprehensive programs designed for your goals.",
    },
    {
      id: 2,
      title: "Learn & Build",
      desc: "Get hands-on experience with real projects and expert mentorship.",
    },
    {
      id: 3,
      title: "Launch Career",
      desc: "Land your dream job with our career support and network.",
    },
  ];

  return (
    <div
      className="min-h-screen px-4 sm:px-6 py-12 sm:py-24 bg-[#F7F8FA]"
      id="community"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-mono leading-tight text-[#151B28] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Who We Are
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl leading-relaxed font-family-sans-serif text-[#4A4D54] font-light px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Our partners are proof that opportunity changes everything. See
              how Global Wissen has transformed careers and lives across Nigeria
              and beyond.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-3 sm:p-4 lg:p-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#000] font-family-mono mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {stat.number}
              </motion.h3>

              <motion.p
                className="text-sm sm:text-base text-[#7D7D7D] font-normal font-family-sans-serif"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#000000] via-[#05479D] to-[#1077ED] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-white text-center"
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-normal font-family-mono mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              Ready to Write Your Success Story?
            </motion.h2>

            <motion.p
              className="text-[#E4E4E4] font-family-sans-serif leading-relaxed mb-8 sm:mb-12 font-regular text-base sm:text-[18px] px-2 sm:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join hundreds of learners who have transformed their careers
              through Global Wissen. Whether you're starting from scratch or
              up-skilling, we're here to support your journey to success.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-[#000] text-lg sm:text-[22px] rounded-2xl flex items-center justify-center font-normal font-family-sans-serif mb-3 sm:mb-4 mx-auto"
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {step.id}
                  </motion.div>
                  <h3 className="text-sm sm:text-[14px] font-regular text-[#ffff] font-family-sans-serif leading-[120%] tracking-[-4%] mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[14px] font-regular text-[#E4E4E4] font-family-sans-serif leading-[150%] tracking-[-4%]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.button
                className="px-4 sm:px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-sm sm:text-[15.24px] font-family-sans-serif"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="px-4 sm:px-6 py-2 border-2 cursor-pointer border-white text-white rounded-xl font-normal text-sm sm:text-[15.24px] font-family-sans-serif"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View All Stories
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
