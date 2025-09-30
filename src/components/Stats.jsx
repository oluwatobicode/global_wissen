import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      number: "10K+",
      label: "LIVES TRANSFORMED",
      tagline: "Student empowered with digital skills",
    },
    {
      number: "250K+",
      label: "FUTURE LEADERS",
      tagline: "Projected reach by 2030",
    },
    {
      number: "25+",
      label: "SUCCESS STORIES",
      tagline: "Companies launched and triving",
    },
    {
      number: "1k+",
      label: "DREAMS LAUNCHED",
      tagline: "Projected startups by 2030  ",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-24" id="community">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16">
          <div className="max-w-3xl">
            <motion.h1
              className="text-[20px] font-family-montserrat sm:text-4xl lg:text-[28px] font-bold leading-tight text-[#003058] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Who We Are
            </motion.h1>

            <motion.p
              className="text-[16px] font-font-family-montserrat sm:text-lg lg:text-[20px] leading-[150%] text-[#58595B] font-medium px-4 sm:px-0"
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
          className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-3 sm:p-4 lg:p- flex flex-col space-y-2"
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
              <motion.h1
                className="text-[20px] font-family-montserrat sm:text-3xl lg:text-[32px] text-[#003058] font-bold mb-2"
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
              </motion.h1>

              <motion.p
                className="text-[14px] font-family-montserrat text-[#222222] font-semibold leading-[150%]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>

              <motion.p
                className="text-[12px] font-family-montserrat text-[#58595B] font-normal leading-[150%] italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {stat.tagline}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
