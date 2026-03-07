'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  style,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "text-white hover:bg-opacity-90",
    secondary: "text-gray-900 hover:bg-opacity-90",
    outline: "border-2 hover:bg-opacity-10",
    ghost: "hover:bg-opacity-10"
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  const variantStyles = {
    primary: { backgroundColor: '#2C5F7C' }, // Bleu plus clair
    secondary: { backgroundColor: '#D4AF37', color: '#2C5F7C' },
    outline: { borderColor: '#2C5F7C', color: '#2C5F7C' },
    ghost: { color: '#2C5F7C' }
  }

  const focusRingColors = {
    primary: '#2C5F7C',
    secondary: '#D4AF37',
    outline: '#2C5F7C',
    ghost: '#2C5F7C'
  }

  const buttonClassName = [
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ].filter(Boolean).join(' ')

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClassName}
      style={{
        ...variantStyles[variant],
        ...(variant === 'outline' && { borderWidth: '2px' }),
        ...style
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 2px ${focusRingColors[variant]}40`
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button