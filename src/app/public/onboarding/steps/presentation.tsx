'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Shield, Smartphone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface PresentationStepProps {
  onNext: () => void
  onPrev: () => void
}

export default function PresentationStep({ onNext, onPrev }: PresentationStepProps) {
  const values = [
    {
      icon: <TrendingUp size={24} />,
      title: 'Développement économique',
      description: 'Financement exclusif de projets productifs pour l\'AES'
    },
    {
      icon: <Users size={24} />,
      title: 'Participation citoyenne',
      description: 'Chaque citoyen devient acteur du développement'
    },
    {
      icon: <Shield size={24} />,
      title: 'Sécurité et transparence',
      description: 'Identification officielle et traçabilité complète'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Accessible à tous',
      description: 'Investissez depuis votre smartphone, où que vous soyez'
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Notre Vision
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Une plateforme conçue pour et par les citoyens de l'AES
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card hover className="h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Retour
        </Button>
        <Button onClick={onNext}>
          Comment ça marche ?
        </Button>
      </div>
    </div>
  )
}