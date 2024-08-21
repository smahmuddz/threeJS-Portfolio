import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// TechItem component for rendering individual technology boxes
const TechItem = ({ icon, name }) => {
  return (
    <div className='flex flex-col items-center justify-center w-28 h-28 #1d1836 rounded-lg shadow-lg'>
      <img src={icon} alt={name} className='w-16 h-16 object-contain mb-2' />
      <p className='text-center text-sm font-semibold'>{name}</p>
    </div>
  );
};

// Tech component to render all technology items
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechItem
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
    </>
    );
};

export default SectionWrapper(Tech, "");
