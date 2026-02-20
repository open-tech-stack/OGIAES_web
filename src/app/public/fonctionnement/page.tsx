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
      color: 'from-blue-500 to-blue-600'
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
      color: 'from-green-500 to-green-600'
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
      color: 'from-purple-500 to-purple-600'
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
      color: 'from-orange-500 to-orange-600'
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
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
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
                <TrendingUp className="w-10 h-10 text-green-600" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comment ça fonctionne ?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez comment devenir acteur du développement économique de l'AES 
                en quelques étapes simples
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/auth/register">
                  <Button size="lg">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="#steps">
                  <Button variant="outline" size="lg">
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
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-24 bottom-0 w-0.5 bg-linear-to-b from-green-300 to-transparent hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number & Icon */}
                  <div className="shrink-0">
                    <div className={`w-24 h-24 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-600 shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Une plateforme conçue pour vous
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
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
                className="bg-green-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20">
        <Container>
          <div className="bg-linear-to-br from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Des questions ?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Consultez notre FAQ ou contactez notre équipe pour plus d'informations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/faq">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Voir la FAQ
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}