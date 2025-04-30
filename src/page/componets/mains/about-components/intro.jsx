import React from "react";
import { motion } from "framer-motion"; 

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}   
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="about-main__description__content">
        <p>
          I'm a passionate and curious developer with a love for all things digital — from web design to coding and animation. I’m currently building my skills in React.js, HTML, CSS, JavaScript, and Python, and I’m always excited to take on new challenges that push my understanding even further.
          My journey started with a simple yet satisfying project: a cookie clicker game. That small piece of logic sparked something in me — the joy of problem-solving and creating something interactive from scratch. Since then, I’ve been on a mission to learn, build, and grow as a developer.
          I’m aiming to become a software developer, and I bring a hardworking, engaged attitude to every project I take on. Whether I'm debugging code or designing UI, I’m always learning and always improving.
        </p>
      </div>
    </motion.div>
  );
};

export default Intro;
