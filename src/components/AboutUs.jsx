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

  const features = [
    {
      title: "Knowledge",
      description: "Cutting-edge curriculum designed for modern digital needs",
      icon: "📚",
    },
    {
      title: "Community",
      description: "Building networks of digital innovators and creators",
      icon: "👥",
    },
    {
      title: "Resource",
      description: "Comprehensive tools and support for continuous learning",
      icon: "🔧",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h1 className="text-[40px] font-normal leading-[1.34] font-family-mono">
                About Us
              </h1>

              <motion.h1
                className="text-4xl sm:text-5xl font-bold font-family-mono text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Global Wissen
              </motion.h1>
            </div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg leading-relaxed font-family-sans-serif text-[#4A4D54]">
                Global Wissen Consult is a{" "}
                <span className="font-semibold text-[#1077ED]">
                  Swedish/Nigerian Social development enterprise
                </span>{" "}
                established to pass the light of digital literacy through modern
                ways of learning.
              </p>

              <p className="text-base leading-relaxed font-family-sans-serif text-[#4A4D54]">
                The organization develops, implements & facilitates various
                projects for universities, women & creatives. All projects are
                under the core framework{" "}
                <span className="font-semibold">"KCR"</span> - Knowledge,
                Community & Resource - with the common mission to spread digital
                literacy.
              </p>

              <p className="text-base leading-relaxed font-family-sans-serif text-[#4A4D54]">
                Our aim is to ensure that the whole nation is digitally literate
                and has access to the opportunities the digital space provides.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={imageVariants}>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#1077ED]/10 rounded-full blur-2xl"></div>
              {/* <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1077ED]/20 rounded-full blur-xl"></div> */}

              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <img
                  src="/image/ab1.png"
                  alt="Global Wissen team working on digital literacy projects"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-12 -right-12 w-24 h-24 opacity-20">
                <div className="grid grid-cols-3 gap-2 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#1077ED] rounded-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;
