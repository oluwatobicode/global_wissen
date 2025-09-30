import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main
      className="min-h-screen px-6 sm:px-6 lg:px-8 py-16 lg:py-24"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h1 className="text-[20px] lg:text-[24px] font-medium leading-[150%] font-family-montserrat">
                About Us
              </h1>

              <motion.h1
                className="text-[24px] lg:text-[32px] font-bold text-[#003058] leading-[125%] font-family-montserrat"
                variants={itemVariants}
              >
                Global Wissen Consult
              </motion.h1>
            </div>

            <motion.div className="space-y-6 flex-1" variants={itemVariants}>
              <p className="text-[16px] lg:text-[20px] leading-[150%] text-[#58595B] font-family-manrope">
                Global Wissen Consult is a{" "}
                <span className="font-semibold text-[#003058]">
                  Swedish/Nigerian Social development enterprise
                </span>
                established to pass the light of digital literacy through modern
                ways of learning.
              </p>

              <p className="text-[16px] lg:text-[20px] leading-[150%] text-[#58595B] font-family-manrope">
                The organization develops, implements & facilitates various
                projects for universities, women & creatives. All projects are
                under the core framework{" "}
                <span className="font-semibold text-[#003058]">"KCR"</span> -
                Knowledge, Community & Resource - with the common mission to
                spread digital literacy.
              </p>

              <p className="text-[16px] lg:text-[20px] leading-[150%] text-[#58595B] font-family-manrope">
                Our aim is to ensure that the whole nation is digitally literate
                and has access to the opportunities the digital space provides.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants}>
            <div className="">
              <img
                src="about-us-section.png"
                alt="Global Wissen team working on digital literacy projects"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;
