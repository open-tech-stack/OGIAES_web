'use client'

import { motion } from 'framer-motion'
import {
    Shield,
    Users,
    TrendingUp,
    Smartphone,
    CheckCircle,
    ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'
import SlideIn from '@/components/animations/SlideIn'
import Image from 'next/image'

export default function Home() {
    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Investissement Sécurisé",
            description: "Des règles strictes garantissant la transparence et la protection de vos investissements"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Participation Citoyenne",
            description: "Devenez acteur direct du développement économique de l'AES"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Projets Productifs",
            description: "Financement exclusif de projets contribuant au développement réel"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
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
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#F5F0E6] to-white">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

                <div className="container mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="left">
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#2C5F7C' }}>
                                    OGIAES
                                    <span className="block text-4xl lg:text-5xl mt-2" style={{ color: '#D4AF37' }}>
                                        Votre Épargne, Notre Avenir
                                    </span>
                                </h1>

                                <p className="text-xl max-w-2xl" style={{ color: '#4A7C9C' }}>
                                    Rejoignez le premier mécanisme collectif de financement citoyen
                                    de l'espace AES. Investissez dès 500 FCFA par mois et participez
                                    directement à la création de richesses.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link href="/onboarding">
                                        <Button size="lg" className="group">
                                            Commencer l'aventure
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link href="#fonctionnement">
                                        <Button variant="outline" size="lg">
                                            En savoir plus
                                        </Button>
                                    </Link>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="text-2xl font-bold" style={{ color: '#D4AF37' }}>{stat.value}</div>
                                            <div className="text-sm" style={{ color: '#4A7C9C' }}>{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#D4AF37' }} />
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
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
                                        className="rounded-lg mx-auto"
                                    />
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#4A7C9C' }}>
                        <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: '#D4AF37' }} />
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SlideIn>
                        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#2C5F7C' }}>
                            Pourquoi Choisir OGIAES ?
                        </h2>
                        <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: '#4A7C9C' }}>
                            Une plateforme conçue pour et par les citoyens de l'AES,
                            alliant transparence, sécurité et accessibilité
                        </p>
                    </SlideIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <SlideIn key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                                    style={{ boxShadow: '0 4px 20px rgba(44, 95, 124, 0.08)' }}
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: '#F5F0E6', color: '#D4AF37' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#2C5F7C' }}>{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            </SlideIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: '#2C5F7C' }}>
                <div className="container mx-auto px-4 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Prêt à Devenir Acteur du Développement ?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F5F0E6' }}>
                            Rejoignez des milliers de citoyens qui participent déjà
                            à la construction de l'économie de l'AES
                        </p>
                        <Link href="/onboarding">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="hover:bg-opacity-90"
                                style={{
                                    backgroundColor: '#D4AF37',
                                    color: '#2C5F7C',
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