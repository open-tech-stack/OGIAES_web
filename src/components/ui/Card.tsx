'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  border?: boolean
  hover?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className,
  padding = 'md',
  shadow = 'md',
  border = true,
  hover = false,
  onClick
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8'
  }

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        'bg-white rounded-xl transition-all',
        paddingStyles[padding],
        shadowStyles[shadow],
        border && 'border border-gray-100',
        hover && 'cursor-pointer hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

// Sous-composants pour une meilleure organisation
Card.Header = function CardHeader({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <div className={cn('border-b border-gray-100 pb-4 mb-4', className)}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return <div className={className}>{children}</div>
}

Card.Footer = function CardFooter({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <div className={cn('border-t border-gray-100 pt-4 mt-4', className)}>
      {children}
    </div>
  )
}