import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import resume from "../../public/TingLe_SoftwareEngineer_Resume.pdf";

function Hero() {
  return (
    <div
      className="overflow-clip min-h-screen text-white 
    bg-[linear-gradient(to_bottom,#000,#1A051D_35%,#3A1B47_65%,#5E3370_85%)]"
    >
      {/* Hero - Container */}
      <div className="container mx-auto px-4 pt-20 pb-24">
        <div className="flex flex-col justify-center items-center text-center z-10">
          {/* Hero - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-24"
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="w-[200px] z-10 rounded-full drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]"
            />
          </motion.div>

          {/* Hero - Personal Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Hero - Name and Title */}
            <h1 className="text-4xl md:text-7xl font-bold leading-16 md:leading-32 mb-4">
              <p className="text-2xl md:text-4xl">Hi, I am Marson Lee</p>
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 tracking-tighter bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={["Web Developer", 1000, "Software Engineer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* Hero - Description */}
            <p className="text-lg md:text-xl mx-auto max-w-lg leading-relaxed mb-6">
              I am a software engineer focusing on creating web application that
              provides user the best experience.
            </p>

            {/* Hero - Resume & Contact Btn */}
            <div className="flex gap-8 justify-center">
              <a href={resume} download="MarsonLee_Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-violet-700 rounded-full px-6 py-3 hover:bg-violet-600 transition-colors"
                >
                  Download CV
                </motion.button>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth", duration: 2 })
                }
                className="border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
