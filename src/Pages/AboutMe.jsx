import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profilePic from "/linkedin-dp.jpg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const AboutMe = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const bioText =
    "I am a Front-end Developer skilled in React.js, JavaScript, and modern UI frameworks. Passionate about crafting user-centric web applications with a focus on performance and responsiveness.";
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    setText("");
    const interval = setInterval(() => {
      setText(bioText.slice(0, i + 1));
      i++;
      if (i === bioText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen bg-darkBg text-whiteText px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="border-[3px] border-neonBlue relative bg-darkBg rounded-2xl p-10 w-full max-w-3xl bg-[#0a0a0a] bg-opacity-100"
      >
        <div className="flex justify-center -mt-20">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-neonBlue"
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-neonBlue mt-4">
          Aryan Tanna
        </h2>
        <p className="text-center text-lg text-white/80 mt-2 h-16">{text}</p>

        {/* Added extra margin below bio text */}
        <div className="mt-72 [@media_(min-width:400px)_and_(max-width:450px)]:mt-48 [@media_(min-width:450px)_and_(max-width:640px)]:mt-32 sm:mt-8"></div>

        <div className="mt-12 border-l-4 border-neonPurple pl-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg font-semibold text-neonPurple">
              B.Tech in Computer Science
            </p>
            <p className="text-sm text-white/70">
              Parul Institute of Engineering and Technology (2021 - 2025)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg font-semibold text-neonPurple">
              Higher Secondary Education
            </p>
            <p className="text-sm text-white/70">
              School of Science (SOS) - 90.33% (2020 - 2021)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg font-semibold text-neonPurple">
              Secondary Education
            </p>
            <p className="text-sm text-white/70">
              Natural Education Academy - 85.33% (2018 - 2019)
            </p>
          </motion.div>
        </div>

        <h3 className="text-xl font-semibold text-neonBlue mt-8 text-center">
          Technical Skills
        </h3>
        <div className="flex justify-center gap-6 mt-4">
          {[FaReact, FaHtml5, FaCss3Alt, FaJsSquare].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <Icon
                className={`text-4xl ${
                  index === 0
                    ? "text-neonBlue"
                    : index === 1
                    ? "text-orange-500"
                    : index === 2
                    ? "text-blue-500"
                    : "text-yellow-400"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
