// app/auth/register/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Calendar,
  Fingerprint,
  ArrowRight,
  Check,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

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

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    country: '',
    city: '',
    address: '',
    password: '',
    confirmPassword: '',
    idNumber: '',
    acceptTerms: false
  })

  const countries = ['Burkina Faso', 'Mali', 'Niger']

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen py-8 sm:py-10 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-5 sm:mb-6 md:mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/images/logot.png"
                  alt="OGIAES"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: colors.secondaryDark }}>OGIAES</span>
            </div>
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4" style={{ color: colors.secondaryDark }}>
            Créer votre compte citoyen
          </h1>
          <p className="text-xs sm:text-sm mt-1" style={{ color: colors.accent }}>
            Rejoignez la communauté des investisseurs de l'AES
          </p>
        </div>

        {/* Progress Steps - Responsive */}
        <div className="flex justify-center mb-5 sm:mb-6 md:mb-8 px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <motion.div
                animate={{
                  backgroundColor: i <= step ? colors.primary : colors.lightBg,
                  scale: i === step ? 1.1 : 1
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm md:text-base"
                style={{ color: i <= step ? colors.secondaryDark : colors.accent }}
              >
                {i < step ? <Check size={14} className="sm:size-16 md:size-18" /> : i}
              </motion.div>
              {i < 3 && (
                <div
                  className="w-12 sm:w-16 md:w-20 h-1 mx-1 sm:mx-2"
                  style={{ backgroundColor: i < step ? colors.primary : colors.lightBg }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border"
            style={{ borderColor: `${colors.primary}20` }}
          >
            {step === 1 && (
              <div className="space-y-4 sm:space-y-5">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5" style={{ color: colors.secondaryDark }}>
                  Informations personnelles
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                        placeholder="Amadou"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Nom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                        placeholder="Diallo"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="amadou.diallo@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                        placeholder="+226 XX XX XX XX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Date de naissance
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                        style={{
                          borderColor: `${colors.primary}20`,
                          color: colors.secondaryDark,
                          '--tw-ring-color': colors.primary
                        } as any}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 sm:space-y-5">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5" style={{ color: colors.secondaryDark }}>
                  Adresse et localisation
                </h2>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Pays
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                    <select
                      value={formData.country}
                      onChange={(e) => updateFormData('country', e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      required
                    >
                      <option value="">Sélectionnez votre pays</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Ville
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="Ouagadougou"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="Zone du Bois, 120"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Numéro de pièce d'identité
                  </label>
                  <div className="relative">
                    <Fingerprint className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                    <input
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => updateFormData('idNumber', e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="CNIB, Passeport, etc."
                      required
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs mt-1" style={{ color: colors.accent }}>
                    L'identification officielle est requise pour la sécurité de tous
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Document d'identité (scan ou photo)
                  </label>
                  <div className="border-2 border-dashed rounded-lg p-4 sm:p-5 text-center hover:border-opacity-100 transition-colors cursor-pointer"
                    style={{ borderColor: `${colors.primary}40` }}>
                    <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2" style={{ color: colors.accent }} />
                    <p className="text-xs sm:text-sm" style={{ color: colors.secondaryDark }}>
                      Cliquez pour télécharger votre document
                    </p>
                    <p className="text-[10px] sm:text-xs mt-1" style={{ color: colors.accent }}>
                      PNG, JPG, PDF (max 5 Mo)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 sm:space-y-5">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5" style={{ color: colors.secondaryDark }}>
                  Sécurité et validation
                </h2>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-9 sm:pr-12 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                      style={{ color: colors.accent }}
                    >
                      {showPassword ? <EyeOff size={16} className="sm:size-18" /> : <Eye size={16} className="sm:size-18" />}
                    </button>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 mt-2">
                    <div className="w-1/4 h-1 rounded" style={{ backgroundColor: colors.primary }} />
                    <div className="w-1/4 h-1 rounded" style={{ backgroundColor: colors.primary }} />
                    <div className="w-1/4 h-1 rounded" style={{ backgroundColor: colors.lightBg }} />
                    <div className="w-1/4 h-1 rounded" style={{ backgroundColor: colors.lightBg }} />
                    <span className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>Force: Moyen</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1" style={{ color: colors.secondaryDark }}>
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-9 sm:pr-12 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                      style={{
                        borderColor: `${colors.primary}20`,
                        color: colors.secondaryDark,
                        '--tw-ring-color': colors.primary
                      } as any}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                      style={{ color: colors.accent }}
                    >
                      {showConfirmPassword ? <EyeOff size={16} className="sm:size-18" /> : <Eye size={16} className="sm:size-18" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="flex items-start space-x-2 sm:space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => updateFormData('acceptTerms', e.target.checked)}
                      className="mt-0.5 w-3 h-3 sm:w-4 sm:h-4 rounded focus:ring-2"
                      style={{
                        color: colors.primary,
                        borderColor: `${colors.primary}40`
                      } as any}
                      required
                    />
                    <span className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>
                      J'accepte les{' '}
                      <Link href="/terms" className="transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/privacy" className="transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-start space-x-2 sm:space-x-3">
                    <input
                      type="checkbox"
                      className="mt-0.5 w-3 h-3 sm:w-4 sm:h-4 rounded focus:ring-2"
                      style={{
                        color: colors.primary,
                        borderColor: `${colors.primary}40`
                      } as any}
                    />
                    <span className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>
                      Je souhaite recevoir les actualités des projets et opportunités d'investissement
                    </span>
                  </label>
                </div>

                <div className="p-3 sm:p-4 rounded-lg" style={{ backgroundColor: colors.lightBg }}>
                  <p className="text-[10px] sm:text-xs" style={{ color: colors.secondaryDark }}>
                    <strong>🔒 Engagement de sécurité :</strong> Vos données sont protégées et utilisées uniquement dans le cadre de votre participation à OGIAES, conformément à la réglementation en vigueur dans l'espace AES.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-5 sm:mt-6 pt-4 sm:pt-5 border-t" style={{ borderColor: `${colors.primary}20` }}>
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-5"
                  style={{ borderColor: colors.secondaryDark, color: colors.secondaryDark }}
                >
                  Retour
                </Button>
              )}

              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  className="ml-auto text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-5"
                  style={{ background: colors.primary, color: colors.secondaryDark }}
                >
                  Continuer
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="ml-auto group text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-5"
                  style={{ background: colors.primary, color: colors.secondaryDark }}
                >
                  Créer mon compte
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Login Link */}
        <p className="text-center text-xs sm:text-sm mt-4 sm:mt-5" style={{ color: colors.accent }}>
          Déjà inscrit ?{' '}
          <Link
            href="/auth/login"
            className="font-semibold transition-colors hover:opacity-80"
            style={{ color: colors.primary }}
          >
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  )
}