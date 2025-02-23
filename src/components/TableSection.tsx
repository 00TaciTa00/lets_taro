"use client";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import { useRef } from "react";
import styles from "@/styles/TableSection.module.css";

const TableSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div ref={constraintsRef} className={styles.tablesection}>
      <Card dragConstraints={constraintsRef} />
    </motion.div>
  );
};

export default TableSection;
