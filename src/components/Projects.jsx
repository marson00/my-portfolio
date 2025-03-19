import React, { useState } from "react";
import { motion } from "framer-motion";
import pic from "../assets/expertise-pic.jpg";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Project 1",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
    src: pic,
  },
  {
    title: "Project 2",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
    src: pic,
  },
  {
    title: "Project 3",
    devStack: "PHP, MySQL",
    link: "#",
    git: "#",
    src: pic,
  },
];

function Projects() {
  const [expandIndex, setExpandIndex] = useState();

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  return (
    <section id="project" className="p-8">

      {/* Projects - Container */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Selected <span className="text-violet-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow durtaion-300"
            >
              {/* Project - Selection */}
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

              {/* Projects - Dropdown*/}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
