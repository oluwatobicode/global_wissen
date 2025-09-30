import { motion } from "framer-motion";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://Formspree.io/f/xqadnvak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setSubmitStatus("fallback");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-24" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[480px] lg:w-[480px] h-[400px] sm:h-[500px] lg:h-[750px] rounded-xl overflow-hidden"
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br rounded-xl flex items-center justify-center text-white text-xl font-semibold"
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="contact-us-section.png"
                alt="Contact us"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full max-w-[625px] lg:w-[625px] flex flex-col"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[20px] font-family-montserrat lg:text-[28px] text-center font-medium leading-[125%] text-[#003058] mb-4 lg:mb-6"
            >
              Let's Build the Future Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[16px] font-family-manrope lg:text-[20px] text-center font-medium leading-[150%]  text-[#58595B] mb-6 lg:mb-10"
            >
              Got questions, ideas, or partnerships? We'd love to hear from you.
              Let's connect and explore how we can support your journey or work
              together.
            </motion.p>

            <form onSubmit={handleSubmit}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-4 lg:space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex-1">
                    <label className="block font-family-montserrat text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
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
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      required
                      className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-family-montserrat text-sm font-medium font-family-sans-serif text-[#6E7176] mb-2">
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-family-montserrat font-medium font-family-sans-serif text-[#6E7176] mb-2">
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full h-[52px] px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-family-montserrat font-medium font-family-sans-serif text-[#6E7176] mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{
                      borderColor: "#1077ED",
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(16, 119, 237, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-2 border-[#E4E4E4] rounded-lg text-base font-normal font-family-sans-serif placeholder:text-[#6E7176] focus:border-[#1077ED] focus:outline-none transition-all duration-200 resize-none"
                  ></motion.textarea>
                </motion.div>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-center font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-center font-medium">
                    Failed to send message. Please try again or contact us
                    directly.
                  </div>
                )}
                {submitStatus === "fallback" && (
                  <div className="text-blue-600 text-center font-medium">
                    Opening your email client...
                  </div>
                )}

                <motion.button
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] font-family-montserrat bg-[#003058] text-white font-medium rounded-xl cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
