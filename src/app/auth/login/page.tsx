// app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Vos nouvelles couleurs
const colors = {
  primary: '#F5C505',
  primaryDark: '#F3BB00',
  secondary: '#1A05A2',
  secondaryDark: '#03045F',
  accent: '#340DA4',
  accentDark: '#42009E',
  goldLight: '#E1A624',
  lightBg: '#F8F9FF'
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border"
      style={{ borderColor: `${colors.primary}20` }}
    >
      {/* Logo */}
      <div className="text-center mb-5 sm:mb-6 md:mb-8">
        <Link href="/" className="inline-block">
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/logot.png"
                alt="OGIAES"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: colors.secondaryDark }}>OGIAES</span>
          </div>
        </Link>
        <p className="text-xs sm:text-sm mt-1 sm:mt-2" style={{ color: colors.accent }}>
          Connectez-vous à votre espace citoyen
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
              style={{
                borderColor: `${colors.primary}20`,
                color: colors.secondaryDark,
                '--tw-ring-color': colors.primary
              } as any}
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
            Mot de passe
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-9 sm:pr-12 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
              style={{
                borderColor: `${colors.primary}20`,
                color: colors.secondaryDark,
                '--tw-ring-color': colors.primary
              } as any}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
              style={{ color: colors.accent }}
            >
              {showPassword ? <EyeOff size={16} className="sm:size-18" /> : <Eye size={16}/>}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded focus:ring-2"
              style={{
                color: colors.primary,
                borderColor: `${colors.primary}40`
              } as any}
            />
            <span className="text-xs sm:text-sm" style={{ color: colors.accent }}>Se souvenir de moi</span>
          </label>

          <Link
            href="/auth/forgot-password"
            className="text-xs sm:text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: colors.primary }}
          >
            Mot de passe oublié ?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full group text-sm sm:text-base py-2 sm:py-3"
          style={{ background: colors.primary, color: colors.secondaryDark }}
        >
          Se connecter
          <ArrowRight className="ml-2 w-4 h-4  group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-5 sm:my-6 md:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t" style={{ borderColor: `${colors.primary}20` }}></div>
        </div>
        <div className="relative flex justify-center text-xs sm:text-sm">
          <span className="px-3 sm:px-4 bg-white" style={{ color: colors.accent }}>ou</span>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-xs sm:text-sm" style={{ color: colors.accent }}>
        Pas encore de compte ?{' '}
        <Link
          href="/auth/register"
          className="font-semibold transition-colors hover:opacity-80"
          style={{ color: colors.primary }}
        >
          Créer un compte
        </Link>
      </p>

      {/* Security Note */}
      <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 rounded-lg" style={{ backgroundColor: colors.lightBg }}>
        <p className="text-[10px] sm:text-xs text-center" style={{ color: colors.secondaryDark }}>
          🔒 Connexion sécurisée - Identification officielle requise
        </p>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-4 sm:mt-5">
        <Link
          href="/"
          className="text-[10px] sm:text-xs transition-colors hover:opacity-80"
          style={{ color: colors.accent }}
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </motion.div>
  )
}