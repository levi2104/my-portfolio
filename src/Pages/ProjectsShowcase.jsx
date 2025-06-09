import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Apple Store Clone",
    techStack: "React.js, Tailwind CSS, JavaScript",
    liveLink: "#",
    githubLink: "#",
    description: "A responsive Apple Store homepage clone with all the features just like the official Website."
  },
  {
    title: "Weather Forecast Website",
    techStack: "React.js, Tailwind CSS, JavaScript",
    liveLink: "#",
    githubLink: "#",
    description:
      "A real-time weather forecast app with OpenWeatherMap API integration.",
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
  return (
    <section className="min-h-screen bg-darkBg text-white px-8 py-16 relative">
      {/* Resume Ribbon */}
      <a
        href="/Aryan_resume_Latex.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 [@media_(min-width:100px)]:text-neonBlue border-[3px] border-neonBlue bg-darkBg px-4 py-2 rounded-full shadow-lg hover: transition"
      >
        Resume 📄
      </a>

      <motion.h2
        className="text-center text-4xl font-bold text-neonBlue mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects Showcase
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-darkBg p-6 rounded-lg shadow-lg border-[3px] border-neonBlue backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
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
