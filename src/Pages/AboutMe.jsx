import { motion } from "framer-motion";
import { useState, useRef } from "react";
import profilePic from "/linkedin-dp.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJsonwebtokens, SiPostman, SiTailwindcss } from "react-icons/si"; 

const AboutMe = () => {
  const [text, setText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const bioText =
    "Full-stack developer passionate about building modern, responsive web applications using React.js, Node.js, Express.js and MongoDB. Experienced in designing secure authentication systems, crafting AI-enhanced user experiences, and delivering seamless, scalable solutions.";
  const sectionRef = useRef(null);

  const techIcons = [
    { Icon: FaHtml5, color: "text-orange-500" },
    { Icon: FaCss3Alt, color: "text-blue-500" },
    { Icon: SiTailwindcss, color: "text-sky-400" },
    { Icon: FaJsSquare, color: "text-yellow-400" },
    { Icon: FaReact, color: "text-cyan-400" },
    { Icon: FaNodeJs, color: "text-green-500" },
    { Icon: SiExpress, color: "text-gray-400" },
    { Icon: SiMongodb, color: "text-green-400" },
    { Icon: SiJsonwebtokens, color: "text-pink-400" },
    { Icon: FaGitAlt, color: "text-orange-600" },
    { Icon: FaGithub, color: "text-gray-300" },
    { Icon: FaNpm, color: "text-red-500" },
    { Icon: SiPostman, color: "text-orange-500" },
  ];

  const handleTextAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      let i = 0;
      setText("");
      const interval = setInterval(() => {
        setText(bioText.slice(0, i + 1));
        i++;
        if (i === bioText.length) {
          clearInterval(interval);
        }
      }, 30);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen bg-darkBg text-whiteText px-6 sm:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        onViewportEnter={handleTextAnimation}
        className="border-[3px] border-neonBlue relative rounded-2xl p-6 sm:p-10 w-full max-w-3xl bg-[#0a0a0a] bg-opacity-100"
      >
        <div className="flex justify-center -mt-16 sm:-mt-20">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-neonBlue"
          />
        </div>
        <h2 className="text-center text-xl sm:text-3xl font-bold text-neonBlue mt-4">
          Aryan Tanna
        </h2>
        <p className="text-center text-sm sm:text-lg text-white/80 mt-2 h-16">
          {text}
        </p>
        <div className="mt-48 sm:mt-8"></div>
        <div className="mt-4 sm:mt-20 border-l-4 border-neonPurple pl-4 space-y-4">
          {[
            {
              title: "B.Tech in Computer Science",
              subtitle:
                "Parul Institute of Engineering and Technology (2021 - 2025)",
              delay: 0.2,
            },
            {
              title: "Higher Secondary Education",
              subtitle: "School of Science (SOS) - 90.33% (2020 - 2021)",
              delay: 0.3,
            },
            {
              title: "Secondary Education",
              subtitle: "Natural Education Academy - 85.33% (2018 - 2019)",
              delay: 0.4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg font-semibold text-neonPurple">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-white/70">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-neonBlue mt-8 text-center">
          Technical Skills
        </h3>
        <div className="flex justify-center gap-4 sm:gap-6 mt-4 flex-wrap">
          {techIcons.map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <Icon className={`text-3xl sm:text-4xl ${color}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;




