import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-24 bg-[#F7F8FA]" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-row items-center justify-center gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="w-[480px] h-[750px] rounded-xl overflow-hidden"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-brrounded-xl flex items-center justify-center text-white text-xl font-semibold"
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="contactus.png"
                alt="Contact us"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-[625px] flex flex-col"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[40px] text-center font-normal leading-tight font-family-mono text-[#151B28] mb-6"
            >
              Let's Build the Future Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[18px] text-center font-normal leading-relaxed font-family-sans-serif text-[#6E7176] mb-10"
            >
              Got questions, ideas, or partnerships? We'd love to hear from you.
              Let's connect and explore how we can support your journey or work
              together.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-row gap-4"
              >
                <div className="flex-1">
                  <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{
                      borderColor: "#1077ED",
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(16, 119, 237, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{
                      borderColor: "#1077ED",
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(16, 119, 237, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{
                    borderColor: "#1077ED",
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(16, 119, 237, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{
                    borderColor: "#1077ED",
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(16, 119, 237, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200 resize-none"
                ></motion.textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  backgroundColor: "#0d5bb5",
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(16, 119, 237, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-[52px] bg-[#1077ED] text-white font-medium font-family-sans-serif rounded-xl cursor-pointer"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-20 w-full"
        >
          <div className="flex flex-row items-stretch justify-between gap-8">
            <motion.div
              variants={cardVariants}
              className="flex flex-col justify-center min-w-[280px]"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold font-family-mono text-[#151B28] mb-8 text-center"
              >
                Follow Our Journey
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="flex flex-row items-center justify-center gap-[25px]"
              >
                <motion.div
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]"
                >
                  <div className="p-4 bg-[#1077ED]/10 rounded-xl flex items-center justify-center">
                    <TwitterIcon />
                  </div>
                  <span className="font-medium font-sans text-[#6E7176]">
                    Twitter
                  </span>
                </motion.div>

                <motion.div
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]"
                >
                  <div className="p-4 bg-[#1077ED]/10 rounded-xl flex items-center justify-center">
                    <LinkedInIcon />
                  </div>
                  <span className="font-medium font-sans text-[#6E7176]">
                    LinkedIn
                  </span>
                </motion.div>

                <motion.div
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer w-[120px] h-[120px]"
                >
                  <div className="p-4 bg-[#1077ED]/10 rounded-xl flex items-center justify-center">
                    <InstagramIcon />
                  </div>
                  <span className="font-medium font-sans text-[#6E7176]">
                    Instagram
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
