import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Container({
  children,
  className,
  size = 'lg'
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }

  // Fonction cn simple
  const cn = (...classes: (string | undefined | false)[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className={cn(
      'w-full mx-auto px-4 sm:px-6 lg:px-8',
      sizes[size],
      className
    )}>
      {children}
    </div>
  )
}