import { Link } from "react-scroll";
import { motion } from "framer-motion";
// import logo from "../../public/image/logo.png";

import { FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const quickInfo = [
    { name: "About Us", href: "about" },
    { name: "Our Services", href: "services" },
    { name: "Our Partners", href: "partners" },
  ];

  const programs = [
    { name: "Data Science", href: "data-science" },
    { name: "AI & Prompt Engineering", href: "ai-ml" },
    { name: "Cloud Computing", href: "cloud" },
    { name: "Cybersecurity", href: "security" },
    { name: "VFX", href: "vfx" },
    {
      name: "Project Management / Scrum Mastery",
      href: "p_M",
    },
    { name: "Software Development", href: "software-dev" },
    { name: "SEO", href: "seo" },
    { name: "Product Development", href: "product-dev" },
    { name: "Data Analysis", href: "data-analysis" },
    { name: "  UI/UX Design", href: "ui-ux-design" },
  ];

  const contactUs = [
    {
      name: "+234 814 153 3146",
      logo: <FaPhone size={20} />,
      href: "tel:+2348141533146",
    },
    {
      name: "info@globalwissen.com",
      logo: <HiOutlineMail size={20} />,
      href: "mailto:info@globalwissen.com",
    },
    {
      name: "www.globalwissen.com",
      logo: <TbWorld size={20} />,
      href: "https://www.globalwissen.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-[#003058]">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16"
          variants={containerVariants}
        >
          {/* Logo and Social Media Section */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <div className="flex flex-col space-y-6">
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-white font-family-montserrat font-bold lg:text-[20px] leading-[100%]">
                  Global Wissen Consult
                </h1>
                <motion.p
                  className="text-[16px] font-family-manrope text-[#BEBFC0] font-medium leading-[28px] mt-4 max-w-sm"
                  variants={itemVariants}
                >
                  Empowering professionals with cutting-edge technology
                  education and training programs.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-[16px] font-family-montserrat leading-[28px] font-bold text-white mb-6"
              variants={itemVariants}
            >
              Our Info
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {quickInfo.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    className="text-[16px] font-family-manrope font-medium text-[#BEBFC0] leading-[28px]"
                    to={link.href}
                    smooth={true}
                    duration={500}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Programs Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-[16px] font-family-montserrat leading-[28px] font-bold text-white mb-6"
              variants={itemVariants}
            >
              Our courses
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    className="text-[16px] font-family-manrope font-medium text-[#BEBFC0] leading-[28px]"
                    to={program.href}
                    smooth={true}
                    duration={500}
                  >
                    {program.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.h3
              className="text-[16px] font-family-montserrat leading-[28px] font-bold text-white mb-6"
              variants={itemVariants}
            >
              Contact Us
            </motion.h3>
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              {contactUs.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{
                    x: 5,
                    color: "#1077ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <a
                    href={contact.href}
                    className="text-sm font-family-manrope flex items-center gap-[10px] cursor-pointer text-[16px] font-medium text-[#BEBFC0] leading-[28px]"
                  >
                    {contact.logo}
                    {contact.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                className="mt-6 pt-4 border-t border-[#BEBFC0]"
                variants={itemVariants}
              >
                <p className="text-[16px] font-family-manrope font-medium text-[#BEBFC0] leading-[28px]">
                  <strong>Office Hours:</strong>
                  <br />
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Weekend: By Appointment
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          className="border-t border-[#BEBFC0] pt-8 flex flex-col-reverse text-center lg:flex-row justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[12px] font-family-manrope lg:text-[16px] font-medium text-[#BEBFC0] leading-[28px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            © 2025 GLOBAL WISSEN CONSULT. All rights reserved.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[12px] font-family-manrope lg:text-[16px] flex items-center justify-center font-medium text-[#BEBFC0] leading-[28px]"
                  whileHover={{
                    y: -2,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {text}
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
