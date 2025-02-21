import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const sectionRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_id", "template_id", e.target, "user_id")
      .then(() => alert("Message Sent Successfully!"))
      .catch(() => alert("Failed to Send Message"));
    e.target.reset();
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-darkBg text-whiteText px-4 sm:px-6 md:px-12 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="relative bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg md:max-w-2xl border border-white/20"
      >
        <h3 className="text-2xl text-neonBlue text-center">Contact Me</h3>
        <form onSubmit={sendEmail} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border border-white/20 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border border-white/20 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded-lg bg-white/10 text-white outline-none border border-white/20 w-full"
          />
          <motion.button
            type="submit"
            className="p-3 bg-neonBlue text-black font-semibold rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          {[
            { href: "https://www.linkedin.com/in/aryan-tanna", icon: FaLinkedin, color: "text-[#0077b5]" },
            { href: "https://github.com/aryan-github", icon: FaGithub, color: "text-gray-300" },
            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=aryantanna2104@gmail.com", icon: FaEnvelope, color: "text-red-500" },
            { href: "tel:+919033453016", icon: FaPhone, color: "text-green-500" },
          ].map(({ href, icon: Icon, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`${color} text-3xl sm:text-4xl`}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
