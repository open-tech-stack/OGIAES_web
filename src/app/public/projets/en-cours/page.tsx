'use client'

import { JSX, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    Filter,
    MapPin,
    Calendar,
    TrendingUp,
    Users,
    ArrowRight,
    ChevronDown,
    Leaf,
    Sun,
    Factory,
    Laptop,
    Building2,
    GraduationCap,
    Clock,
    Target,
    Zap,
    Award
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'

// Types
interface Project {
    id: string
    title: string
    category: string
    categoryIcon: JSX.Element
    location: string
    description: string
    funded: number
    target: number
    investors: number
    daysLeft: number
    progress: number
    impact: string[]
    minInvestment: number
    roi: string
}

export default function ProjetsEnCoursPage() {
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

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('recent')
    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const categories = [
        { id: 'all', label: 'Tous', icon: <Filter size={16} />, color: colors.secondaryDark },
        { id: 'agriculture', label: 'Agriculture', icon: <Leaf size={16} />, color: colors.secondary },
        { id: 'energie', label: 'Énergie', icon: <Sun size={16} />, color: colors.accent },
        { id: 'industrie', label: 'Industrie', icon: <Factory size={16} />, color: colors.accentDark },
        { id: 'technologie', label: 'Tech', icon: <Laptop size={16} />, color: colors.secondaryDark },
        { id: 'infrastructure', label: 'Infra', icon: <Building2 size={16} />, color: colors.secondary },
        { id: 'education', label: 'Éducation', icon: <GraduationCap size={16} />, color: colors.accent }
    ]

    const projects: Project[] = [
        {
            id: '1',
            title: 'Ferme Agropastorale du Sahel',
            category: 'agriculture',
            categoryIcon: <Leaf size={16} />,
            location: 'Dori, Burkina Faso',
            description: 'Développement d\'une ferme moderne pour la production de viande et lait, créant 150 emplois directs.',
            funded: 75000000,
            target: 100000000,
            investors: 234,
            daysLeft: 45,
            progress: 75,
            impact: ['150 emplois', '500 familles', '2 régions'],
            minInvestment: 25000,
            roi: '15%'
        },
        {
            id: '2',
            title: 'Parc Solaire de Zagtouli',
            category: 'energie',
            categoryIcon: <Sun size={16} />,
            location: 'Ouagadougou, Burkina Faso',
            description: 'Extension du parc solaire pour augmenter la capacité de production d\'énergie propre.',
            funded: 120000000,
            target: 200000000,
            investors: 312,
            daysLeft: 75,
            progress: 60,
            impact: ['+25 MW', '50 000 foyers', 'Énergie propre'],
            minInvestment: 50000,
            roi: '12%'
        },
        {
            id: '3',
            title: 'Unité de Transformation Céréalière',
            category: 'industrie',
            categoryIcon: <Factory size={16} />,
            location: 'Bobo-Dioulasso, Burkina Faso',
            description: 'Transformation de céréales locales en produits finis pour consommation et exportation.',
            funded: 90000000,
            target: 100000000,
            investors: 312,
            daysLeft: 20,
            progress: 90,
            impact: ['200 emplois', '10 000 tonnes/an', 'Exportation'],
            minInvestment: 35000,
            roi: '18%'
        },
        {
            id: '4',
            title: 'Tech Innovation Hub',
            category: 'technologie',
            categoryIcon: <Laptop size={16} />,
            location: 'Ouagadougou, Burkina Faso',
            description: 'Espace de coworking et d\'incubation pour startups technologiques.',
            funded: 35000000,
            target: 60000000,
            investors: 89,
            daysLeft: 40,
            progress: 58,
            impact: ['50 startups', '200 emplois jeunes', 'Innovation'],
            minInvestment: 15000,
            roi: '20%'
        },
        {
            id: '5',
            title: 'Écoles Numériques du Mali',
            category: 'education',
            categoryIcon: <GraduationCap size={16} />,
            location: 'Mopti, Mali',
            description: 'Équipement de 100 écoles en outils numériques et formation des enseignants.',
            funded: 25000000,
            target: 50000000,
            investors: 67,
            daysLeft: 25,
            progress: 50,
            impact: ['100 écoles', '15 000 élèves', 'Formation'],
            minInvestment: 10000,
            roi: '10%'
        },
        {
            id: '6',
            title: 'Route du Développement',
            category: 'infrastructure',
            categoryIcon: <Building2 size={16} />,
            location: 'Tillabéri, Niger',
            description: 'Construction de 50 km de routes pour désenclaver les zones rurales.',
            funded: 150000000,
            target: 250000000,
            investors: 178,
            daysLeft: 90,
            progress: 60,
            impact: ['50 km routes', '10 villages', 'Commerce facilité'],
            minInvestment: 45000,
            roi: '14%'
        }
    ]

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA'
    }

    // Filtrage et tri
    const filteredProjects = projects
        .filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.location.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
            return matchesSearch && matchesCategory
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'progress-asc': return b.progress - a.progress
                case 'progress-desc': return a.progress - b.progress
                case 'days-asc': return a.daysLeft - b.daysLeft
                case 'days-desc': return b.daysLeft - a.daysLeft
                default: return 0
            }
        })

    return (
        <div className="min-h-screen bg-[#F8F9FF]">
            {/* Hero Section - Harmonisé avec les autres pages */}
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
                                <Zap className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                                Projets en cours
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4" style={{ color: colors.accent }}>
                                Découvrez les projets qui façonnent l'avenir économique de l'AES et investissez dès maintenant
                            </p>

                            {/* Stats rapides - Responsive */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mt-6 sm:mt-8">
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>12</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Projets actifs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>2.5M</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Investis</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>450+</div>
                                    <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>Investisseurs</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Barre de recherche et filtres - Sticky */}
            <section className="py-4 sm:py-6 lg:py-8 bg-white border-b sticky top-0 z-40" style={{ borderColor: `${colors.primary}20` }}>
                <Container>
                    <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center justify-between">
                        {/* Recherche */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                            <input
                                type="text"
                                placeholder="Rechercher un projet..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 text-sm sm:text-base"
                                style={{
                                    borderColor: `${colors.primary}20`,
                                    color: colors.secondaryDark,
                                    '--tw-ring-color': colors.primary
                                } as any}
                            />
                        </div>

                        {/* Catégories desktop */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all flex items-center space-x-2
                    ${selectedCategory === category.id
                                            ? 'text-white shadow-lg'
                                            : 'hover:bg-opacity-50'
                                        }`}
                                    style={{
                                        backgroundColor: selectedCategory === category.id ? category.color : colors.lightBg,
                                        color: selectedCategory === category.id ? 'white' : colors.secondaryDark
                                    }}
                                >
                                    <span>{category.icon}</span>
                                    <span>{category.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tri et filtres mobiles */}
                        <div className="flex w-full lg:w-auto gap-2 sm:gap-3">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="flex-1 lg:flex-none px-3 sm:px-4 py-2 sm:py-3 border rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 bg-white"
                                style={{
                                    borderColor: `${colors.primary}20`,
                                    color: colors.secondaryDark,
                                    '--tw-ring-color': colors.primary
                                } as any}
                            >
                                <option value="recent">Plus récents</option>
                                <option value="progress-asc">Progression ↑</option>
                                <option value="progress-desc">Progression ↓</option>
                                <option value="days-asc">Fin imminente</option>
                                <option value="days-desc">Plus de temps</option>
                            </select>

                            {/* Mobile filter toggle */}
                            <button
                                onClick={() => setShowMobileFilters(!showMobileFilters)}
                                className="lg:hidden px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors"
                                style={{
                                    backgroundColor: colors.lightBg,
                                    color: colors.secondaryDark
                                }}
                            >
                                <Filter size={16} className="sm:size-18" />
                                <ChevronDown size={16} className={`sm:size-18 transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    </div>

                    {/* Filtres mobiles */}
                    <AnimatePresence>
                        {showMobileFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="lg:hidden mt-3 sm:mt-4 overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-2 p-3 sm:p-4 rounded-xl" style={{ backgroundColor: colors.lightBg }}>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id)
                                                setShowMobileFilters(false)
                                            }}
                                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
                        ${selectedCategory === category.id
                                                    ? 'text-white'
                                                    : 'bg-white'
                                                }`}
                                            style={{
                                                backgroundColor: selectedCategory === category.id ? category.color : 'white',
                                                color: selectedCategory === category.id ? 'white' : colors.secondaryDark
                                            }}
                                        >
                                            <span className="flex items-center space-x-1">
                                                {category.icon}
                                                <span>{category.label}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </section>

            {/* Grille des projets - Responsive */}
            <section className="py-8 sm:py-10 lg:py-12">
                <Container>
                    {/* Nombre de résultats */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-2 px-4 sm:px-0">
                        <p className="text-sm sm:text-base" style={{ color: colors.accent }}>
                            <span className="font-semibold" style={{ color: colors.secondaryDark }}>{filteredProjects.length}</span> projets trouvés
                        </p>
                        <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                        </p>
                    </div>

                    {/* Projets */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory + searchQuery + sortBy}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-0"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link href={`/projets/${project.id}`}>
                                        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 group h-full"
                                            style={{ borderColor: `${colors.primary}20` }}>
                                            {/* Header avec catégorie */}
                                            <div className="h-28 sm:h-32 lg:h-40 p-3 sm:p-4 relative"
                                                style={{ background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)` }}>
                                                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs font-semibold flex items-center space-x-1">
                                                    <span style={{ color: colors.secondaryDark }}>{project.categoryIcon}</span>
                                                    <span className="capitalize" style={{ color: colors.secondaryDark }}>{project.category}</span>
                                                </div>
                                                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between text-white text-xs sm:text-sm">
                                                    <span className="flex items-center">
                                                        <MapPin size={12} className="sm:size-14 mr-1" />
                                                        <span className="truncate max-w-20 sm:max-w-none">{project.location}</span>
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Clock size={12} className="sm:size-14 mr-1" />
                                                        {project.daysLeft}j
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-3 sm:p-4 lg:p-5">
                                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2 group-hover transition-colors"
                                                    style={{ color: colors.secondaryDark }}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2" style={{ color: colors.accent }}>
                                                    {project.description}
                                                </p>

                                                {/* Barre de progression */}
                                                <div className="mb-2 sm:mb-3">
                                                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                                                        <span className="font-medium" style={{ color: colors.secondaryDark }}>
                                                            {formatCurrency(project.funded)}
                                                        </span>
                                                        <span style={{ color: colors.accent }}>
                                                            sur {formatCurrency(project.target)}
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-1.5 sm:h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.lightBg }}>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${project.progress}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: 0.2 }}
                                                            className="h-full rounded-full"
                                                            style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.goldLight})` }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-3">
                                                    <div className="p-1 sm:p-2 rounded-lg text-center" style={{ backgroundColor: colors.lightBg }}>
                                                        <div className="text-xs" style={{ color: colors.accent }}>Invest.</div>
                                                        <div className="text-xs sm:text-sm font-bold" style={{ color: colors.secondaryDark }}>{project.investors}</div>
                                                    </div>
                                                    <div className="p-1 sm:p-2 rounded-lg text-center" style={{ backgroundColor: colors.lightBg }}>
                                                        <div className="text-xs" style={{ color: colors.accent }}>Mini</div>
                                                        <div className="text-xs sm:text-sm font-bold" style={{ color: colors.secondaryDark }}>{formatCurrency(project.minInvestment)}</div>
                                                    </div>
                                                    <div className="p-1 sm:p-2 rounded-lg text-center" style={{ backgroundColor: colors.lightBg }}>
                                                        <div className="text-xs" style={{ color: colors.accent }}>ROI</div>
                                                        <div className="text-xs sm:text-sm font-bold" style={{ color: colors.primary }}>{project.roi}</div>
                                                    </div>
                                                </div>

                                                {/* Impact tags */}
                                                <div className="flex flex-wrap gap-1">
                                                    {project.impact.map((item, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-1.5 sm:px-2 py-0.5 text-xs rounded-lg"
                                                            style={{ backgroundColor: colors.lightBg, color: colors.accent }}
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Aucun résultat */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 sm:py-16 lg:py-20 px-4"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: colors.lightBg }}>
                                <Search size={24} className="sm:size-32" style={{ color: colors.accent }} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: colors.secondaryDark }}>
                                Aucun projet trouvé
                            </h3>
                            <p className="text-sm sm:text-base" style={{ color: colors.accent }}>
                                Essayez de modifier vos critères de recherche
                            </p>
                        </motion.div>
                    )}
                </Container>
            </section>

            {/* CTA - Proposer un projet */}
            <section className="py-12 sm:py-16 lg:py-20" style={{ background: `linear-gradient(135deg, ${colors.lightBg} 0%, white 100%)` }}>
                <Container>
                    <div className="text-center max-w-2xl mx-auto px-4">
                        <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4" style={{ color: colors.primary }} />
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3" style={{ color: colors.secondaryDark }}>
                            Vous avez un projet ?
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8" style={{ color: colors.accent }}>
                            Proposez votre projet à la communauté et bénéficiez du financement citoyen
                        </p>
                        <Link href="/public/projets/proposer">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto shadow-xl hover:scale-105 transition-transform"
                                style={{
                                    background: colors.primary,
                                    color: colors.secondaryDark
                                }}
                            >
                                Proposer un projet
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    )
}