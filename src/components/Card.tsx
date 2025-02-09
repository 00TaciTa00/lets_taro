"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Card.module.css";

const Card = () => {
  const [isBack, setIsBack] = useState(true);

  const cardFlip = () => setIsBack(!isBack);
  return (
    <div
      className={`${styles.card_wrapper} ${
        isBack ? styles.card_back : styles.card_fore
      }`}
      onClick={cardFlip}
    />
  );
};

export const AnimatedCard = () => {
  const cardVariants = {
    hover: {
      scale: 1.2,
    },
    pressed: {
      scale: 0.8,
    },
    rest: {
      scale: 1,
    },
  };

  const [isBack, setIsBack] = useState(true);

  const cardFlip = () => setIsBack(!isBack);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      variants={cardVariants}
      className={`${styles.card_wrapper} ${
        isBack ? styles.card_back : styles.card_fore
      }`}
      onClick={cardFlip}
    />
  );
};

export default Card;
