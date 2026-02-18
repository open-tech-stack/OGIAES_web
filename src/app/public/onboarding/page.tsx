'use client'

import { JSX, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Smartphone,
  Check,
  ArrowRight,
  ArrowLeft,
  Fingerprint,
  Globe,
  Lock,
  Clock
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

// Définition des types pour éviter les erreurs "possibly undefined"
interface Step1 {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  features: string[];
}

interface Step2 {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}

interface Step3 {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  guarantees: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}

interface Step4 {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  cta: string;
  secondary: string;
}

type Step = Step1 | Step2 | Step3 | Step4;

export default function OnboardingPage() {
  const [step, setStep] = useState<number>(1)
  const totalSteps = 4

  const steps: Step[] = [
    {
      title: 'Bienvenue sur OGIAES',
      subtitle: "La plateforme d'investissement citoyen de l'AES",
      icon: <Globe className="w-16 h-16 text-green-600" />,
      features: [
        'Investissement minimum de 500 FCFA',
        '100% transparent et sécurisé',
        'Projets productifs certifiés',
        'Suivi en temps réel'
      ]
    },
    {
      title: 'Comment ça fonctionne ?',
      subtitle: 'Un processus simple en 3 étapes',
      icon: <TrendingUp className="w-16 h-16 text-green-600" />,
      steps: [
        {
          number: '01',
          title: 'Inscription',
          description: "Créez votre compte avec une pièce d'identité officielle"
        },
        {
          number: '02',
          title: 'Choix des projets',
          description: 'Sélectionnez les projets qui vous correspondent'
        },
        {
          number: '03',
          title: 'Investissement',
          description: 'Investissez à partir de 500 FCFA et suivez votre impact'
        }
      ]
    },
    {
      title: 'Sécurité et Transparence',
      subtitle: 'Vos fonds sont protégés par des mesures strictes',
      icon: <Shield className="w-16 h-16 text-green-600" />,
      guarantees: [
        {
          icon: <Lock />,
          title: 'Identification officielle',
          description: "Vérification d'identité obligatoire pour tous les membres"
        },
        {
          icon: <Fingerprint />,
          title: 'Traçabilité complète',
          description: 'Toutes les transactions sont enregistrées et vérifiables'
        },
        {
          icon: <Clock />,
          title: 'Engagement citoyen',
          description: 'Les fonds sont exclusivement dédiés à des projets productifs'
        }
      ]
    },
    {
      title: 'Prêt à commencer ?',
      subtitle: 'Rejoignez la communauté des investisseurs citoyens',
      icon: <Users className="w-16 h-16 text-green-600" />,
      cta: 'Créer mon compte',
      secondary: "J'ai déjà un compte"
    }
  ]

  const nextStep = (): void => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = (): void => {
    if (step > 1) setStep(step - 1)
  }

  // Fonction pour vérifier le type de step
  const isStep1 = (s: Step): s is Step1 => 'features' in s;
  const isStep2 = (s: Step): s is Step2 => 'steps' in s;
  const isStep3 = (s: Step): s is Step3 => 'guarantees' in s;
  const isStep4 = (s: Step): s is Step4 => 'cta' in s;

  const currentStep = steps[step - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-r from-green-500 to-green-600"
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Step Indicator */}
          <div className="flex justify-center mb-12">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: i + 1 === step ? 1 : 0.8,
                    backgroundColor: i + 1 <= step ? '#16a34a' : '#e5e7eb'
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  {i + 1 < step ? <Check size={18} /> : i + 1}
                </motion.div>
                {i < totalSteps - 1 && (
                  <div className={`w-20 h-1 mx-2 ${
                    i + 1 < step ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {step === 1 && isStep1(currentStep) && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="flex justify-center mb-6"
                  >
                    {currentStep.icon}
                  </motion.div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {currentStep.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    {currentStep.subtitle}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {currentStep.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg"
                      >
                        <Check size={18} className="text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && isStep2(currentStep) && (
                <div>
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="flex justify-center mb-4"
                    >
                      {currentStep.icon}
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentStep.title}
                    </h2>
                    <p className="text-gray-600">{currentStep.subtitle}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {currentStep.steps.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-lg">
                          {item.number}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && isStep3(currentStep) && (
                <div>
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="flex justify-center mb-4"
                    >
                      {currentStep.icon}
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentStep.title}
                    </h2>
                    <p className="text-gray-600">{currentStep.subtitle}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {currentStep.guarantees.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center p-6 rounded-xl bg-gray-50"
                      >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && isStep4(currentStep) && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="flex justify-center mb-6"
                  >
                    {currentStep.icon}
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentStep.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {currentStep.subtitle}
                  </p>
                  
                  <div className="space-y-4 max-w-sm mx-auto">
                    <Link href="/auth/register">
                      <Button size="lg" className="w-full">
                        {currentStep.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    
                    <Link href="/auth/login">
                      <Button variant="ghost" size="lg" className="w-full">
                        {currentStep.secondary}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Précédent
              </Button>
            )}
            
            {step < totalSteps && (
              <Button onClick={nextStep} className="ml-auto">
                Suivant
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}