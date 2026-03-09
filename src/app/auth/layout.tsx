// app/auth/layout.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

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

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F8F9FF] via-white to-[#F8F9FF]">
      {/* Header minimal - Responsive */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b" style={{ borderColor: `${colors.primary}20` }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              href="/"
              className="flex items-center text-sm sm:text-base transition-colors hover:opacity-80"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={22} className="mr-1 sm:mr-2" />
              <span>Accueil</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Contenu principal centré - Responsive */}
      <main className="pt-14 sm:pt-16 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer simple - Responsive */}
      <footer className="py-3 sm:py-4 text-center text-xs sm:text-sm border-t" style={{ borderColor: `${colors.primary}20`, color: colors.accent }}>
        <div className="container mx-auto px-4">
          <p>© 2024 OGIAES - Plateforme d'investissement citoyen de l'AES</p>
        </div>
      </footer>
    </div>
  )
}