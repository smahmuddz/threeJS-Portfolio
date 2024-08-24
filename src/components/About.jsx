// src/components/About.jsx

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard component defined within About.jsx
const ServiceCard = ({ icon, title }) => {
  return (
    <div className='flex flex-col items-center justify-center w-28 h-28  rounded-lg shadow-lg'>
      <img src={icon} alt={title} className='w-16 h-16 object-contain mb-2' />
      <p className='text-center text-sm font-semibold text-white'>{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Sabbir Mahmud Afridi, a dedicated computer science professional with a solid academic background and hands-on experience in both 
        teaching and research. I hold a B.Sc. in Computer Science and Engineering from East West University and am currently pursuing my 
        M.Sc. at the University of Dhaka. I’ve gained valuable teaching experience as a lecturer at Prime University and the 
        University of Skill Enrichment and Technology.My areas of interest include Cybersecurity and the Internet of Things (IoT), 
        and I've worked on various projects that highlight my skills in programming and technology, including a music recommendation system 
        and a drone ground station. My goal is to continue learning, innovating, and contributing to the field of computer science.
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className='mt-20'>
        <p className={`${styles.sectionSubText} text-center`}>I am a</p>
        <h2 className={`${styles.sectionHeadText} text-center`}></h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} icon={service.icon} title={service.title} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
