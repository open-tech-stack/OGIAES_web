'use client'

import { motion } from 'framer-motion'
import {
  UserCheck,
  Search,
  TrendingUp,
  CheckCircle,
  Shield,
  Clock,
  Smartphone,
  Wallet,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'

export default function FonctionnementPage() {
  const steps = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: '1. Inscription et vérification',
      description: 'Créez votre compte en quelques minutes avec une pièce d\'identité officielle. Notre processus de vérification sécurisé garantit l\'authenticité de chaque membre.',
      details: [
        'Formulaire d\'inscription simple',
        'Vérification d\'identité en ligne',
        'Validation sous 24-48h',
        'Compte sécurisé activé'
      ],
      color: '#1B3B4F'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: '2. Exploration des projets',
      description: 'Parcourez les projets disponibles dans différents secteurs : agriculture, énergie, industrie, technologies. Chaque projet présente son business plan, son équipe et ses objectifs.',
      details: [
        'Filtres par secteur et localisation',
        'Documents détaillés disponibles',
        'Analyses financières incluses',
        'Évaluations de risques'
      ],
      color: '#2C5F7C'
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: '3. Investissement citoyen',
      description: 'Investissez à partir de 500 FCFA dans les projets qui vous correspondent. Gérez votre portefeuille et suivez l\'évolution de vos investissements en temps réel.',
      details: [
        'Montant minimum de 500 FCFA',
        'Paiement mobile ou bancaire',
        'Investissement progressif',
        'Possibilité de plusieurs projets'
      ],
      color: '#4A7C9C'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '4. Suivi et retours',
      description: 'Recevez des rapports réguliers sur l\'avancement des projets. Visualisez l\'impact concret de vos investissements sur le développement économique local.',
      details: [
        'Tableau de bord personnalisé',
        'Notifications en temps réel',
        'Rapports trimestriels',
        'Indicateurs d\'impact'
      ],
      color: '#6B9AB8'
    }
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sécurisé',
      description: 'Transactions cryptées et vérification d\'identité'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Rapide',
      description: 'Processus simplifié, investissement en quelques clics'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Accessible',
      description: 'Depuis votre smartphone, où que vous soyez'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F5F0E6] to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                style={{
                  backgroundColor: '#F5F0E6',
                  boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.2)'
                }}
              >
                <TrendingUp className="w-10 h-10" style={{ color: '#D4AF37' }} />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B3B4F' }}>
                Comment ça fonctionne ?
              </h1>

              <p className="text-xl mb-8" style={{ color: '#4A7C9C' }}>
                Découvrez comment devenir acteur du développement économique de l'AES
                en quelques étapes simples
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="shadow-lg"
                    style={{ backgroundColor: '#D4AF37', color: '#1B3B4F' }}
                  >
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="#steps">
                  <Button
                    variant="outline"
                    size="lg"
                    style={{ borderColor: '#2C5F7C', color: '#2C5F7C' }}
                  >
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20">
        <Container>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number & Icon */}
                  <div className="shrink-0 relative">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg relative z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    {/* Ligne de connexion */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute left-10 top-20 w-0.5 h-16 hidden md:block"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                          opacity: 0.3
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className="bg-white rounded-2xl p-8 border"
                      style={{
                        boxShadow: '0 10px 30px rgba(27, 59, 79, 0.08)',
                        borderColor: '#F5F0E6'
                      }}
                    >
                      <h2 className="text-2xl font-bold mb-3" style={{ color: step.color }}>
                        {step.title}
                      </h2>
                      <p className="mb-6" style={{ color: '#4A7C9C' }}>
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={16} style={{ color: '#D4AF37' }} />
                            <span className="text-sm" style={{ color: '#2C5F7C' }}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1B3B4F' }}>
              Une plateforme conçue pour vous
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto" style={{ color: '#4A7C9C' }}>
              Des fonctionnalités pensées pour simplifier votre expérience d'investissement
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl text-center transition-all"
                style={{
                  backgroundColor: '#F5F0E6',
                  border: '1px solid rgba(212, 175, 55, 0.1)'
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: 'white',
                    color: '#D4AF37',
                    boxShadow: '0 5px 15px rgba(212, 175, 55, 0.15)'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1B3B4F' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4A7C9C' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20">
        <Container>
          <div
            className="rounded-3xl p-12 text-center text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1B3B4F 0%, #2C5F7C 100%)',
            }}
          >
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Des questions ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F5F0E6' }}>
                Consultez notre FAQ ou contactez notre équipe pour plus d'informations
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/faq">
                  <Button
                    size="lg"
                    className="shadow-lg hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: '#D4AF37',
                      color: '#1B3B4F',
                      border: 'none'
                    }}
                  >
                    Voir la FAQ
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    style={{
                      borderColor: '#F5F0E6',
                      color: '#F5F0E6'
                    }}
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}