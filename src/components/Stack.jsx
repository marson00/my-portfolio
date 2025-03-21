import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { DiJavascript, DiMysql } from "react-icons/di";
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";

function Stack() {
  const stacks = [
    { name: "Vue", icon: <FaVuejs size={100} />, color: "text-violet-200" },
    { name: "React", icon: <FaReact size={100} />, color: "text-violet-200" },
    { name: "Js", icon: <DiJavascript size={100} />, color: "text-violet-200" },
    { name: "Node", icon: <FaNodeJs size={100} />, color: "text-violet-200" },
    { name: "MySQL", icon: <DiMysql size={100} />, color: "text-violet-200" },
  ];

  const controls = useAnimation();

  // When at least 10% is visible in viewport
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  // Reset the animation
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Change the animation position for mobile size
  const isMobileScreen = window.innerWidth < 400;

  return (
    <section
      id="stacks"
      className="px-8 py-24 md:py-40 max-w-[1400px] mx-auto text-center"
    >
      {/* Stacks */}
      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
        My <span className="text-violet-300">Stacks</span>
      </h2>
      <div
        className="flex flex-wrap justify-center mx-8 gap-6 md:gap-12"
        ref={ref}
      >
        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                [isMobileScreen ? "x" : "y"]: index % 2 === 0 ? -100 : 100, // even num icon fade from bottom to top
              }),
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            className="bg-white/10 flex flex-col items-center md:w-[180px] md:h-[180px] justify-center rounded-xl p-4"
          >
            <div className={`${stack.color} mb-4`}>{stack.icon}</div>
            <p className="text-white/20 text-xl">{stack.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stack;
