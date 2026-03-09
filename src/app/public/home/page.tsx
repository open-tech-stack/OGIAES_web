'use client'

import { motion } from 'framer-motion'
import {
    Shield,
    Users,
    TrendingUp,
    Smartphone,
    ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'
import SlideIn from '@/components/animations/SlideIn'
import Image from 'next/image'

export default function Home() {
    // Vos nouvelles couleurs
    const colors = {
        primary: '#F5C505',        // Jaune principal
        primaryDark: '#F3BB00',     // Jaune foncé
        secondary: '#1A05A2',       // Bleu principal
        secondaryDark: '#03045F',   // Bleu très foncé
        accent: '#340DA4',          // Bleu violet
        accentDark: '#42009E',      // Violet
        goldLight: '#E1A624',       // Or clair
        lightBg: '#F8F9FF'
    }

    const features = [
        {
            icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Investissement Sécurisé",
            description: "Des règles strictes garantissant la transparence et la protection de vos investissements"
        },
        {
            icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Participation Citoyenne",
            description: "Devenez acteur direct du développement économique de l'AES"
        },
        {
            icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Projets Productifs",
            description: "Financement exclusif de projets contribuant au développement réel"
        },
        {
            icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Accessible à Tous",
            description: "Investissez à partir de 500 FCFA par mois, depuis votre smartphone"
        }
    ]

    const stats = [
        { value: "500 FCFA", label: "Investissement minimum" },
        { value: "100%", label: "Transparent" },
        { value: "24/7", label: "Accessible" },
        { value: "AES", label: "Espace commun" }
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Responsive */}
            <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#F8F9FF] to-white">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <FadeIn direction="left">
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                    <span style={{ color: colors.secondary }}>OGIAES</span>
                                    <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2" style={{ color: colors.primary }}>
                                        Votre Épargne, Notre Avenir
                                    </span>
                                </h1>

                                <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0" style={{ color: colors.accent }}>
                                    Rejoignez le premier mécanisme collectif de financement citoyen
                                    de l'espace AES. Investissez dès 500 FCFA par mois et participez
                                    directement à la création de richesses.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                                    <Link href="/onboarding" className="w-full sm:w-auto">
                                        <Button size="lg" className="group w-full sm:w-auto">
                                            Commencer l'aventure
                                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link href="#fonctionnement" className="w-full sm:w-auto">
                                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                            En savoir plus
                                        </Button>
                                    </Link>
                                </div>

                                {/* Stats - Responsive Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 lg:pt-12">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>{stat.value}</div>
                                            <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right">
                            <div className="relative max-w-md mx-auto lg:max-w-none">
                                <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.primary }} />
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="relative"
                                >
                                    <Image
                                        src="/images/homeHeader2.jpg"
                                        width={600}
                                        height={600}
                                        alt='Investissment'
                                        className="rounded-lg mx-auto w-full h-auto max-w-md lg:max-w-full"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll indicator - Hidden on mobile */}
                <motion.div
                    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center" style={{ borderColor: colors.accent }}>
                        <div className="w-1 h-2 sm:h-3 rounded-full mt-2" style={{ backgroundColor: colors.primary }} />
                    </div>
                </motion.div>
            </section>

            {/* Features Section - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideIn>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 lg:mb-4" style={{ color: colors.secondary }}>
                            Pourquoi Choisir OGIAES ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4" style={{ color: colors.accent }}>
                            Une plateforme conçue pour et par les citoyens de l'AES,
                            alliant transparence, sécurité et accessibilité
                        </p>
                    </SlideIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <SlideIn key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all h-full"
                                    style={{ boxShadow: `0 4px 20px ${colors.secondary}15` }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0"
                                        style={{ backgroundColor: '#F8F9FF', color: colors.primary }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center lg:text-left" style={{ color: colors.secondary }}>{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 text-center lg:text-left">{feature.description}</p>
                                </motion.div>
                            </SlideIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.secondary }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 px-4">
                            Prêt à Devenir Acteur du Développement ?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: '#F8F9FF' }}>
                            Rejoignez des milliers de citoyens qui participent déjà
                            à la construction de l'économie de l'AES
                        </p>
                        <Link href="/onboarding" className="block sm:inline-block">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="hover:bg-opacity-90 w-full sm:w-auto"
                                style={{
                                    background: colors.primary,
                                    color: colors.secondaryDark,
                                    border: 'none'
                                }}
                            >
                                Commencer Maintenant
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}