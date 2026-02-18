'use client'

import { motion } from 'framer-motion'
import { UserCheck, Search, TrendingUp, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

interface FonctionnementStepProps {
  onNext: () => void
  onPrev: () => void
}

export default function FonctionnementStep({ onNext, onPrev }: FonctionnementStepProps) {
  const steps = [
    {
      icon: <UserCheck size={32} />,
      title: '1. Inscription',
      description: 'Créez votre compte avec une pièce d\'identité officielle',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Search size={32} />,
      title: '2. Choix des projets',
      description: 'Parcourez et sélectionnez les projets qui vous correspondent',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <TrendingUp size={32} />,
      title: '3. Investissement',
      description: 'Investissez à partir de 500 FCFA et suivez votre impact',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <CheckCircle size={32} />,
      title: '4. Suivi et retours',
      description: 'Recevez des rapports réguliers sur l\'avancement des projets',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Comment ça fonctionne ?
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Un processus simple et transparent en 4 étapes
      </p>

      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Retour
        </Button>
        <Button onClick={onNext}>
          Nos engagements
        </Button>
      </div>
    </div>
  )
}