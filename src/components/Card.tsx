"use client"

import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
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
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
    pressed: {
      scale: 0.8,
    },
    drag: {
      scale: 0.9,
    },
  };
  const controls = useDragControls();
  const [isBack, setIsBack] = useState(true);

  const cardFlip = () => setIsBack(!isBack);

  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      whileDrag="drag"
      drag
      dragControls={controls}
      className={`${styles.card_wrapper} ${
        isBack ? styles.card_back : styles.card_fore
      }`}
      style={{ touchAction: "none" }}
      onClick={cardFlip}
    />
  );
};

export default Card;
