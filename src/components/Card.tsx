"use client"

import styles from "@/styles/Card.module.css";
import { useState } from "react";

const Card = () => {
  const [isBack, setIsBack] = useState(true)

  const cardFlip = () => setIsBack(!isBack)
  return (
    <div
      className={`${styles.card_wrapper} ${
        isBack ? styles.card_back : styles.card_fore
      }`}
      onClick={cardFlip}
    />
  );
};

export default Card;
