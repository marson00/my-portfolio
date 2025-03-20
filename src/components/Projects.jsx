import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pic from "../assets/expertise-pic.jpg";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    src: pic,
    desc: "XXX xxx XXX",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
  },
  {
    title: "Project 2",
    src: pic,
    desc: "XXX xxx XXX",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
  },
  {
    title: "Project 3",
    src: pic,
    desc: "XXX xxx XXX",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
  },
];

function Projects() {
  const [expandIndex, setExpandIndex] = useState();

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  return (
    <section id="projects" className="p-8 py-24 md:py-40">
      {/* Projects - Container */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          My <span className="text-violet-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {/* Projects - Dropdown Selection */}
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow durtaion-300"
            >
              {/* Before Expand */}
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/20"
                onClick={() => toggleExpand(i)}
              >
                <h3 className="text-2xl md:text-4xl font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-violet-300">
                    0{i + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* After Expand */}
              <AnimatePresence>
                {expandIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-62 object-cover"
                      />
                      <div className="flex-1 m-4">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-violet-300 mb-4">
                          Stack: {project.devStack}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-violet-400 hover:text-fuchsia-200 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a href={project.git}>
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
