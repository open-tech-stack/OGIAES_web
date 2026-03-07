// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import Container from './Container'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()

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

  // Couleurs du logo
  const colors = {
    primary: '#1B3B4F',    // Bleu foncé du logo
    secondary: '#D4AF37',  // Doré du logo
    accent: '#2C5F7C',     // Bleu moyen
    light: '#F5F0E6',      // Beige clair
    dark: '#0A1A24',       // Bleu très foncé
    white: '#FFFFFF',
    gray: '#6B7280'
  }

  const navVariants: Variants = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  const logoVariants: Variants = {
    initial: {
      scale: 0.8,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  const menuItemVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren" as const
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        when: "beforeChildren" as const,
        staggerChildren: 0.07
      }
    }
  }

  const mobileItemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const chevronVariants: Variants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.2
      }
    }
  }

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      scaleY: 0.8,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      scaleY: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const buttonIconVariants: Variants = {
    initial: {
      rotate: 90,
      opacity: 0
    },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      rotate: -90,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const closeIconVariants: Variants = {
    initial: {
      rotate: -90,
      opacity: 0
    },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      rotate: 90,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? `bg-[${colors.white}]/95 backdrop-blur-lg shadow-lg py-2`
          : 'bg-transparent py-4',
        isOpen && `bg-[${colors.white}]`
      )}
      style={{
        backgroundColor: scrolled ? `${colors.white}F2` : 'transparent'
      }}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo avec animation */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link href="/public/home" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative w-20 h-15 overflow-hidden"
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

          {/* Desktop Menu avec animations */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={menuItemVariants}
                initial="initial"
                animate="animate"
                custom={index}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onHoverStart={() => setActiveDropdown(item.label)}
                onHoverEnd={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 px-4 py-2 transition-colors rounded-lg"
                      style={{
                        color: colors.primary,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.primary}
                    >
                      <span>{item.label}</span>
                      <motion.div
                        variants={chevronVariants}
                        animate={activeDropdown === item.label ? "open" : "closed"}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl overflow-hidden"
                          style={{
                            backgroundColor: colors.white,
                            borderColor: colors.light
                          }}
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
                                className="block px-4 py-3 transition-colors"
                                style={{ color: colors.primary }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = colors.light
                                  e.currentTarget.style.color = colors.secondary
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent'
                                  e.currentTarget.style.color = colors.primary
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
                    className="block px-4 py-2 transition-colors rounded-lg"
                    style={{ color: colors.primary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.light
                      e.currentTarget.style.color = colors.secondary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = colors.primary
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions avec animations */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="hover:scale-105 transition-transform"
                style={{
                  color: colors.primary,
                  '--hover-color': colors.secondary
                } as any}
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
                  className="shadow-lg"
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.white,
                    '--hover-bg': colors.primary
                  } as any}
                >
                  S'inscrire
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button avec animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg relative z-50"
            style={{ color: colors.primary }}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  variants={closeIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  variants={buttonIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu amélioré */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <motion.div className="py-6 space-y-2">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                  >
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div
                          className="px-4 py-2 font-semibold"
                          style={{ color: colors.primary }}
                        >
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block pl-8 py-2 rounded-lg transition-colors"
                            style={{ color: colors.primary }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = colors.light
                              e.currentTarget.style.color = colors.secondary
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = colors.primary
                            }}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-lg transition-colors"
                        style={{ color: colors.primary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.light
                          e.currentTarget.style.color = colors.secondary
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = colors.primary
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  variants={mobileItemVariants}
                  className="pt-6 space-y-3"
                  style={{ borderColor: colors.light }}
                >
                  <Link href="/auth/login" className="block" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full hover:scale-[1.02] transition-transform"
                      style={{
                        color: colors.primary,
                        borderColor: colors.primary,
                        '--hover-bg': colors.light
                      } as any}
                    >
                      Se connecter
                    </Button>
                  </Link>
                  <Link href="/auth/register" className="block" onClick={() => setIsOpen(false)}>
                    <Button
                      className="w-full hover:scale-[1.02] transition-transform shadow-lg"
                      style={{
                        backgroundColor: colors.secondary,
                        color: colors.white,
                        '--hover-bg': colors.primary
                      } as any}
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

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}