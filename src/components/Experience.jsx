import { motion } from "framer-motion";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

function Experience() {
  const companies = [
    {
      name: "Operion",
      position: "Software Development Intern",
      period: "Oct 2021 - Jan 2022",
      link: "https://operion.com.my/",
      description:
        "Web Developer which in charge of both front-end and back-end web development using PHP, HTML/CSS, JS and MYSQL.",
    },
    {
      name: "First Solar",
      position: "IT Analyst Intern",
      period: "Feb 2024 - Aug 2024",
      link: "https://www.firstsolar.com/",
      description:
        "As an IT Analyst within the Supply Chain Management (SCM) team, I specialize in managing and resolving issues within the Oracle ERP system, with a focus on the warehouse, manufacturing, and transportation modules.",
    },
    {
      name: "Sophic Automation",
      position: "Software Engineer",
      period: "Aug 2024 - Present",
      link: "https://sophicautomation.com/",
      description:
        "I specialize in designing, developing, and maintaining dashboard web systems that transform data into meaningful visual insights.",
    },
  ];

  return (
    <section id="experience" className="p-8 py-24 md:py-64">
      <div className="mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          My <span className="text-violet-300">Experience</span>
        </h2>

        {companies.map((comp, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              transition={{
                duration: 1,
                delay: i * 0.2,
              }}
            >
              <div className="max-w-[600px] p-4 border border-white/20 rounded-2xl mx-auto leading-10">
                <div className="flex flex-row space-x-1">
                  <p className="font-bold text-2xl mb-2">{comp.name}</p>
                  <a
                    href={comp.link}
                    target="_blank"
                    className="text-violet-400 hover:text-fuchsia-200 transition-colors"
                  >
                    <HiOutlineExternalLink size={20} className="mt-1" />
                  </a>
                </div>
                <p>{comp.position}</p>
                <p>{comp.period}</p>
                <p className="text-white/50">{comp.description}</p>
              </div>
              <div
                className={`w-[2px] h-10 bg-violet-300 mx-auto my-2 ${
                  i >= companies.length - 1 ? "hidden" : ""
                }`}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
