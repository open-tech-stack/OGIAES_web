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
  X,
  ChevronDown,
  Leaf,
  Sun,
  Factory,
  Laptop,
  Building2,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import FadeIn from '@/components/animations/FadeIn'

interface Project {
  id: string
  title: string
  category: string
  categoryIcon: JSX.Element
  location: string
  description: string
  image: string
  funded: number
  target: number
  investors: number
  daysLeft: number
  progress: number
  impact: string[]
}

export default function ProjetsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: <Filter size={16} /> },
    { id: 'agriculture', label: 'Agriculture', icon: <Leaf size={16} /> },
    { id: 'energie', label: 'Énergie', icon: <Sun size={16} /> },
    { id: 'industrie', label: 'Industrie', icon: <Factory size={16} /> },
    { id: 'technologie', label: 'Technologie', icon: <Laptop size={16} /> },
    { id: 'infrastructure', label: 'Infrastructure', icon: <Building2 size={16} /> },
    { id: 'education', label: 'Éducation', icon: <GraduationCap size={16} /> }
  ]

  const projects: Project[] = [
    {
      id: '1',
      title: 'Agropastoral du Sahel',
      category: 'agriculture',
      categoryIcon: <Leaf size={16} />,
      location: 'Dori, Burkina Faso',
      description: 'Développement d\'une ferme agropastorale moderne pour la production de viande et de lait, créant 150 emplois directs.',
      image: '/images/project-agriculture.jpg',
      funded: 75000000,
      target: 100000000,
      investors: 234,
      daysLeft: 45,
      progress: 75,
      impact: ['150 emplois', '500 familles', '2 régions']
    },
    {
        id: '2',
        title: 'Ferme Avicole de Kaya',
        category: 'agriculture',
        categoryIcon: <Leaf size={16} />,
        location: 'Kaya, Burkina Faso',
        description: 'Construction d\'une ferme avicole moderne avec capacité de 50 000 poulets par cycle.',
        funded: 45000000,
        target: 80000000,
        investors: 156,
        daysLeft: 30,
        progress: 56,
        impact: ['80 emplois', 'Approvisionnement local', 'Formation'],
        image: ''
    },
    {
        id: '3',
        title: 'Énergie Solaire Kaya',
        category: 'energie',
        categoryIcon: <Sun size={16} />,
        location: 'Kaya, Burkina Faso',
        description: 'Installation de panneaux solaires pour électrifier 50 villages et alimenter des infrastructures communautaires.',
        funded: 45000000,
        target: 100000000,
        investors: 156,
        daysLeft: 60,
        progress: 45,
        impact: ['50 villages', '20 000 habitants', 'Écoles éclairées'],
        image: ''
    },
    {
        id: '4',
        title: 'Parc Solaire de Zagtouli',
        category: 'energie',
        categoryIcon: <Sun size={16} />,
        location: 'Ouagadougou, Burkina Faso',
        description: 'Extension du parc solaire existant pour augmenter la capacité de production d\'énergie propre.',
        funded: 120000000,
        target: 200000000,
        investors: 312,
        daysLeft: 75,
        progress: 60,
        impact: ['+25 MW', '50 000 foyers', 'Énergie propre'],
        image: ''
    },
    {
        id: '5',
        title: 'Transformation Céréales',
        category: 'industrie',
        categoryIcon: <Factory size={16} />,
        location: 'Bobo-Dioulasso, Burkina Faso',
        description: 'Unité de transformation de céréales locales en produits finis pour la consommation et l\'exportation.',
        funded: 90000000,
        target: 100000000,
        investors: 312,
        daysLeft: 20,
        progress: 90,
        impact: ['200 emplois', '10 000 tonnes/an', 'Exportation'],
        image: ''
    },
    {
        id: '6',
        title: 'Huilerie de Kotédougou',
        category: 'industrie',
        categoryIcon: <Factory size={16} />,
        location: 'Kotédougou, Burkina Faso',
        description: 'Construction d\'une huilerie moderne pour la transformation des graines de coton et de sésame.',
        funded: 60000000,
        target: 120000000,
        investors: 98,
        daysLeft: 55,
        progress: 50,
        impact: ['120 emplois', 'Valorisation locale', 'Exportation'],
        image: ''
    },
    {
        id: '7',
        title: 'Tech Hub Ouaga',
        category: 'technologie',
        categoryIcon: <Laptop size={16} />,
        location: 'Ouagadougou, Burkina Faso',
        description: 'Création d\'un espace de coworking et d\'incubation pour startups technologiques.',
        funded: 35000000,
        target: 60000000,
        investors: 89,
        daysLeft: 40,
        progress: 58,
        impact: ['50 startups', '200 emplois jeunes', 'Innovation'],
        image: ''
    },
    {
        id: '8',
        title: 'École Numérique',
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
        image: ''
    },
    {
        id: '9',
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
        image: ''
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Projets à financer
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez les projets qui façonnent l'avenir économique de l'AES
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Input
                  icon={<Search className="text-gray-400" />}
                  placeholder="Rechercher un projet, un lieu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }
                  `}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg"
            >
              <Filter size={16} />
              <span>Filtres</span>
              <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <Container>
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projets trouvés
            </p>
            <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20">
              <option>Les plus récents</option>
              <option>Progression ↑</option>
              <option>Progression ↓</option>
              <option>Objectif ↑</option>
              <option>Objectif ↓</option>
            </select>
          </div>

          {/* Projects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/projets/${project.id}`}>
                    <Card hover className="h-full overflow-hidden group">
                      {/* Image Placeholder (colored background instead of actual image) */}
                      <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-green-600 flex items-center space-x-1">
                          {project.categoryIcon}
                          <span className="capitalize">{project.category}</span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-sm">
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {project.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {project.daysLeft} jours
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-900">
                              {formatCurrency(project.funded)}
                            </span>
                            <span className="text-gray-500">
                              sur {formatCurrency(project.target)}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                            />
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center text-gray-500">
                            <Users size={14} className="mr-1" />
                            {project.investors} investisseurs
                          </span>
                          <span className="text-green-600 font-semibold">
                            {project.progress}%
                          </span>
                        </div>

                        {/* Impact Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                          {project.impact.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* Hover Arrow */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="absolute bottom-5 right-5 text-green-600"
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous avez un projet ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Proposez votre projet à la communauté des investisseurs citoyens
            </p>
            <Link href="/proposer-projet">
              <Button size="lg">
                Proposer un projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}