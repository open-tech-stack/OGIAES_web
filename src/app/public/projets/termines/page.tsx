'use client'

import { motion } from 'framer-motion'
import {
    MapPin,
    Calendar,
    Users,
    TrendingUp,
    Award,
    CheckCircle,
    Clock,
    Target,
    Heart,
    Star,
    Leaf,
    Sun,
    Factory,
    Laptop,
    Building2,
    GraduationCap,
    BarChart3
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'
import { JSX } from 'react'

// Types
interface CompletedProject {
    id: string
    title: string
    category: string
    categoryIcon: JSX.Element
    location: string
    description: string
    totalFunded: number
    totalInvestors: number
    completionDate: string
    impact: {
        label: string
        value: string
        icon: JSX.Element
    }[]
    testimonial?: {
        author: string
        role: string
        content: string
        avatar: string
    }
    roi: string
}

export default function ProjetsTerminesPage() {
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

    const categories = [
        { id: 'agriculture', label: 'Agriculture', icon: <Leaf size={16} />, color: colors.secondaryDark },
        { id: 'energie', label: 'Énergie', icon: <Sun size={16} />, color: colors.secondary },
        { id: 'industrie', label: 'Industrie', icon: <Factory size={16} />, color: colors.accent },
        { id: 'technologie', label: 'Tech', icon: <Laptop size={16} />, color: colors.accentDark },
        { id: 'infrastructure', label: 'Infra', icon: <Building2 size={16} />, color: colors.secondaryDark },
        { id: 'education', label: 'Éducation', icon: <GraduationCap size={16} />, color: colors.secondary }
    ]

    const completedProjects: CompletedProject[] = [
        {
            id: '1',
            title: 'Ferme Avicole de Kaya',
            category: 'agriculture',
            categoryIcon: <Leaf size={16} />,
            location: 'Kaya, Burkina Faso',
            description: 'Construction d\'une ferme avicole moderne avec capacité de 50 000 poulets par cycle, approvisionnant 20 marchés locaux.',
            totalFunded: 80000000,
            totalInvestors: 156,
            completionDate: '15 Décembre 2023',
            impact: [
                { label: 'Emplois créés', value: '80', icon: <Users size={16} /> },
                { label: 'Production/an', value: '300T', icon: <TrendingUp size={16} /> },
                { label: 'Marchés', value: '20', icon: <MapPin size={16} /> }
            ],
            testimonial: {
                author: 'Ibrahim Traoré',
                role: 'Porteur de projet',
                content: 'Grâce aux 156 investisseurs, nous avons pu construire cette ferme qui aujourd\'hui nourrit des milliers de familles.',
                avatar: 'IT'
            },
            roi: '18%'
        },
        {
            id: '2',
            title: 'Mini-réseau Solaire de Ziniaré',
            category: 'energie',
            categoryIcon: <Sun size={16} />,
            location: 'Ziniaré, Burkina Faso',
            description: 'Installation d\'un mini-réseau solaire électrifiant 500 foyers et 20 PME locales.',
            totalFunded: 120000000,
            totalInvestors: 234,
            completionDate: '10 Novembre 2023',
            impact: [
                { label: 'Foyers', value: '500', icon: <Users size={16} /> },
                { label: 'PME', value: '20', icon: <Building2 size={16} /> },
                { label: 'CO2 évité', value: '200T', icon: <Leaf size={16} /> }
            ],
            testimonial: {
                author: 'Aminata Diallo',
                role: 'Investisseure',
                content: 'Voir des villages entiers s\'éclairer grâce à mon investissement, c\'est une fierté incomparable.',
                avatar: 'AD'
            },
            roi: '14%'
        },
        {
            id: '3',
            title: 'Unité de Transformation de Mangues',
            category: 'industrie',
            categoryIcon: <Factory size={16} />,
            location: 'Bobo-Dioulasso, Burkina Faso',
            description: 'Unité de transformation de mangues en jus, purée et fruits séchés pour l\'exportation.',
            totalFunded: 95000000,
            totalInvestors: 189,
            completionDate: '5 Septembre 2023',
            impact: [
                { label: 'Emplois', value: '120', icon: <Users size={16} /> },
                { label: 'Tonnes/an', value: '500T', icon: <TrendingUp size={16} /> },
                { label: 'Export', value: '3 pays', icon: <Award size={16} /> }
            ],
            testimonial: {
                author: 'Mamadou Koné',
                role: 'Expert agro-industrie',
                content: 'Un projet exemplaire qui valorise nos produits locaux et crée de la richesse.',
                avatar: 'MK'
            },
            roi: '22%'
        },
        {
            id: '4',
            title: 'École Numérique de Ouagadougou',
            category: 'education',
            categoryIcon: <GraduationCap size={16} />,
            location: 'Ouagadougou, Burkina Faso',
            description: 'Création d\'un centre de formation aux métiers du numérique pour les jeunes.',
            totalFunded: 45000000,
            totalInvestors: 98,
            completionDate: '20 Août 2023',
            impact: [
                { label: 'Jeunes formés', value: '250', icon: <Users size={16} /> },
                { label: 'Taux insertion', value: '85%', icon: <TrendingUp size={16} /> },
                { label: 'Partenaires', value: '15', icon: <Building2 size={16} /> }
            ],
            roi: '16%'
        },
        {
            id: '5',
            title: 'Plateforme Logistique de Bamako',
            category: 'infrastructure',
            categoryIcon: <Building2 size={16} />,
            location: 'Bamako, Mali',
            description: 'Construction d\'une plateforme logistique pour faciliter le commerce transfrontalier.',
            totalFunded: 200000000,
            totalInvestors: 312,
            completionDate: '12 Juillet 2023',
            impact: [
                { label: 'Emplois', value: '200', icon: <Users size={16} /> },
                { label: 'Marchandises', value: '50K T', icon: <TrendingUp size={16} /> },
                { label: 'Entreprises', value: '45', icon: <Building2 size={16} /> }
            ],
            roi: '20%'
        },
        {
            id: '6',
            title: 'Startup Studio Agricole',
            category: 'technologie',
            categoryIcon: <Laptop size={16} />,
            location: 'Ouagadougou, Burkina Faso',
            description: 'Incubation de 15 startups développant des solutions tech pour l\'agriculture.',
            totalFunded: 60000000,
            totalInvestors: 145,
            completionDate: '3 Juin 2023',
            impact: [
                { label: 'Startups', value: '15', icon: <Laptop size={16} /> },
                { label: 'Emplois', value: '75', icon: <Users size={16} /> },
                { label: 'Apps', value: '12', icon: <Award size={16} /> }
            ],
            roi: '25%'
        }
    ]

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA'
    }

    // Stats globales
    const totalFunded = completedProjects.reduce((acc, p) => acc + p.totalFunded, 0)
    const totalInvestors = completedProjects.reduce((acc, p) => acc + p.totalInvestors, 0)
    const averageRoi = Math.round(completedProjects.reduce((acc, p) => acc + parseInt(p.roi), 0) / completedProjects.length)

    return (
        <div className="min-h-screen bg-[#F8F9FF]">
            {/* Hero Section avec stats - Harmonisé */}
            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-b from-[#F8F9FF] to-white">
                <Container>
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-4 sm:mb-6 mx-auto"
                                style={{
                                    backgroundColor: colors.lightBg,
                                    boxShadow: `0 10px 25px -5px ${colors.primary}30`
                                }}
                            >
                                <Award className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                                Projets terminés
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4" style={{ color: colors.accent }}>
                                Découvrez l'impact concret des investissements citoyens sur le développement de l'AES
                            </p>

                            {/* Stats globales - Responsive */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto mt-6 sm:mt-8 px-4">
                                <div className="text-center p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white shadow-sm">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>{completedProjects.length}</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Projets réalisés</div>
                                </div>
                                <div className="text-center p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white shadow-sm">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>{formatCurrency(totalFunded)}</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Investis au total</div>
                                </div>
                                <div className="text-center p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white shadow-sm">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>{averageRoi}%</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>ROI moyen</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Catégories - Responsive */}
            <section className="py-4 sm:py-6 lg:py-8 border-b bg-white sticky top-0 z-40" style={{ borderColor: `${colors.primary}20` }}>
                <Container>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
                        <span className="text-xs sm:text-sm font-medium mr-1 sm:mr-2" style={{ color: colors.secondaryDark }}>Filtrer par :</span>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center space-x-1 sm:space-x-2 hover:opacity-80"
                                style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}
                            >
                                <span className="scale-90 sm:scale-100">{category.icon}</span>
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Grille des projets terminés - Responsive */}
            <section className="py-8 sm:py-10 lg:py-12">
                <Container>
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6">
                        {completedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
                                    style={{ borderColor: `${colors.primary}20` }}>
                                    {/* Layout responsive: empilé sur mobile, grille sur desktop */}
                                    <div className="flex flex-col lg:grid lg:grid-cols-3">
                                        {/* Partie gauche - Infos principales */}
                                        <div className="p-4 sm:p-5 lg:p-6 text-white"
                                            style={{ background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)` }}>
                                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                                <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs font-semibold flex items-center space-x-1">
                                                    <span className="scale-90 sm:scale-100">{project.categoryIcon}</span>
                                                    <span className="capitalize text-white">{project.category}</span>
                                                </span>
                                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
                                            </div>

                                            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-white">{project.title}</h3>
                                            <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 flex items-center">
                                                <MapPin size={12} className="sm:size-14 mr-1" />
                                                {project.location}
                                            </p>

                                            <div className="space-y-2 sm:space-y-3">
                                                <div className="flex justify-between text-xs sm:text-sm">
                                                    <span className="text-white/70">Investissement total</span>
                                                    <span className="font-bold" style={{ color: colors.primary }}>{formatCurrency(project.totalFunded)}</span>
                                                </div>
                                                <div className="flex justify-between text-xs sm:text-sm">
                                                    <span className="text-white/70">Investisseurs</span>
                                                    <span className="font-bold" style={{ color: colors.primary }}>{project.totalInvestors}</span>
                                                </div>
                                                <div className="flex justify-between text-xs sm:text-sm">
                                                    <span className="text-white/70">ROI moyen</span>
                                                    <span className="font-bold" style={{ color: colors.primary }}>{project.roi}</span>
                                                </div>
                                                <div className="flex justify-between text-xs sm:text-sm">
                                                    <span className="text-white/70">Terminé le</span>
                                                    <span className="font-bold" style={{ color: colors.primary }}>{project.completionDate}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Partie milieu - Description et impact */}
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: colors.accent }}>
                                                {project.description}
                                            </p>

                                            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center" style={{ color: colors.secondaryDark }}>
                                                <Target size={14} className="sm:size-16 mr-1.5 sm:mr-2" style={{ color: colors.primary }} />
                                                Impact réalisé
                                            </h4>

                                            <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-3">
                                                {project.impact.map((item, idx) => (
                                                    <div key={idx} className="text-center p-1.5 sm:p-2 rounded-lg" style={{ backgroundColor: colors.lightBg }}>
                                                        <div className="mb-0.5 sm:mb-1" style={{ color: colors.primary }}>{item.icon}</div>
                                                        <div className="text-xs sm:text-sm font-bold" style={{ color: colors.secondaryDark }}>{item.value}</div>
                                                        <div className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>{item.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Partie droite - Témoignage */}
                                        <div className="p-4 sm:p-5 lg:p-6" style={{ backgroundColor: colors.lightBg }}>
                                            {project.testimonial && (
                                                <div className="h-full flex flex-col">
                                                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-2 sm:mb-3" style={{ color: colors.primary }} />
                                                    <p className="text-xs sm:text-sm italic mb-3 sm:mb-4" style={{ color: colors.accent }}>
                                                        "{project.testimonial.content}"
                                                    </p>
                                                    <div className="mt-auto flex items-center space-x-2 sm:space-x-3">
                                                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                                                            style={{ background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)` }}>
                                                            {project.testimonial.avatar}
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xs sm:text-sm" style={{ color: colors.secondaryDark }}>{project.testimonial.author}</div>
                                                            <div className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>{project.testimonial.role}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Section Statistiques globales - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.lightBg }}>
                <Container>
                    <FadeIn>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 px-4"
                            style={{ color: colors.secondaryDark }}>
                            Impact global de la communauté
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-4">
                        <div className="text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-sm">
                            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 sm:mb-3" style={{ color: colors.primary }} />
                            <div className="text-base sm:text-lg lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>{completedProjects.length}</div>
                            <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Projets réalisés</div>
                        </div>
                        <div className="text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-sm">
                            <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 sm:mb-3" style={{ color: colors.primary }} />
                            <div className="text-base sm:text-lg lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>{totalInvestors}</div>
                            <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Investisseurs uniques</div>
                        </div>
                        <div className="text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-sm">
                            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 sm:mb-3" style={{ color: colors.primary }} />
                            <div className="text-base sm:text-lg lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>{formatCurrency(totalFunded)}</div>
                            <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Investis au total</div>
                        </div>
                        <div className="text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-sm">
                            <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-2 sm:mb-3" style={{ color: colors.primary }} />
                            <div className="text-base sm:text-lg lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>{averageRoi}%</div>
                            <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>ROI moyen</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA - Proposer un projet - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <Container>
                    <div className="text-center max-w-2xl mx-auto px-4">
                        <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4" style={{ color: colors.primary }} />
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3" style={{ color: colors.secondaryDark }}>
                            Vous voulez faire partie de ces réussites ?
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8" style={{ color: colors.accent }}>
                            Proposez votre projet ou investissez dans les projets en cours
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link href="/projets/proposer">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto shadow-xl hover:scale-105 transition-transform"
                                    style={{ background: colors.primary, color: colors.secondaryDark }}
                                >
                                    Proposer un projet
                                </Button>
                            </Link>
                            <Link href="/projets/en-cours">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                                    style={{ borderColor: colors.secondaryDark, color: colors.secondaryDark }}
                                >
                                    Voir les projets en cours
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}