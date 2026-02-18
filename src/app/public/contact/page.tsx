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
  CheckCircle,
  AlertCircle
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
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: ['+226 XX XX XX XX', '+226 XX XX XX XX'],
      action: 'tel:+226XXXXXXXX',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Bureaux',
      details: ['Ouagadougou, Burkina Faso', 'Bamako, Mali', 'Niamey, Niger'],
      action: '#',
      color: 'from-purple-500 to-purple-600'
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6"
              >
                <MessageSquare className="w-10 h-10 text-green-600" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
                  <Card className="h-full text-center group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Amadou Diallo"
                    />
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="amadou@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
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
                      className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center space-x-2"
                    >
                      <CheckCircle size={20} />
                      <span>Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                    </motion.div>
                  )}
                </form>
              </FadeIn>
            </div>

            {/* Map & Additional Info */}
            <div>
              <FadeIn direction="right">
                <Card className="h-full">
                  {/* Map Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 flex items-center justify-center text-white">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p className="text-lg font-semibold">OGIAES</p>
                      <p className="text-sm opacity-90">Ouagadougou, Burkina Faso</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Clock size={18} className="mr-2 text-green-600" />
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lundi - Vendredi</span>
                          <span className="text-gray-900 font-medium">08h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Samedi</span>
                          <span className="text-gray-900 font-medium">09h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimanche</span>
                          <span className="text-gray-900 font-medium">Fermé</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users size={18} className="mr-2 text-green-600" />
                        Support disponible
                      </h3>
                      <p className="text-sm text-gray-600">
                        Notre équipe de support est joignable par téléphone et email aux horaires d'ouverture.
                        Pour une assistance immédiate, privilégiez l'appel téléphonique.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <HelpCircle size={18} className="mr-2 text-green-600" />
                        Questions fréquentes
                      </h3>
                      <div className="space-y-3">
                        {faqItems.slice(0, 2).map((item, index) => (
                          <div key={index}>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                              {item.question}
                            </p>
                            <p className="text-xs text-gray-600">
                              {item.answer}
                            </p>
                          </div>
                        ))}
                        <Link 
                          href="/faq"
                          className="inline-block text-sm text-green-600 hover:text-green-700 font-medium mt-2"
                        >
                          Voir toutes les FAQ →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
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
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                    <HelpCircle size={20} className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600 ml-8">
                    {item.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link href="/faq">
              <Button variant="outline">
                Consulter toutes les FAQ
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir les actualités des projets et les opportunités d'investissement
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button type="submit" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 whitespace-nowrap">
                S'abonner
              </Button>
            </form>
            <p className="text-sm text-green-200 mt-4">
              Nous respectons votre vie privée. Désinscription possible à tout moment.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}