// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'
import Container from './Container'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    plateforme: [
      { label: 'Accueil', href: '/public/home' },
      { label: 'Fonctionnement', href: '/public/fonctionnement' },
      { label: 'Projets', href: '/public/projets' },
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'FAQ', href: '/faq' }
    ],
    legal: [
      { label: "Conditions d'utilisation", href: '/legal/terms' },
      { label: 'Politique de confidentialité', href: '/legal/privacy' },
      { label: 'Mentions légales', href: '/legal/mentions' },
      { label: 'CGU', href: '/legal/cgu' }
    ],
    contact: [
      { label: 'contact@ogiaes.org', href: 'mailto:contact@ogiaes.org', icon: <Mail size={16} /> },
      { label: '+226 XX XX XX XX', href: 'tel:+226XXXXXXXX', icon: <Phone size={16} /> },
      { label: 'Ouagadougou, Burkina Faso', href: '#', icon: <MapPin size={16} /> }
    ]
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ]

  // CORRECTION : Typage des variantes avec Variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const socialIconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.9
    }
  }

  const linkHoverVariants: Variants = {
    initial: {
      x: 0
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const scrollButtonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.9
    }
  }

  const bottomBarVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3
      }
    }
  }

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 relative">
        {/* Effet de vague décoratif */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green-500 via-green-400 to-green-500" />

        <Container>
          {/* Main Footer avec animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {/* About */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center space-x-2 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-xl">O</span>
                </motion.div>
                <span className="font-bold text-xl text-white">OGIAES</span>
              </motion.div>

              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Plateforme d'investissement citoyen pour le développement économique de l'espace AES.
                Ensemble, construisons l'avenir de notre région.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    custom={index}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold mb-6 text-lg">Plateforme</h3>
              <ul className="space-y-3">
                {footerLinks.plateforme.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center group"
                    >
                      <motion.span
                        className="w-1 h-1 bg-green-500 rounded-full mr-2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold mb-6 text-lg">Informations légales</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center group"
                    >
                      <motion.span
                        className="w-1 h-1 bg-green-500 rounded-full mr-2"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
              <ul className="space-y-4">
                {footerLinks.contact.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors text-sm group"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="text-green-500"
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter */}
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <p className="text-sm text-gray-400 mb-2">Restez informé</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    OK
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={bottomBarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center"
            >
              © {currentYear} OGIAES. Tous droits réservés.
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart size={14} className="ml-2 text-red-500" />
              </motion.div>
            </motion.p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Conditions', 'Confidentialité', 'Plan du site'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={`/legal/${item.toLowerCase()}`}
                    className="hover:text-green-500 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence mode="wait">
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            variants={scrollButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}