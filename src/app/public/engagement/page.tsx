'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Eye, 
  Heart, 
  Users,
  TrendingUp,
  Scale,
  Leaf,
  CheckCircle,
  Award,
  Clock,
  FileCheck
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'

export default function EngagementsPage() {
  const engagements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protection des investisseurs',
      description: 'Nous mettons en place des règles strictes pour garantir la sécurité de vos investissements et la protection de vos données personnelles.',
      points: [
        'Identification obligatoire KYC',
        'Fonds séquestres sécurisés',
        'Assurance des dépôts',
        'Conformité réglementaire'
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparence totale',
      description: 'Chaque franc investi est tracé et son utilisation est rendue publique à travers des rapports détaillés.',
      points: [
        'Rapports mensuels détaillés',
        'Audits indépendants réguliers',
        'Suivi en temps réel',
        'Publication des indicateurs'
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Impact social positif',
      description: 'Nous sélectionnons uniquement des projets ayant un impact réel sur le développement économique et social des communautés.',
      points: [
        'Création d\'emplois locaux',
        'Développement durable',
        'Transfert de compétences',
        'Amélioration des conditions de vie'
      ]
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Équité et inclusion',
      description: 'L\'investissement est ouvert à tous les citoyens sans distinction, avec un montant minimum accessible.',
      points: [
        'Minimum 500 FCFA',
        'Accessible à tous',
        'Égalité des chances',
        'Accompagnement personnalisé'
      ]
    }
  ]

  const guarantees = [
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Sécurité des données',
      description: 'Vos informations personnelles sont cryptées et protégées selon les normes les plus strictes.'
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Certification des projets',
      description: 'Chaque projet est rigoureusement évalué par un comité d\'experts indépendants.'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Suivi permanent',
      description: 'Une équipe dédiée assure le suivi de chaque projet et vous tient informé.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Agrément officiel',
      description: 'Plateforme agréée par les autorités de régulation de l\'espace AES.'
    }
  ]

  const stats = [
    { value: '500+', label: 'Projets financés' },
    { value: '50 000+', label: 'Investisseurs actifs' },
    { value: '98%', label: 'Taux de satisfaction' },
    { value: '0', label: 'Incident de sécurité' }
  ]

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
                <Heart className="w-10 h-10 text-green-600" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos Engagements
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez les principes qui guident notre action au service du développement de l'AES
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Engagements */}
      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {engagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-green-700 p-8 text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        {engagement.icon}
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{engagement.title}</h2>
                      <p className="text-green-100">{engagement.description}</p>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Nos actions concrètes :
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {engagement.points.map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantees Grid */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Nos garanties
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Des mesures concrètes pour votre tranquillité d'esprit
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                      {guarantee.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guarantee.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <Container>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez l'aventure citoyenne
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Ensemble, construisons l'avenir économique de l'AES
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth/register">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Créer mon compte
                </Button>
              </Link>
              <Link href="/projets">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Découvrir les projets
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}