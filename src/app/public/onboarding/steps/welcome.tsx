'use client'

import { motion } from 'framer-motion'
import { Globe, Check, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface WelcomeStepProps {
  onNext: () => void
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  const features = [
    'Investissement minimum de 500 FCFA',
    '100% transparent et sécurisé',
    'Projets productifs certifiés',
    'Suivi en temps réel'
  ]

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="flex justify-center mb-6"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
          <Globe size={48} className="text-white" />
        </div>
      </motion.div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Bienvenue sur OGIAES
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        La plateforme d'investissement citoyen de l'AES
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card 
              padding="sm"
              hover
              className="flex items-center space-x-2"
            >
              <Check size={18} className="text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </Card>
          </motion.div>
        ))}
      </div>

      <Button size="lg" onClick={onNext} className="group">
        Découvrir le fonctionnement
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  )
}