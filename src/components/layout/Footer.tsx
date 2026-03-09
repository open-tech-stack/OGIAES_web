// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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

  const MotionLink = motion(Link)

  return (
    <>
      <footer className="relative" style={{ backgroundColor: colors.secondaryDark }}>
        {/* Effet de vague décoratif */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.goldLight}, ${colors.primary})`
        }} />

        <Container>
          {/* Main Footer - Responsive Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
          >
            {/* About */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`
                  }}
                >
                  <span className="text-white font-bold text-lg sm:text-xl" style={{ color: colors.primary }}>O</span>
                </motion.div>
                <span className="font-bold text-lg sm:text-xl text-white">OGIAES</span>
              </div>

              <p className="text-xs sm:text-sm mb-6 leading-relaxed max-w-xs mx-auto sm:mx-0" style={{ color: colors.lightBg }}>
                Plateforme d'investissement citoyen pour le développement économique de l'espace AES.
                Ensemble, construisons l'avenir de notre région.
              </p>

              {/* Social Icons - Responsive */}
              <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.lightBg
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary
                      e.currentTarget.style.color = colors.secondaryDark
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.secondary
                      e.currentTarget.style.color = colors.lightBg
                    }}
                    aria-label={social.label}
                  >
                    <span className="scale-75 sm:scale-100">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-center sm:text-left"
            >
              <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: colors.primary }}>Plateforme</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.plateforme.map((link) => (
                  <motion.li key={link.href}>
                    <MotionLink
                      href={link.href}
                      className="text-xs sm:text-sm inline-block transition-colors"
                      style={{ color: colors.lightBg }}
                      whileHover={{ x: 5, color: colors.primary }}
                    >
                      {link.label}
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-center sm:text-left"
            >
              <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: colors.primary }}>Informations légales</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link) => (
                  <motion.li key={link.href}>
                    <MotionLink
                      href={link.href}
                      className="text-xs sm:text-sm inline-block transition-colors"
                      style={{ color: colors.lightBg }}
                      whileHover={{ x: 5, color: colors.primary }}
                    >
                      {link.label}
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-center sm:text-left"
            >
              <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: colors.primary }}>Contact</h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.contact.map((link, index) => (
                  <motion.li key={index}>
                    <MotionLink
                      href={link.href}
                      className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-xs sm:text-sm transition-colors"
                      style={{ color: colors.lightBg }}
                      whileHover={{ x: 5, color: colors.primary }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        style={{ color: colors.primary }}
                      >
                        {link.icon}
                      </motion.span>
                      <span className="truncate max-w-[200px]">{link.label}</span>
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter - Responsive */}
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs sm:text-sm mb-2" style={{ color: colors.lightBg }}>Restez informé</p>
                <div className="flex max-w-[250px] mx-auto sm:mx-0">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-lg text-xs sm:text-sm focus:outline-none transition-colors"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.lightBg,
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-r-lg transition-colors text-xs sm:text-sm whitespace-nowrap"
                    style={{
                      background: colors.primary,
                      color: colors.secondaryDark
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = colors.goldLight}
                    onMouseLeave={(e) => e.currentTarget.style.background = colors.primary}
                  >
                    OK
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="py-4 sm:py-6 border-t flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 sm:gap-0"
            style={{ borderColor: colors.secondary }}
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              style={{ color: colors.lightBg }}
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
                <Heart size={12}  className="ml-1 sm:ml-2" style={{ color: colors.primary }} />
              </motion.div>
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {['Conditions', 'Confidentialité', 'Plan du site'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                >
                  <MotionLink
                    href={`/legal/${item.toLowerCase()}`}
                    className="transition-colors"
                    style={{ color: colors.lightBg }}
                    whileHover={{ color: colors.primary }}
                  >
                    {item}
                  </MotionLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </footer>

      {/* Scroll to top button - Responsive */}
      <AnimatePresence mode="wait">
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 p-2 sm:p-2.5 lg:p-3 rounded-full shadow-lg transition-colors"
            style={{
              background: colors.primary,
              color: colors.secondaryDark
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = colors.goldLight}
            onMouseLeave={(e) => e.currentTarget.style.background = colors.primary}
          >
            <ArrowUp size={20} className="sm:size-22 lg:size-24" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}