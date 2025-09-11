import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../public/image/logo.png";

import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
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
    <footer className="bg-white">
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
                <img
                  src={logo}
                  alt="Global Wissen Logo"
                  className="w-20 h-20"
                />
                <motion.p
                  className="text-sm font-family-sans-serif text-[#4A4D54] mt-4 leading-relaxed max-w-xs"
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
              className="text-sm leading-relaxed mb-6 font-medium font-family-sans-serif text-[#4A4D54]"
              variants={itemVariants}
            >
              Quick Info
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
                    className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer hover:text-[#1077ED] transition-colors duration-200"
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
              className="text-sm leading-relaxed mb-6 font-medium font-family-sans-serif text-[#4A4D54]"
              variants={itemVariants}
            >
              Programs
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
                    className="text-sm leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer hover:text-[#1077ED] transition-colors duration-200"
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
              className="text-sm leading-relaxed mb-6 font-medium font-family-sans-serif text-[#4A4D54]"
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
                    className="text-sm flex items-center gap-[10px] leading-relaxed font-normal font-family-sans-serif text-[#4A4D54] cursor-pointer hover:text-[#1077ED] transition-colors duration-200"
                  >
                    {contact.logo}
                    {contact.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                className="mt-6 pt-4 border-t border-[#E4E4E4]"
                variants={itemVariants}
              >
                <p className="text-xs font-family-sans-serif text-[#4A4D54] leading-relaxed">
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
          className="border-t border-[#E4E4E4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base font-normal font-family-sans-serif text-[#4A4D54]"
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
                  className="text-[#4A4D54] text-base font-family-sans-serif font-normal hover:text-[#1077ED] transition-colors duration-200"
                  whileHover={{
                    y: -2,
                    color: "#1077ED",
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
