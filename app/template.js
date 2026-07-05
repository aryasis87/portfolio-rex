'use client';
import { motion, useReducedMotion } from 'framer-motion';

// Transisi halus tiap pindah halaman (template = remount per navigasi).
export default function Template({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
