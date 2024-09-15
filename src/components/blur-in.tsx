'use client';

import { Variants, motion, useInView } from 'framer-motion';

import { useRef } from 'react';

interface BlurIntProps {
  word: string | JSX.Element;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: {
      filter: 'blur(0px)',
      opacity: isInView ? 1 : 0,
      transition: { duration: 1 },
    },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate='visible'
      transition={{ duration }}
      variants={combinedVariants}
      className={className}
    >
      {word}
    </motion.div>
  );
};

export default BlurIn;
