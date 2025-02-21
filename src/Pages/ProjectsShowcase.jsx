import { motion } from "framer-motion";
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
  return (
    <section className="min-h-screen bg-darkBg text-whiteText px-6 md:px-12 lg:px-20 py-16">
      {/* Resume Ribbon */}
      <a
        href="/Aryan_resume_ATS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed w-[18%] text-center top-10 -right-10 bg-neonBlue text-black px-4 py-1 font-semibold shadow-lg transform rotate-45 translate-x-8 -translate-y-4 z-50"
      >
        Resume.pdf
      </a>

      <h2 className="text-center text-3xl sm:text-4xl font-bold text-neonBlue mb-12">
        Projects Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-lg shadow-lg border border-white/20 backdrop-blur-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-neonPurple">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-2">{project.techStack}</p>
            <p className="text-sm text-white/80 mt-4">{project.description}</p>
            <div className="flex justify-between mt-6 text-sm sm:text-base">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neonBlue flex items-center gap-2 hover:underline"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
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
