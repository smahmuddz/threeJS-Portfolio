import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGraduationCap, FaEnvelope, FaFacebook, FaInstagram, FaBook } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Social Media.</h3>

        <div className="mt-12 flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/smahmuddz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-medium"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://scholar.google.com/citations?user=dLxWv64AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-medium"
          >
            <FaGraduationCap size={24} /> Google Scholar
          </a>
          <a
            href="mailto:smahmuddz@gmail.com"
            className="flex items-center gap-4 text-white font-medium"
          >
            <FaEnvelope size={24} /> Email : smahmuddz@gmail.com
          </a>
          <a
            href="https://www.facebook.com/smahmuddz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-medium"
          >
            <FaFacebook size={24} /> Facebook
          </a>
          <a
            href="https://www.instagram.com/runtim3terror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-medium"
          >
            <FaInstagram size={24} /> Instagram
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
