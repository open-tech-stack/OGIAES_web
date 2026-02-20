// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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

  // CORRECTION : Types corrects pour les variantes Framer Motion
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
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4',
        isOpen && 'bg-white'
      )}
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
            <Link href="/public/home" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-green-500/30"
              >
                <span className="text-white font-bold text-xl">O</span>
              </motion.div>
              <span className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                OGIAES
              </span>
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
                    <button className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50">
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
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
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
                                className="block px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
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
                    className="block px-4 py-2 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
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
              >
                Se connecter
              </Button>
            </Link>
            <Link href="/auth/register">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="shadow-lg hover:shadow-green-500/30">
                  S'inscrire
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button avec animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 relative z-50"
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
                        <div className="px-4 py-2 font-semibold text-gray-700">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block pl-8 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  variants={mobileItemVariants}
                  className="pt-6 space-y-3 border-t border-gray-100"
                >
                  <Link href="/auth/login" className="block" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full hover:scale-[1.02] transition-transform">
                      Se connecter
                    </Button>
                  </Link>
                  <Link href="/auth/register" className="block" onClick={() => setIsOpen(false)}>
                    <Button className="w-full hover:scale-[1.02] transition-transform shadow-lg">
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