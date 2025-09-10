import { motion } from "framer-motion";

const Services = () => {
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
    <main className="min-h-screen bg-gray-50 py-16 lg:py-24" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold font-family-mono text-gray-900 leading-tight mb-6"
            variants={itemVariants}
          >
            Our KCR Framework
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed font-family-sans-serif text-[#4A4D54] max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Every project we develop, implement and facilitate is built on our
            core KCR framework - Knowledge, Community & Resource - designed to
            spread digital literacy effectively.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#1077ED]/30 transition-all duration-300 hover:shadow-lg group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <h4 className="text-xl font-bold font-family-sans-serif text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-base font-family-sans-serif text-[#4A4D54] leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
