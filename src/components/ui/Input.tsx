'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { input } from 'framer-motion/client'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  helper?: string
  required?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    error, 
    success,
    icon,
    iconPosition = 'left',
    helper,
    required,
    type = 'text',
    disabled,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [focused, setFocused] = useState(false)

    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Icon Left */}
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Input */}
          <motion.div
            animate={{ 
              scale: focused ? 1.01 : 1,
              transition: { duration: 0.2 }
            }}
          >
            <input
              ref={ref}
              type={inputType}
              disabled={disabled}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={cn(
                'w-full px-4 py-3 bg-white border rounded-lg transition-all',
                'placeholder:text-gray-400 text-gray-900',
                'focus:outline-none focus:ring-2 focus:ring-green-500/20',
                icon && iconPosition === 'left' && 'pl-10',
                icon && iconPosition === 'right' && 'pr-10',
                isPassword && 'pr-10',
                error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 
                success ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20' : 
                'border-gray-200 focus:border-green-500',
                disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
                className
              )}
              aria-invalid={!!error}
              aria-describedby={error ? `${props.id}-error` : helper ? `${props.id}-helper` : undefined}
              {...props}
            />
          </motion.div>

          {/* Password Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}

          {/* Icon Right */}
          {icon && iconPosition === 'right' && !isPassword && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          {/* Status Icon */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <AlertCircle size={18} className="text-red-500" />
              </motion.div>
            )}
            {success && !error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <CheckCircle size={18} className="text-green-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Helper/Error Message */}
        <AnimatePresence mode="wait">
          {(error || success || helper) && (
            <motion.div
              key={error ? 'error' : success ? 'success' : 'helper'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2"
            >
              {error ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {error}
                </p>
              ) : success ? (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <CheckCircle size={14} />
                  {success}
                </p>
              ) : helper ? (
                <p className="text-sm text-gray-500">{helper}</p>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input