// app/auth/forgot-password/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    Mail,
    Phone,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    Send,
    Smartphone,
    MessageSquare
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

type ResetMethod = 'email' | 'phone'

export default function ForgotPasswordPage() {
    const [method, setMethod] = useState<ResetMethod>('email')
    const [contactInfo, setContactInfo] = useState('')
    const [step, setStep] = useState(1) // 1: choix méthode, 2: code envoyé, 3: code vérifié
    const [code, setCode] = useState(['', '', '', '', '', ''])
    const [isLoading, setIsLoading] = useState(false)

    const handleSendCode = async () => {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep(2)
    }

    const handleVerifyCode = async () => {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep(3)
    }

    const handleCodeChange = (index: number, value: string) => {
        if (value.length > 1) return
        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value && index < 5) {
            const nextInput = document.getElementById(`code-${index + 1}`)
            nextInput?.focus()
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border"
            style={{ borderColor: `${colors.primary}20` }}
        >
            {/* Logo */}
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
                <Link href="/" className="inline-block">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                            <Image
                                src="/images/logot.png"
                                alt="OGIAES"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-base sm:text-lg md:text-xl" style={{ color: colors.secondaryDark }}>OGIAES</span>
                    </div>
                </Link>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4" style={{ color: colors.secondaryDark }}>
                    Mot de passe oublié ?
                </h1>
                <p className="text-xs sm:text-sm mt-1" style={{ color: colors.accent }}>
                    {step === 1 && "Choisissez comment recevoir le code de récupération"}
                    {step === 2 && `Code envoyé à ${method === 'email' ? contactInfo : contactInfo.replace(/(\d{2})(?=\d)/g, '$1 ')}`}
                    {step === 3 && "Code vérifié avec succès"}
                </p>
            </div>

            {/* Étape 1 : Choix de la méthode */}
            {step === 1 && (
                <div className="space-y-4 sm:space-y-5">
                    {/* Choix de la méthode */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <button
                            onClick={() => setMethod('email')}
                            className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${method === 'email'
                                    ? 'border-primary bg-opacity-10'
                                    : 'hover:border-opacity-50'
                                }`}
                            style={{
                                borderColor: method === 'email' ? colors.primary : `${colors.primary}20`,
                                backgroundColor: method === 'email' ? `${colors.primary}10` : 'transparent'
                            }}
                        >
                            <Mail className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 ${method === 'email' ? 'text-primary' : ''
                                }`} style={{ color: method === 'email' ? colors.primary : colors.accent }} />
                            <span className={`text-xs sm:text-sm font-medium ${method === 'email' ? 'text-primaryDark' : ''
                                }`} style={{ color: method === 'email' ? colors.secondaryDark : colors.accent }}>
                                Email
                            </span>
                        </button>

                        <button
                            onClick={() => setMethod('phone')}
                            className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${method === 'phone'
                                    ? 'border-primary bg-opacity-10'
                                    : 'hover:border-opacity-50'
                                }`}
                            style={{
                                borderColor: method === 'phone' ? colors.primary : `${colors.primary}20`,
                                backgroundColor: method === 'phone' ? `${colors.primary}10` : 'transparent'
                            }}
                        >
                            <Phone className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 ${method === 'phone' ? 'text-primary' : ''
                                }`} style={{ color: method === 'phone' ? colors.primary : colors.accent }} />
                            <span className={`text-xs sm:text-sm font-medium ${method === 'phone' ? 'text-primaryDark' : ''
                                }`} style={{ color: method === 'phone' ? colors.secondaryDark : colors.accent }}>
                                Téléphone
                            </span>
                        </button>
                    </div>

                    {/* Champ de saisie */}
                    <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                            {method === 'email' ? 'Adresse email' : 'Numéro de téléphone'}
                        </label>
                        <div className="relative">
                            {method === 'email' ? (
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                            ) : (
                                <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                            )}
                            <input
                                type={method === 'email' ? 'email' : 'tel'}
                                value={contactInfo}
                                onChange={(e) => setContactInfo(e.target.value)}
                                placeholder={method === 'email'
                                    ? 'exemple@email.com'
                                    : '+226 XX XX XX XX'
                                }
                                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                                style={{
                                    borderColor: `${colors.primary}20`,
                                    color: colors.secondaryDark,
                                    '--tw-ring-color': colors.primary
                                } as any}
                            />
                        </div>
                        <p className="text-[10px] sm:text-xs mt-1 sm:mt-2" style={{ color: colors.accent }}>
                            {method === 'email'
                                ? 'Vous recevrez un code de vérification par email'
                                : 'Vous recevrez un code de vérification par SMS'
                            }
                        </p>
                    </div>

                    {/* Bouton d'envoi */}
                    <Button
                        onClick={handleSendCode}
                        disabled={!contactInfo || isLoading}
                        className="w-full text-sm sm:text-base py-2 sm:py-3"
                        style={{ background: colors.primary, color: colors.secondaryDark }}
                        size="lg"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#03045F] border-t-transparent rounded-full animate-spin mr-2" />
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                Envoyer le code
                            </>
                        )}
                    </Button>
                </div>
            )}

            {/* Étape 2 : Saisie du code */}
            {step === 2 && (
                <div className="space-y-4 sm:space-y-5">
                    <div className="text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                            style={{ backgroundColor: colors.lightBg }}>
                            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: colors.primary }} />
                        </div>
                        <p className="text-xs sm:text-sm mb-1" style={{ color: colors.accent }}>
                            Entrez le code à 6 chiffres que nous avons envoyé
                        </p>
                        <p className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>
                            {method === 'email' ? contactInfo : contactInfo.replace(/(\d{2})(?=\d)/g, '$1 ')}
                        </p>
                    </div>

                    {/* Code inputs */}
                    <div className="flex justify-center space-x-1 sm:space-x-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`code-${index}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center text-base sm:text-lg md:text-xl font-bold border rounded-lg focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: `${colors.primary}20`,
                                    color: colors.secondaryDark,
                                    '--tw-ring-color': colors.primary
                                } as any}
                            />
                        ))}
                    </div>

                    {/* Bouton de vérification */}
                    <Button
                        onClick={handleVerifyCode}
                        disabled={code.some(d => !d) || isLoading}
                        className="w-full text-sm sm:text-base py-2 sm:py-3"
                        style={{ background: colors.primary, color: colors.secondaryDark }}
                        size="lg"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#03045F] border-t-transparent rounded-full animate-spin mr-2" />
                                Vérification...
                            </>
                        ) : (
                            <>
                                <CheckCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                Vérifier le code
                            </>
                        )}
                    </Button>

                    {/* Renvoyer le code */}
                    <div className="text-center">
                        <button
                            onClick={handleSendCode}
                            className="text-xs sm:text-sm transition-colors hover:opacity-80"
                            style={{ color: colors.primary }}
                        >
                            Renvoyer le code
                        </button>
                    </div>
                </div>
            )}

            {/* Étape 3 : Succès */}
            {step === 3 && (
                <div className="text-center space-y-4 sm:space-y-5">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto"
                        style={{ backgroundColor: colors.primary }}
                    >
                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: colors.secondaryDark }} />
                    </motion.div>

                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
                            Code vérifié !
                        </h3>
                        <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>
                            Vous pouvez maintenant réinitialiser votre mot de passe
                        </p>
                    </div>

                    <Link href="/auth/reset-password">
                        <Button
                            className="w-full text-sm sm:text-base py-2 sm:py-3"
                            style={{ background: colors.primary, color: colors.secondaryDark }}
                            size="lg"
                        >
                            Réinitialiser le mot de passe
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                    </Link>
                </div>
            )}

            {/* Lien retour */}
            <div className="text-center mt-4 sm:mt-5">
                <Link
                    href="/auth/login"
                    className="inline-flex items-center text-xs sm:text-sm transition-colors hover:opacity-80"
                    style={{ color: colors.accent }}
                >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Retour à la connexion
                </Link>
            </div>
        </motion.div>
    )
}