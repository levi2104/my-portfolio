import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Weather Forecast Website",
    techStack: "React.js, Tailwind CSS, JavaScript", 
    liveLink: "#",
    githubLink: "#",
    description:
      "A real-time weather forecast app with OpenWeatherMap API integration.",
  },
  {
    title: "E-Commerce Product Listing Page",
    techStack: "React.js, Tailwind CSS, JavaScript",
    liveLink: "#",
    githubLink: "#",
    description:
      "A dynamic e-commerce page with product filtering and Add to Cart functionality.",
  },
  {
    title: "Movie Recommendation Website",
    techStack: "React.js, Tailwind CSS, JavaScript",
    liveLink: "#",
    githubLink: "#",
    description:
      "A movie listing app with TMDB API integration for top-rated and trending movies.",
  },
];

const ProjectsShowcase = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-darkBg text-whiteText px-8 py-16 relative"
    >
      {/* Resume Ribbon */}
      <a
        href="/Aryan_resume_ATS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 bg-neonBlue !text-black px-4 py-2 rounded-full shadow-lg hover: transition"
      >
        Resume 📄
      </a>

      <h2 className="text-center text-4xl font-bold text-neonBlue mb-12">
        Projects Showcase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-lg shadow-lg border border-white/20 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-neonPurple">
              {project.title}
            </h3>
            <p className="text-sm text-white/70 mt-2">{project.techStack}</p>
            <p className="text-sm text-white/80 mt-4">{project.description}</p>
            <div className="flex justify-between mt-6">
              <a
                href="https://github.com/levi2104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neonBlue flex items-center gap-2 hover:underline"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/levi2104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-whiteText flex items-center gap-2 hover:underline"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
