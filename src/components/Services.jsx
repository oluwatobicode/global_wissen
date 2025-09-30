import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

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
      img: "/knoweldege.png",
      title: "Knowledge",
      description:
        "Our learning pillar, focused on building Africa's next generation of digital talent.",
      full: "Our learning pillar, focused on building Africa's next generation of digital talent. Digital Entrepreneurship Program (DEP 201 & 202) Tailored for university students in their 200 and 300 levels, this program introduces digital literacy, entrepreneurship, and practical project work to prepare students for the future of work. Professional Digital Skills Specialization Advanced tracks for students and graduates who want to specialize in high-demand skills, including: Medical Coding Product Development & Design Data Analysis Digital Marketing And other emerging fields",
    },
    {
      img: "/community.png",
      title: "Community",
      description:
        "Our engagement pillar, fostering connection, collaboration, and celebration.",
      full: `Our engagement pillar, fostering connection, collaboration, and celebration.
Community-Based Events  
Interactive programs and networking opportunities that bring together students, institutions, and industry partners.
Upcoming event - Certification Ceremonies  
Our next community highlight will be the student certification ceremonies hosted at Cosmopolitan University, Trinity University, and Veritas University. These events celebrate student achievements and strengthen our alumni community while showcasing the impact of our programs.`,
    },
    {
      img: "/resource.png",
      title: "Resource",
      description:
        "Our engagement pillar, fostering connection, collaboration, and celebration",
      full: `Our engagement pillar, fostering connection, collaboration, and celebration.
Community-Based Events  
Interactive programs and networking opportunities that bring together students, institutions, and industry partners.
Upcoming event - Certification Ceremonies  
Our next community highlight will be the student certification ceremonies hosted at Cosmopolitan University, Trinity University, and Veritas University. These events celebrate student achievements and strengthen our alumni community while showcasing the impact of our programs.`,
    },
  ];

  const handleCardClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const isExpanded = (index) => {
    return hoveredIndex === index || clickedIndex === index;
  };

  return (
    <main className="min-h-screen py-16 lg:py-24" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-[20px] font-family-montserrat lg:text-[28px] font-bold text-[#003058] mb-3 leading-[150%] lg:leading-[125%]"
            variants={itemVariants}
          >
            Our KCR Framework
          </motion.h2>

          <motion.p
            className="text-[16px] font-family-manrope lg:text-[20px] font-medium leading-[150%] text-[#58595B] max-w-3xl mx-auto"
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
              className="bg-white rounded-[12px] w-[341px] h-fit shadow-[0_4px_8px_0_#00000020] cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={feature.img}
                className="rounded-t-[12px]"
                alt={feature.title}
              />
              <div
                className={`p-[24px] transition-colors duration-300 ${
                  isExpanded(index) ? "bg-[#003058]" : ""
                }`}
              >
                <h4
                  className={`text-[16px] font-family-montserrat lg:text-[20px] font-bold leading-[100%] mb-4 transition-colors duration-300 ${
                    isExpanded(index) ? "text-white" : "text-[#003058]"
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-[14px] lg:text-[16px] font-family-manrope leading-[150%] lg:leading-[28px] font-medium transition-colors duration-300 ${
                    isExpanded(index) ? "text-[#BEBFC0]" : "text-[#58595B]"
                  }`}
                >
                  {isExpanded(index) ? feature.full : feature.description}
                </p>
              </div>

              <div
                className={`p-[24px] transition-colors duration-300 ${
                  isExpanded(index) ? "bg-[#003058]" : ""
                }`}
              >
                <h4
                  className={`lg:block hidden text-right lg:text-[14px] text-[12px] leading-[100%] font-semibold transition-colors duration-300 ${
                    isExpanded(index) ? "text-white" : "text-[#003058]"
                  }`}
                >
                  {isExpanded(index)
                    ? "Leave to see less"
                    : "Hover to see more"}
                </h4>

                <h4
                  className={`block lg:hidden text-right lg:text-[14px] text-[12px] leading-[100%] font-semibold transition-colors duration-300 ${
                    isExpanded(index) ? "text-white" : "text-[#003058]"
                  }`}
                >
                  {isExpanded(index)
                    ? "Click to see less"
                    : "Click to see more"}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
