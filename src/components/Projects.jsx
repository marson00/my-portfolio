import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "Sign Language Translation",
    src: project1,
    desc: "A web application which implemented machine learning algorithm to recognize and translate sign language into text.",
    devStack:
      "PHP, MySQL, Python (OpenCV, MediaPipe, TensorFlow), Flask, Neural Network (CNN & LSTM)",
    link: "#",
    git: "",
    type: "Localhost",
  },
  {
    title: "E-Commerce Web App",
    src: project2,
    desc: "A web-based shopping platform built with user authentication, product management, shopping cart, order history, fake payment processing and product ratings.",
    devStack: "Java, MySQL, BootStrap, NetBean, MVC",
    link: "#",
    git: "",
    type: "Localhost",
  },
  {
    title: "Admin Dashboard",
    src: project3,
    desc: "A web-based admin panel build with PHP for managing users, products and report. Features incude authentication, role-based access control and CRUD opetaions.",
    devStack: "PHP, MySQL, RESTful API, XML, jQuery",
    link: "#",
    git: "",
    type: "Localhost",
  },
];


function Projects() {
  const [expandIndex, setExpandIndex] = useState();

  const toggleExpand = (index) => {
    setExpandIndex(expandIndex === index ? null : index);
  };

  return (
    <section id="projects" className="px-8 py-24 md:py-40">
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
                    <div className="flex flex-col md:flex-row md:gap-4">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-60 md:h-80 lg:h-100 object-cover"
                      />
                      <div className="flex-1 m-4">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-violet-300 mb-4">
                          Core Stack: <br />
                          {project.devStack}
                        </p>
                        <p>Type: {project.type}</p>
                        <div
                          className={`flex justify-start items-center space-x-4 ${
                            project.type === "Localhost" ? "hidden" : ""
                          }`}
                        >
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
