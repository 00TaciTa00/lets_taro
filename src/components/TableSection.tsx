"use client";

import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

interface TableSectionProps {
  children: ReactNode;
}

const TableSection = ({ children }: TableSectionProps) => {
  const constraintsRef = useRef(null);
  return <motion.section ref={constraintsRef}>{children}</motion.section>;
};

export default TableSection;
