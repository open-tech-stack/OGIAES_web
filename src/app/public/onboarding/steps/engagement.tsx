'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface EngagementStepProps {
  onPrev: () => void
}

export default function EngagementStep({ onPrev }: EngagementStepProps) {
  const engagements = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Protection des investisseurs',
      description: 'Règles strictes garantissant la sécurité de vos fonds'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Sécurité des données',
      description: 'Vos informations personnelles sont protégées et confidentielles'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparence totale',
      description: 'Suivi en temps réel de l\'utilisation des fonds'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Engagement long terme',
      description: 'Accompagnement tout au long de votre parcours d\'investisseur'
    }
  ]

  const guarantees = [
    'Identification officielle obligatoire',
    'Traçabilité complète des transactions',
    'Fonds exclusivement dédiés à des projets productifs',
    'Audits réguliers et indépendants',
    'Rapports d\'impact trimestriels',
    'Support client dédié'
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Nos Engagements
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Pour votre sécurité et votre tranquillité d'esprit
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {engagements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card hover className="h-full">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mb-8 bg-green-50 border-green-100">
        <h3 className="font-semibold text-green-800 mb-3">
          Garanties supplémentaires
        </h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="flex items-center space-x-2"
            >
              <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{guarantee}</span>
            </motion.div>
          ))}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Retour
        </Button>
        <Link href="/auth/register">
          <Button size="lg" className="group">
            Créer mon compte
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}