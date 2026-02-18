'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  delay?: number
  direction?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
}

export default function SlideIn({ 
  children, 
  delay = 0, 
  direction = 'left',
  className = '' 
}: SlideInProps) {
  const variants = {
    left: { x: -100 },
    right: { x: 100 },
    top: { y: -100 },
    bottom: { y: 100 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...variants[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}