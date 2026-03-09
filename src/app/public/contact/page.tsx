'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
  HelpCircle,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import FadeIn from '@/components/animations/FadeIn'

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      details: ['contact@ogiaes.org', 'support@ogiaes.org'],
      action: 'mailto:contact@ogiaes.org',
      bgColor: colors.secondaryDark,
      hoverColor: colors.accentDark
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Téléphone',
      details: ['+226 XX XX XX XX', '+226 XX XX XX XX'],
      action: 'tel:+226XXXXXXXX',
      bgColor: colors.secondary,
      hoverColor: colors.accent
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Bureaux',
      details: ['Ouagadougou, Burkina Faso', 'Bamako, Mali', 'Niamey, Niger'],
      action: '#',
      bgColor: colors.accent,
      hoverColor: colors.accentDark
    }
  ]

  const faqItems = [
    {
      question: 'Comment créer un compte ?',
      answer: 'La création de compte est simple et rapide. Rendez-vous sur la page d\'inscription, remplissez le formulaire avec vos informations personnelles et fournissez une pièce d\'identité officielle pour validation.'
    },
    {
      question: 'Quel est le montant minimum d\'investissement ?',
      answer: 'Le montant minimum d\'investissement est de 500 FCFA par mois, permettant à chaque citoyen de participer selon ses capacités.'
    },
    {
      question: 'Comment sont sélectionnés les projets ?',
      answer: 'Les projets sont évalués par un comité d\'experts indépendants selon des critères stricts de viabilité, d\'impact social et de transparence.'
    },
    {
      question: 'Mes investissements sont-ils sécurisés ?',
      answer: 'Oui, tous les investissements sont protégés par des mesures de sécurité strictes et une traçabilité complète des transactions.'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F8F9FF] to-white">
      {/* Hero Section - Harmonisé */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-b from-[#F8F9FF] to-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-4 sm:mb-6 mx-auto"
                style={{
                  backgroundColor: colors.lightBg,
                  boxShadow: `0 10px 25px -5px ${colors.primary}30`
                }}
              >
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                Contactez-nous
              </h1>

              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: colors.accent }}>
                Notre équipe est là pour répondre à toutes vos questions
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Info Cards - Responsive */}
      <section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={info.action} className="block h-full">
                  <div
                    className="h-full text-center p-4 sm:p-5 lg:p-6 rounded-xl transition-all text-white shadow-lg hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${info.bgColor} 0%, ${info.hoverColor} 100%)`
                    }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-white/20">
                      <div className="text-white scale-90 sm:scale-100">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">
                      {info.title}
                    </h3>
                    <div className="space-y-0.5 sm:space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-white/90">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form & Map - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 px-4">
            {/* Form */}
            <div>
              <FadeIn direction="left">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                  Envoyez-nous un message
                </h2>
                <p className="mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base" style={{ color: colors.accent }}>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Amadou Diallo"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="amadou@email.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="support">Support technique</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="projet">Proposition de projet</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base resize-none"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-lg hover:scale-105 transition-transform text-sm sm:text-base py-2 sm:py-3"
                    style={{ background: colors.primary, color: colors.secondaryDark }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#03045F] border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 rounded-lg flex items-center space-x-2"
                      style={{ backgroundColor: colors.secondaryDark, color: 'white' }}
                    >
                      <CheckCircle size={16} className="sm:size-20" style={{ color: colors.primary }} />
                      <span className="text-xs sm:text-sm">Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                    </motion.div>
                  )}
                </form>
              </FadeIn>
            </div>

            {/* Map & Additional Info - Responsive */}
            <div>
              <FadeIn direction="right">
                <div className="h-full p-4 sm:p-5 lg:p-6 rounded-xl" style={{ backgroundColor: colors.lightBg }}>
                  {/* Map Placeholder */}
                  <div
                    className="h-48 sm:h-56 lg:h-64 rounded-xl mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)` }}
                  >
                    <div className="text-center">
                      <MapPin size={32} className="sm:size-40 lg:size-48 mx-auto mb-2" style={{ color: colors.primary }} />
                      <p className="text-sm sm:text-base font-semibold">OGIAES</p>
                      <p className="text-xs sm:text-sm opacity-90">Ouagadougou, Burkina Faso</p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base" style={{ color: colors.secondaryDark }}>
                        <Clock size={16} className="sm:size-18 mr-1.5 sm:mr-2" style={{ color: colors.primary }} />
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span style={{ color: colors.accent }}>Lundi - Vendredi</span>
                          <span className="font-medium" style={{ color: colors.secondaryDark }}>08h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span style={{ color: colors.accent }}>Samedi</span>
                          <span className="font-medium" style={{ color: colors.secondaryDark }}>09h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span style={{ color: colors.accent }}>Dimanche</span>
                          <span className="font-medium" style={{ color: colors.secondaryDark }}>Fermé</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base" style={{ color: colors.secondaryDark }}>
                        <Users size={16} className="sm:size-18 mr-1.5 sm:mr-2" style={{ color: colors.primary }} />
                        Support disponible
                      </h3>
                      <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>
                        Notre équipe de support est joignable par téléphone et email aux horaires d'ouverture.
                        Pour une assistance immédiate, privilégiez l'appel téléphonique.
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t" style={{ borderColor: `${colors.primary}30` }}>
                      <h3 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base" style={{ color: colors.secondaryDark }}>
                        <HelpCircle size={16} className="sm:size-18 mr-1.5 sm:mr-2" style={{ color: colors.primary }} />
                        Questions fréquentes
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {faqItems.slice(0, 2).map((item, index) => (
                          <div key={index}>
                            <p className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1" style={{ color: colors.secondaryDark }}>
                              {item.question}
                            </p>
                            <p className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>
                              {item.answer}
                            </p>
                          </div>
                        ))}
                        <Link
                          href="/faq"
                          className="inline-block text-xs sm:text-sm font-medium mt-1 sm:mt-2 transition-colors"
                          style={{ color: colors.primary }}
                        >
                          Voir toutes les FAQ →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.lightBg }}>
        <Container>
          <FadeIn>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 lg:mb-4 px-4" style={{ color: colors.secondaryDark }}>
              Questions fréquentes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-center mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4" style={{ color: colors.accent }}>
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 flex items-start" style={{ color: colors.secondaryDark }}>
                    <HelpCircle size={16} className="sm:size-18 lg:size-20 mr-1.5 sm:mr-2 shrink-0 mt-0.5" style={{ color: colors.primary }} />
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base ml-6 sm:ml-7 lg:ml-8" style={{ color: colors.accent }}>
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 px-4">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: colors.accent }}>
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link href="/faq">
              <Button
                variant="outline"
                className="text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Consulter la FAQ
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)` }}>
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
              Restez informé
            </h2>
            <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-5 lg:mb-6" style={{ color: colors.lightBg }}>
              Inscrivez-vous à notre newsletter pour recevoir les actualités des projets et les opportunités d'investissement
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                style={{
                  '--tw-ring-color': colors.primary
                } as any}
              />
              <Button
                type="submit"
                className="whitespace-nowrap shadow-lg hover:scale-105 transition-transform text-sm sm:text-base py-2 sm:py-3"
                style={{ background: colors.primary, color: colors.secondaryDark }}
              >
                S'abonner
              </Button>
            </form>
            <p className="text-xs sm:text-sm mt-3 sm:mt-4" style={{ color: colors.lightBg }}>
              Nous respectons votre vie privée. Désinscription possible à tout moment.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}