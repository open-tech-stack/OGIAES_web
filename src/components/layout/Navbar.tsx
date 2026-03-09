// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import Container from './Container'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 1024) { // Changé de md à lg pour meilleur contrôle
        setIsOpen(false)
        setActiveDropdown(null)
      }
    }

    // Initialisation
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const menuItems = [
    { label: 'Accueil', href: '/public/home' },
    { label: 'Fonctionnement', href: '/public/fonctionnement' },
    {
      label: 'Projets',
      href: '/public/projets',
      dropdown: [
        { label: 'Projets en cours', href: '/public/projets/en-cours' },
        { label: 'Projets terminés', href: '/public/projets/termines' },
        { label: 'Proposer un projet', href: '/public/projets/proposer' }
      ]
    },
    { label: 'Communauté', href: '/public/communaute' },
    { label: 'Contact', href: '/public/contact' }
  ]

  const colors = {
    primary: '#F5C505',
    primaryDark: '#F3BB00',
    secondary: '#1A05A2',
    secondaryDark: '#03045F',
    accent: '#340DA4',
    accentDark: '#42009E',
    goldLight: '#E1A624',
    white: '#FFFFFF',
    lightBg: '#F8F9FF'
  }

  // Gestion du dropdown pour mobile/tablet
  const handleMobileDropdown = (label: string) => {
    if (windowWidth < 1024) {
      setActiveDropdown(activeDropdown === label ? null : label)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-4'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo - Taille responsive */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <Link href="/public/home" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-16 h-12 sm:w-20 sm:h-15 md:w-24 md:h-16 overflow-hidden"
              >
                <Image
                  src="/images/logot.png"
                  alt="OGIAES Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Menu - lg:flex au lieu de md:flex */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onHoverStart={() => windowWidth >= 1024 && setActiveDropdown(item.label)}
                  onHoverEnd={() => windowWidth >= 1024 && setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center space-x-1 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#F8F9FF] group whitespace-nowrap"
                        style={{ color: colors.secondary }}
                        onClick={() => windowWidth < 1024 && handleMobileDropdown(item.label)}
                      >
                        <span className="font-medium text-sm xl:text-base group-hover:text-[#F5C505] transition-colors">
                          {item.label}
                        </span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} className="xl:size-4 group-hover:text-[#F5C505]" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scaleY: 0.8 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: 10, scaleY: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 xl:w-56 rounded-xl shadow-xl overflow-hidden border border-[#F5C505]/10"
                            style={{ backgroundColor: colors.white }}
                          >
                            {item.dropdown.map((subItem, idx) => (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2.5 xl:py-3 text-sm xl:text-base transition-all duration-300 hover:pl-6"
                                  style={{
                                    color: colors.secondary,
                                    borderLeft: '3px solid transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#F8F9FF'
                                    e.currentTarget.style.color = colors.primary
                                    e.currentTarget.style.borderLeftColor = colors.primary
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.color = colors.secondary
                                    e.currentTarget.style.borderLeftColor = 'transparent'
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#F8F9FF] font-medium text-sm xl:text-base whitespace-nowrap"
                      style={{ color: colors.secondary }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.secondary}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Actions - lg:flex au lieu de md:flex */}
          <motion.div
            className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="hover:scale-105 transition-all duration-300 font-medium text-sm xl:text-base px-3 xl:px-4 py-2 hover:bg-[#F8F9FF]"
                style={{ color: colors.secondary }}
              >
                Se connecter
              </Button>
            </Link>
            <Link href="/auth/register">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="shadow-lg font-medium text-sm xl:text-base px-3 xl:px-4 py-2 whitespace-nowrap"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.goldLight} 100%)`,
                    color: colors.secondaryDark
                  }}
                >
                  S'inscrire
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile/Tablet Menu Button - lg:hidden au lieu de md:hidden */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg relative z-50 hover:bg-[#F8F9FF] transition-colors"
            style={{ color: colors.secondary }}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="sm:size-28" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="sm:size-28" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile/Tablet Menu Amélioré */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                className="py-4 sm:py-6 space-y-2 max-h-[80vh] overflow-y-auto"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.07 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => handleMobileDropdown(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#F8F9FF]"
                          style={{ color: colors.secondary }}
                        >
                          <span className="font-semibold text-base sm:text-lg">
                            {item.label}
                          </span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block pl-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:pl-6 text-sm sm:text-base"
                                  style={{ color: colors.secondary }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#F8F9FF'
                                    e.currentTarget.style.color = colors.primary
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.color = colors.secondary
                                  }}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:pl-6 text-base sm:text-lg"
                        style={{ color: colors.secondary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#F8F9FF'
                          e.currentTarget.style.color = colors.primary
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = colors.secondary
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="pt-4 sm:pt-6 space-y-3 border-t mt-4"
                  style={{ borderColor: '#F5C50520' }}
                >
                  <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full hover:scale-[1.02] transition-all duration-300 py-3 text-base"
                      style={{
                        color: colors.secondary,
                        borderColor: colors.secondary,
                      }}
                    >
                      Se connecter
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                    <Button
                      className="w-full hover:scale-[1.02] transition-all duration-300 shadow-lg py-3 text-base"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.goldLight} 100%)`,
                        color: colors.secondaryDark
                      }}
                    >
                      S'inscrire
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  )
}