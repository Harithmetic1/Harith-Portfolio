import React from "react";
import { animate, motion } from "framer-motion";

function AnimatedLinkContainer({ children }) {
  return (
    <motion.div whileHover={{ rotate: 360, transition: { duration: 1 } }}>
      {children}
    </motion.div>
  );
}

export default AnimatedLinkContainer;
