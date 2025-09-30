import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Community = () => {
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
    <div className="min-h-screen px-6 py-24" id="community">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#003058] rounded-3xl p-16 text-white text-center"
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-[20px] font-family-montserrat font-medium text-[#FFFFFF] lg:text-[28px] mb-6"
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
              className="text-[#BEBFC0] font-family-manrope font-medium leading-[150%] text-[16px] lg:text-[20px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join hundreds of learners who have transformed their careers
              through Global Wissen. Whether you're starting from scratch or
              up-skilling, we're here to support your journey to success.
            </motion.p>

            <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-3 lg:grid-rows-1 gap-8 mt-12 mb-12">
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
                    className="w-16 h-16 font-family-montserrat bg-white text-[#000] text-[22px] rounded-2xl flex items-center justify-center font-normal font-family-sans-serif mb-4 mx-auto"
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
                  <h3 className="text-[14px] font-family-montserrat font-regular text-[#FFFFFF] leading-[120%] font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-family-montserrat italic font-regular text-[#BEBFC0] leading-[150%] tracking-[-4%] ">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
