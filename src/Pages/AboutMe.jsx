import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profilePic from "/linkedin-dp.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";

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
      className="relative flex flex-col items-center justify-center min-h-screen bg-darkBg text-whiteText px-6 sm:px-8 md:px-12 lg:px-16 py-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl border border-white/20"
      >
        <div className="flex justify-center -mt-16 sm:-mt-20">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-neonBlue shadow-neon"
          />
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-neonBlue mt-4">
          Aryan Tanna
        </h2>
        <p className="text-center text-base sm:text-lg text-white/80 mt-2 h-16">
          {text}
        </p>

        <div className="mt-10 sm:mt-12 border-l-4 border-neonPurple pl-4 space-y-4">
          {[{
            title: "B.Tech in Computer Science",
            school: "Parul Institute of Engineering and Technology (2021 - 2025)"
          }, {
            title: "Higher Secondary Education",
            school: "School of Science (SOS) - 90.33% (2020 - 2021)"
          }, {
            title: "Secondary School",
            school: "Natural Education Academy - 85.33% (2018 - 2019)"
          }].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <p className="text-base sm:text-lg font-semibold text-neonPurple">{edu.title}</p>
              <p className="text-sm sm:text-base text-white/70">{edu.school}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-lg sm:text-xl text-neonBlue mt-8 text-center">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {[FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub].map((Icon, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <Icon
                className={`text-3xl sm:text-4xl md:text-5xl ${
                  index === 0
                    ? "text-neonBlue"
                    : index === 1
                    ? "text-orange-500"
                    : index === 2
                    ? "text-blue-500"
                    : index === 3
                    ? "text-yellow-400"
                    : "text-gray-300"
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
