import React from "react";
import { motion } from "framer-motion";
import expertisePic from "../assets/expertise-pic.jpg";

function About() {
  const ratings = [
    { name: "Cloud", value: 40 },
    { name: "Frontend", value: 70 },
    { name: "Backend", value: 90 },
    { name: "Database", value: 60 },
  ];

  const gridColVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="p-8">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">
        About
        <span className="text-violet-300"> Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="mb-6 text-white/50">
            I am a pasionate software engineer with strong foundation in
            software system development and love for creating innovative web
            solutions.
          </p>

          {/* Background - Code */}
          <div className="border border-white/20 rounded-lg p-4 mb-4">
            <code className="text-violet-300 block">
              const skills = [<br />
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

        {/* Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="mb-6 text-white/50">
            My expertise spans both front-end and back-end development, allowing
            me to create end-to-end solutions.
          </p>

          {/* Expertise - Image */}
          <div className="relative mt-4 border border-white/20 rounded-lg p-4 h-[260px] overflow-hidden">
            <img
              src={expertisePic}
              alt="expertise photo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="mb-6 text-white/50">
            I am proficient in a wide range of technologies to stay at the
            forefront of web development.
          </p>

          {/* Skills - Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 text-center gap-4">
            {/* Cloud */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-violet-300 mb-2">Cloud</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Vercel</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-violet-300 mb-2">Frontend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
                <li>Vue.js</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-violet-300 mb-2">Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>C#</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>RESTful API</li>
              </ul>
            </div>

            {/* Database */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-violet-300 mb-2">Database</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Postgres</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          {/* About - Rating */}
          <h3 className="text-2xl font-bold mb-2">04. Rating</h3>
          <div className="space-y-4">
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

        {/* About - Goals */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
          <p className="text-white/50">
            My goal is to continue develop as a full stack developer and
            contribute to the tech community.
          </p>
        </div>
      </div>
    </section>
    // https://www.youtube.com/watch?v=TzuRmYtL3dM&list=PLMx8mmGG2tr0yyCDu716sjMZHYo39zsig&index=4
  );
}

export default About;
