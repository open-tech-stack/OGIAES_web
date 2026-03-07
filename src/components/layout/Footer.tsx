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

  // Créer une version motion de Link
  const MotionLink = motion(Link)

  return (
    <>
      <footer className="relative" style={{ backgroundColor: '#1B3B4F' }}>
        {/* Effet de vague décoratif */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: 'linear-gradient(to right, #D4AF37, #F5E7B2, #D4AF37)'
        }} />

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
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2C5F7C 0%, #4A7C9C 100%)'
                  }}
                >
                  <span className="text-white font-bold text-xl" style={{ color: '#D4AF37' }}>O</span>
                </motion.div>
                <span className="font-bold text-xl text-white">OGIAES</span>
              </motion.div>

              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#F5F0E6' }}>
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: '#2C5F7C',
                      color: '#F5F0E6'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D4AF37'
                      e.currentTarget.style.color = '#1B3B4F'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2C5F7C'
                      e.currentTarget.style.color = '#F5F0E6'
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-6 text-lg" style={{ color: '#D4AF37' }}>Plateforme</h3>
              <ul className="space-y-3">
                {footerLinks.plateforme.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <MotionLink
                      href={link.href}
                      className="text-sm flex items-center group"
                      style={{ color: '#F5F0E6' }}
                      whileHover={{ color: '#D4AF37' }}
                    >
                      <motion.span
                        className="w-1 h-1 rounded-full mr-2"
                        style={{ backgroundColor: '#D4AF37' }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.label}
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-6 text-lg" style={{ color: '#D4AF37' }}>Informations légales</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <MotionLink
                      href={link.href}
                      className="text-sm flex items-center group"
                      style={{ color: '#F5F0E6' }}
                      whileHover={{ color: '#D4AF37' }}
                    >
                      <motion.span
                        className="w-1 h-1 rounded-full mr-2"
                        style={{ backgroundColor: '#D4AF37' }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.label}
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-6 text-lg" style={{ color: '#D4AF37' }}>Contact</h3>
              <ul className="space-y-4">
                {footerLinks.contact.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <MotionLink
                      href={link.href}
                      className="flex items-center space-x-3 text-sm group"
                      style={{ color: '#F5F0E6' }}
                      whileHover={{ color: '#D4AF37' }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        style={{ color: '#D4AF37' }}
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.label}</span>
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter */}
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <p className="text-sm mb-2" style={{ color: '#F5F0E6' }}>Restez informé</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 rounded-l-lg text-sm focus:outline-none transition-colors"
                    style={{
                      backgroundColor: '#2C5F7C',
                      borderColor: '#4A7C9C',
                      color: '#F5F0E6'
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="px-4 py-2 rounded-r-lg transition-colors text-sm"
                    style={{
                      backgroundColor: '#D4AF37',
                      color: '#1B3B4F'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E7B2'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
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
            className="py-6 border-t flex flex-col md:flex-row justify-between items-center text-sm"
            style={{ borderColor: '#2C5F7C' }}
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center"
              style={{ color: '#F5F0E6' }}
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
                <Heart size={14} className="ml-2" style={{ color: '#D4AF37' }} />
              </motion.div>
            </motion.p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Conditions', 'Confidentialité', 'Plan du site'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <MotionLink
                    href={`/legal/${item.toLowerCase()}`}
                    className="transition-colors"
                    style={{ color: '#F5F0E6' }}
                    whileHover={{ color: '#D4AF37' }}
                  >
                    {item}
                  </MotionLink>
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
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-colors"
            style={{
              backgroundColor: '#D4AF37',
              color: '#1B3B4F'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5E7B2'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}