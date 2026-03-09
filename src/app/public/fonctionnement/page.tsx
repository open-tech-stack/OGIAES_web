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

  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '1. Inscription et vérification',
      description: 'Créez votre compte en quelques minutes avec une pièce d\'identité officielle. Notre processus de vérification sécurisé garantit l\'authenticité de chaque membre.',
      details: [
        'Formulaire d\'inscription simple',
        'Vérification d\'identité en ligne',
        'Validation sous 24-48h',
        'Compte sécurisé activé'
      ],
      color: colors.secondaryDark
    },
    {
      icon: <Search className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '2. Exploration des projets',
      description: 'Parcourez les projets disponibles dans différents secteurs : agriculture, énergie, industrie, technologies. Chaque projet présente son business plan, son équipe et ses objectifs.',
      details: [
        'Filtres par secteur et localisation',
        'Documents détaillés disponibles',
        'Analyses financières incluses',
        'Évaluations de risques'
      ],
      color: colors.secondary
    },
    {
      icon: <Wallet className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '3. Investissement citoyen',
      description: 'Investissez à partir de 500 FCFA dans les projets qui vous correspondent. Gérez votre portefeuille et suivez l\'évolution de vos investissements en temps réel.',
      details: [
        'Montant minimum de 500 FCFA',
        'Paiement mobile ou bancaire',
        'Investissement progressif',
        'Possibilité de plusieurs projets'
      ],
      color: colors.accent
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: '4. Suivi et retours',
      description: 'Recevez des rapports réguliers sur l\'avancement des projets. Visualisez l\'impact concret de vos investissements sur le développement économique local.',
      details: [
        'Tableau de bord personnalisé',
        'Notifications en temps réel',
        'Rapports trimestriels',
        'Indicateurs d\'impact'
      ],
      color: colors.accentDark
    }
  ]

  const features = [
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Sécurisé',
      description: 'Transactions cryptées et vérification d\'identité'
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Rapide',
      description: 'Processus simplifié, investissement en quelques clics'
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Accessible',
      description: 'Depuis votre smartphone, où que vous soyez'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F8F9FF] to-white">
      {/* Hero Section - Responsive */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
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
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                Comment ça fonctionne ?
              </h1>

              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4" style={{ color: colors.accent }}>
                Découvrez comment devenir acteur du développement économique de l'AES
                en quelques étapes simples
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/auth/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="shadow-lg w-full sm:w-auto"
                    style={{ background: colors.primary, color: colors.secondaryDark }}
                  >
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link href="#steps" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    style={{ borderColor: colors.secondary, color: colors.secondary }}
                  >
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Steps Section - Responsive */}
      <section id="steps" className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
                  {/* Step Number & Icon */}
                  <div className="shrink-0 relative mx-auto lg:mx-0">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white shadow-lg relative z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    {/* Ligne de connexion - cachée sur mobile/tablet */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute left-8 sm:left-10 top-16 sm:top-20 w-0.5 h-12 sm:h-16 hidden lg:block"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                          opacity: 0.3
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border"
                      style={{
                        boxShadow: `0 10px 30px ${colors.secondaryDark}15`,
                        borderColor: colors.lightBg
                      }}
                    >
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center lg:text-left" style={{ color: step.color }}>
                        {step.title}
                      </h2>
                      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-center lg:text-left" style={{ color: colors.accent }}>
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 justify-center lg:justify-start">
                            <CheckCircle size={14}  style={{ color: colors.primary }} />
                            <span className="text-xs sm:text-sm" style={{ color: colors.secondary }}>{detail}</span>
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

      {/* Features Grid - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 lg:mb-4 px-4" style={{ color: colors.secondaryDark }}>
              Une plateforme conçue pour vous
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" style={{ color: colors.accent }}>
              Des fonctionnalités pensées pour simplifier votre expérience d'investissement
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 rounded-xl text-center transition-all"
                style={{
                  backgroundColor: colors.lightBg,
                  border: `1px solid ${colors.primary}20`
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{
                    backgroundColor: 'white',
                    color: colors.primary,
                    boxShadow: `0 5px 15px ${colors.primary}30`
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: colors.secondaryDark }}>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.accent }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Teaser - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden mx-4 sm:mx-6"
            style={{
              background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)`,
            }}
          >
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#F5C505] rounded-full blur-2xl sm:blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#F5C505] rounded-full blur-2xl sm:blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
                Des questions ?
              </h2>
              <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-4" style={{ color: colors.lightBg }}>
                Consultez notre FAQ ou contactez notre équipe pour plus d'informations
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/faq" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
                    style={{
                      background: colors.primary,
                      color: colors.secondaryDark,
                      border: 'none'
                    }}
                  >
                    Voir la FAQ
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    style={{
                      borderColor: colors.lightBg,
                      color: colors.lightBg
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