// template id: template_sws73ym
// service id: service_w9olcrb
// public key: Ok0-_i2GZGYr6_3re

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9olcrb", 
        "template_sws73ym", 
        formRef.current,
        "Ok0-_i2GZGYr6_3re" 
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        alert("Failed to Send Message: " + error.text);
      });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center min-h-screen bg-darkBg text-whiteText px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-md shadow-2xl rounded-2xl p-12 w-full max-w-4xl border-[3px] border-neonBlue"
      >
        <h3 className="text-2xl font-bold text-neonBlue text-center">Contact Me</h3>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-12 flex flex-col gap-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border-2 border-neonPurple"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border-2 border-neonPurple"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border-2 border-neonPurple"
          />
          <motion.button
            type="submit"
            className="p-3 bg-transparent text-neonBlue border-[3px] border-neonBlue font-semibold rounded-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="flex justify-center gap-8 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/aryan-tanna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-[#0077b5] text-4xl" />
          </motion.a>
          <motion.a
            href="https://github.com/levi2104"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="text-gray-300 text-4xl" />
          </motion.a>
          
          <motion.a
            href="mailto:aryantanna2104@gmail.com"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope className="text-red-500 text-4xl" />
          </motion.a>

          <motion.a href="tel:+919033453016" whileHover={{ scale: 1.2 }}>
            <FaPhone className="text-green-500 text-4xl rotate-0" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
