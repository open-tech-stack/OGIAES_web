'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Target,
    Filter,
    Search,
    MapPin,
    Users,
    TrendingUp,
    Clock,
    CheckCircle,
    Heart,
    Share2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function ProjetsPage() {
    const [category, setCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const categories = [
        { id: 'all', label: 'Tous les projets', icon: '🌍' },
        { id: 'agriculture', label: 'Agriculture', icon: '🌾' },
        { id: 'energie', label: 'Énergie', icon: '⚡' },
        { id: 'industrie', label: 'Industrie', icon: '🏭' },
        { id: 'education', label: 'Éducation', icon: '📚' },
        { id: 'sante', label: 'Santé', icon: '🏥' }
    ]

    const projects = [
        {
            id: 1,
            name: "Agropastoral du Sahel",
            category: "agriculture",
            location: "Ouagadougou, Burkina Faso",
            description: "Développement d'une ferme agropastorale moderne avec système d'irrigation solaire",
            target: "100 000 000 FCFA",
            funded: "75 000 000 FCFA",
            progress: 75,
            investors: 234,
            daysLeft: 15,
            image: "/projects/agriculture.jpg",
            return: "8-12%",
            minInvestment: "25 000 FCFA"
        },
        {
            id: 2,
            name: "Énergie Solaire Kaya",
            category: "energie",
            location: "Kaya, Burkina Faso",
            description: "Installation de panneaux solaires pour 500 foyers et petites entreprises",
            target: "80 000 000 FCFA",
            funded: "45 000 000 FCFA",
            progress: 45,
            investors: 156,
            daysLeft: 25,
            image: "/projects/solar.jpg",
            return: "10-15%",
            minInvestment: "20 000 FCFA"
        },
        {
            id: 3,
            name: "Transformation Céréales",
            category: "industrie",
            location: "Bobo-Dioulasso, Burkina Faso",
            description: "Unité de transformation de céréales locales en produits finis",
            target: "60 000 000 FCFA",
            funded: "54 000 000 FCFA",
            progress: 90,
            investors: 312,
            daysLeft: 5,
            image: "/projects/industry.jpg",
            return: "7-10%",
            minInvestment: "15 000 FCFA"
        },
        {
            id: 4,
            name: "Ferme Avicole Moderne",
            category: "agriculture",
            location: "Banfora, Burkina Faso",
            description: "Construction d'une ferme avicole avec capacité de 5000 poulets",
            target: "40 000 000 FCFA",
            funded: "28 000 000 FCFA",
            progress: 70,
            investors: 98,
            daysLeft: 20,
            image: "/projects/poultry.jpg",
            return: "9-11%",
            minInvestment: "10 000 FCFA"
        },
        {
            id: 5,
            name: "Centre de Formation",
            category: "education",
            location: "Ouagadougou, Burkina Faso",
            description: "Centre de formation professionnelle en métiers du numérique",
            target: "50 000 000 FCFA",
            funded: "12 500 000 FCFA",
            progress: 25,
            investors: 45,
            daysLeft: 35,
            image: "/projects/education.jpg",
            return: "6-8%",
            minInvestment: "20 000 FCFA"
        },
        {
            id: 6,
            name: "Clinique Mobile",
            category: "sante",
            location: "Région du Sahel, Burkina Faso",
            description: "Acquisition de cliniques mobiles pour zones reculées",
            target: "70 000 000 FCFA",
            funded: "42 000 000 FCFA",
            progress: 60,
            investors: 134,
            daysLeft: 18,
            image: "/projects/health.jpg",
            return: "5-7%",
            minInvestment: "15 000 FCFA"
        }
    ]

    const filteredProjects = projects.filter(project =>
        (category === 'all' || project.category === category) &&
        (project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Projets d'Investissement
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Découvrez et investissez dans des projets porteurs pour l'AES
                    </p>
                </div>
                <Button>
                    Proposer un projet
                </Button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher un projet..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline">
                            <Filter size={16} className="mr-2" />
                            Filtres avancés
                        </Button>
                        <select className="px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20">
                            <option>Trier par: Pertinence</option>
                            <option>Plus récents</option>
                            <option>Presque financés</option>
                            <option>Plus d'investisseurs</option>
                        </select>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${category === cat.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                    >
                        {/* Image */}
                        <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-green-600">
                                    {project.return}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-semibold text-lg">{project.name}</h3>
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <MapPin size={14} className="mr-1" />
                                        {project.location}
                                    </p>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={18} />
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Progress */}
                            <div className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">Progression</span>
                                    <span className="font-semibold">{project.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        transition={{ duration: 1 }}
                                        className="bg-green-600 h-2 rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div>
                                    <p className="text-xs text-gray-500">Objectif</p>
                                    <p className="font-semibold text-sm">{project.target}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Investisseurs</p>
                                    <p className="font-semibold text-sm flex items-center">
                                        <Users size={12} className="mr-1" />
                                        {project.investors}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Jours restants</p>
                                    <p className="font-semibold text-sm flex items-center">
                                        <Clock size={12} className="mr-1" />
                                        {project.daysLeft}
                                    </p>
                                </div>
                            </div>

                            {/* Investment Info */}
                            <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                <p className="text-xs text-gray-500">Investissement minimum</p>
                                <p className="font-semibold text-green-600">{project.minInvestment}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-2">
                                <Button className="flex-1">
                                    Investir
                                </Button>
                                <Button variant="outline" size="sm" className="px-3">
                                    <Share2 size={16} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-6">
                <Button variant="outline" size="lg">
                    Voir plus de projets
                </Button>
            </div>
        </div>
    )
}