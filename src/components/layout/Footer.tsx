'use client' // ← Ajout de cette directive pour permettre l'utilisation de Framer Motion

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react'
import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    plateforme: [
      { label: 'Accueil', href: '/' },
      { label: 'Fonctionnement', href: '/fonctionnement' },
      { label: 'Projets', href: '/projets' },
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

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="font-bold text-xl text-white">OGIAES</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Plateforme d'investissement citoyen pour le développement économique de l'espace AES.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Plateforme</h3>
            <ul className="space-y-3">
              {footerLinks.plateforme.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Informations légales</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors text-sm"
                  >
                    <span className="text-green-500">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} OGIAES. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/legal/terms" className="hover:text-green-500 transition-colors">
              Conditions
            </Link>
            <Link href="/legal/privacy" className="hover:text-green-500 transition-colors">
              Confidentialité
            </Link>
            <Link href="/sitemap" className="hover:text-green-500 transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}