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
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@ogiaes.org', 'support@ogiaes.org'],
      action: 'mailto:contact@ogiaes.org',
      bgColor: 'bg-[#1B3B4F]',
      hoverColor: 'hover:bg-[#2C5F7C]'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: ['+226 XX XX XX XX', '+226 XX XX XX XX'],
      action: 'tel:+226XXXXXXXX',
      bgColor: 'bg-[#2C5F7C]',
      hoverColor: 'hover:bg-[#4A7C9C]'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Bureaux',
      details: ['Ouagadougou, Burkina Faso', 'Bamako, Mali', 'Niamey, Niger'],
      action: '#',
      bgColor: 'bg-[#4A7C9C]',
      hoverColor: 'hover:bg-[#6B9AB8]'
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F5F0E6] to-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/30"
              >
                <MessageSquare className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B3B4F]">
                Contactez-nous
              </h1>

              <p className="text-xl mb-8 max-w-2xl mx-auto text-[#2C5F7C]">
                Notre équipe est là pour répondre à toutes vos questions
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
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
                  <div className={`h-full text-center p-6 rounded-xl transition-all ${info.bgColor} ${info.hoverColor} text-white shadow-lg`}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-white/20 group-hover:scale-110 transition-transform">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-white/90">
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

      {/* Contact Form & Map */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <FadeIn direction="left">
                <h2 className="text-2xl font-bold mb-2 text-[#1B3B4F]">
                  Envoyez-nous un message
                </h2>
                <p className="mb-8 text-[#2C5F7C]">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1B3B4F]">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Amadou Diallo"
                        className="w-full px-4 py-3 border border-[#F5F0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#1B3B4F] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1B3B4F]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="amadou@email.com"
                        className="w-full px-4 py-3 border border-[#F5F0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#1B3B4F] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1B3B4F]">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#F5F0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#1B3B4F] bg-white"
                    >
                      <option value="" className="text-[#4A7C9C]">Sélectionnez un sujet</option>
                      <option value="information" className="text-[#1B3B4F]">Demande d'information</option>
                      <option value="support" className="text-[#1B3B4F]">Support technique</option>
                      <option value="partenariat" className="text-[#1B3B4F]">Partenariat</option>
                      <option value="projet" className="text-[#1B3B4F]">Proposition de projet</option>
                      <option value="autre" className="text-[#1B3B4F]">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1B3B4F]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#F5F0E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-[#1B3B4F] bg-white resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-lg bg-[#D4AF37] text-[#1B3B4F] hover:bg-[#F5E7B2]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#1B3B4F] border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg flex items-center space-x-2 bg-[#1B3B4F] text-white"
                    >
                      <CheckCircle size={20} className="text-[#D4AF37]" />
                      <span>Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                    </motion.div>
                  )}
                </form>
              </FadeIn>
            </div>

            {/* Map & Additional Info */}
            <div>
              <FadeIn direction="right">
                <div className="h-full p-6 rounded-xl bg-[#F5F0E6]">
                  {/* Map Placeholder */}
                  <div
                    className="h-64 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-br from-[#1B3B4F] to-[#2C5F7C]"
                  >
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-2 text-[#D4AF37]" />
                      <p className="text-lg font-semibold">OGIAES</p>
                      <p className="text-sm opacity-90">Ouagadougou, Burkina Faso</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center text-[#1B3B4F]">
                        <Clock size={18} className="mr-2 text-[#D4AF37]" />
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#2C5F7C]">Lundi - Vendredi</span>
                          <span className="font-medium text-[#1B3B4F]">08h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#2C5F7C]">Samedi</span>
                          <span className="font-medium text-[#1B3B4F]">09h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#2C5F7C]">Dimanche</span>
                          <span className="font-medium text-[#1B3B4F]">Fermé</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center text-[#1B3B4F]">
                        <Users size={18} className="mr-2 text-[#D4AF37]" />
                        Support disponible
                      </h3>
                      <p className="text-sm text-[#2C5F7C]">
                        Notre équipe de support est joignable par téléphone et email aux horaires d'ouverture.
                        Pour une assistance immédiate, privilégiez l'appel téléphonique.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D4AF37]/30">
                      <h3 className="font-semibold mb-3 flex items-center text-[#1B3B4F]">
                        <HelpCircle size={18} className="mr-2 text-[#D4AF37]" />
                        Questions fréquentes
                      </h3>
                      <div className="space-y-3">
                        {faqItems.slice(0, 2).map((item, index) => (
                          <div key={index}>
                            <p className="text-sm font-medium mb-1 text-[#1B3B4F]">
                              {item.question}
                            </p>
                            <p className="text-xs text-[#2C5F7C]">
                              {item.answer}
                            </p>
                          </div>
                        ))}
                        <Link
                          href="/faq"
                          className="inline-block text-sm font-medium mt-2 transition-colors text-[#D4AF37] hover:text-[#1B3B4F]"
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F0E6]">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4 text-[#1B3B4F]">
              Questions fréquentes
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-[#2C5F7C]">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 rounded-xl bg-white">
                  <h3 className="text-lg font-semibold mb-2 flex items-start text-[#1B3B4F]">
                    <HelpCircle size={20} className="mr-2 shrink-0 mt-1 text-[#D4AF37]" />
                    {item.question}
                  </h3>
                  <p className="ml-8 text-[#2C5F7C]">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="mb-4 text-[#2C5F7C]">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link href="/faq">
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white" children={undefined}              />
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#1B3B4F]">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Restez informé
            </h2>
            <p className="text-xl mb-8 text-[#F5F0E6]">
              Inscrivez-vous à notre newsletter pour recevoir les actualités des projets et les opportunités d'investissement
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-[#1B3B4F] bg-white"
              />
              <Button
                type="submit"
                className="whitespace-nowrap shadow-lg bg-[#D4AF37] text-[#1B3B4F] hover:bg-[#F5E7B2]"
              >
                S'abonner
              </Button>
            </form>
            <p className="text-sm mt-4 text-[#F5F0E6]">
              Nous respectons votre vie privée. Désinscription possible à tout moment.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}