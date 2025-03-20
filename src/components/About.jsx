import React from "react";
import { motion } from "framer-motion";
import backgroundPic from "../assets/my-background-pic.jpg";
import { FaTrophy } from "react-icons/fa";
import { IoCalendarClearSharp } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";

function About() {
  const ratings = [
    { name: "Cloud", value: 40 },
    { name: "Frontend", value: 70 },
    { name: "Backend", value: 90 },
    { name: "Database", value: 60 },
  ];

  const skills = [
    { category: "Cloud", languages: ["Vercel", "Firebase"] },
    {
      category: "Frontend",
      languages: [
        "HTML/CSS",
        "JavaScript",
        "Tailwind CSS",
        "React.js",
        "Vue.js",
      ],
    },
    {
      category: "Backend",
      languages: ["C#", "Node.js", "Java", "RESTful API"],
    },
    { category: "Database", languages: ["MySQL", "Postgres"] },
  ];

  return (
    <section id="about" className="p-8 py-24 md:py-40">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
        About
        <span className="text-violet-300"> Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="mb-6 text-white/50">
            I am a passionate software engineer focused on building seamless and
            efficient web applications. I enjoy solving challenges and creating
            innovative web solution.
          </p>

          {/* Expertise - Image */}
          <div className="relative mt-4 border border-white/20 rounded-lg p-4 h-[260px] overflow-hidden">
            <img
              src={backgroundPic}
              alt="expertise photo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="mb-6 text-white/50">
            Skilled in both frontend and backend development, delivering
            interactive UIs and robust system functionality.
          </p>

          {/* Background - Code */}
          <div className="border border-white/20 rounded-lg p-4 mb-4">
            <code className="text-violet-300 block">
              const expertise = [<br />
              <span className="ml-4">'Cloud',</span>
              <br />
              <span className="ml-4">'Frontend',</span>
              <br />
              <span className="ml-4">'Backend',</span>
              <br />
              <span className="ml-4">'Database',</span>
              <br />
              ];
            </code>
          </div>
        </div>

        {/* Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="mb-6 text-white/50">
            Practical experience with a variety of technologies. My skill set
            includes:
          </p>

          {/* Skills - Grid */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 text-center gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="border border-white/20 rounded-lg p-3">
                <h4 className="text-violet-300 mb-2">{skill.category}</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  {skill.languages.map((language, i) => (
                    <li key={i}>{language}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          {/* About - Rating */}
          <h3 className="text-2xl font-bold mb-2">04. Rating</h3>
          <div className="space-y-8">
            {ratings.map((rating, i) => (
              <div key={i}>
                <label className="block text-sm mb-1">{rating.name}</label>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${rating.value}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-violet-300 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About - Education */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">05. Education</h3>
          <div className="text-white/75 space-y-3">
            <h4 className="text-lg font-semibold">
              Tunku Abdul Rahman University of Management and Technology
              (TARUMT)
            </h4>
            <p className="text-sm">
              Bachelor’s Degree in Information Technology (Honours) in Software
              System Development
            </p>
            <p className="text-sm flex items-center">
              <IoCalendarClearSharp className="mr-2 text-red-300" />
              <span className="font-semibold mr-2">Period:</span> 2020 - 2024
            </p>
            <p className="text-sm flex items-center">
              <RiBarChart2Fill className="mr-2 text-orange-300" />
              <span className="font-semibold mr-2">CGPA:</span> 3.79 / 4.00
            </p>
            <p className="text-sm ">
              <FaTrophy className="mr-2 text-yellow-300 float-left mt-0.5" />
              <span className="font-semibold">Achievement:</span>&nbsp; Best
              Design Award for Final Year Project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
