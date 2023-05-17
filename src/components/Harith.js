import React from "react";
import { motion } from "framer-motion";

const Harith = () => {
  const wordVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "transparent",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 0, 0, 0.6)",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <svg viewBox="0 0 1200 300">
      <motion.path
        d="M100 250 H 300 V 100 H 500 V 250 H 700 V 100 H 900 V 250 H 1100"
        variants={wordVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};

export default Harith;
