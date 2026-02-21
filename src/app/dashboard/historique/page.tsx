'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    History,
    Filter,
    Calendar,
    Download,
    Search,
    ArrowUpRight,
    ArrowDownRight,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp,
    Wallet,
    Users,
    FileText
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HistoriquePage() {
    const [filter, setFilter] = useState('all')
    const [dateRange, setDateRange] = useState('30j')
    const [searchQuery, setSearchQuery] = useState('')

    const activities = [
        {
            id: 1,
            type: 'investissement',
            project: 'Agropastoral du Sahel',
            amount: '+500 000 FCFA',
            date: '15 Jan 2024',
            time: '14:30',
            status: 'réussi',
            icon: <TrendingUp size={16} />,
            color: 'bg-green-100 text-green-600'
        },
        {
            id: 2,
            type: 'dividende',
            project: 'Énergie Solaire Kaya',
            amount: '+45 000 FCFA',
            date: '10 Jan 2024',
            time: '09:15',
            status: 'réussi',
            icon: <ArrowUpRight size={16} />,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 3,
            type: 'versement',
            project: 'Versement mensuel',
            amount: '-25 000 FCFA',
            date: '05 Jan 2024',
            time: '11:45',
            status: 'réussi',
            icon: <Wallet size={16} />,
            color: 'bg-purple-100 text-purple-600'
        },
        {
            id: 4,
            type: 'projet',
            project: 'Nouveau projet suivi',
            amount: 'Ferme Avicole',
            date: '03 Jan 2024',
            time: '16:20',
            status: 'en_attente',
            icon: <FileText size={16} />,
            color: 'bg-yellow-100 text-yellow-600'
        },
        {
            id: 5,
            type: 'retrait',
            project: 'Retrait de fonds',
            amount: '-100 000 FCFA',
            date: '28 Déc 2023',
            time: '10:00',
            status: 'réussi',
            icon: <ArrowDownRight size={16} />,
            color: 'bg-red-100 text-red-600'
        },
        {
            id: 6,
            type: 'recommandation',
            project: 'Amis parrainés',
            amount: '+2 nouveaux',
            date: '20 Déc 2023',
            time: '08:30',
            status: 'réussi',
            icon: <Users size={16} />,
            color: 'bg-indigo-100 text-indigo-600'
        }
    ]

    const stats = [
        { label: 'Total transactions', value: '156', change: '+12' },
        { label: 'Investissements', value: '12', change: '+3' },
        { label: 'Dividendes reçus', value: '8', change: '+2' },
        { label: 'Versements', value: '24', change: '+4' }
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'réussi':
                return <span className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs"><CheckCircle size={12} className="mr-1" /> Réussi</span>
            case 'en_attente':
                return <span className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs"><Clock size={12} className="mr-1" /> En attente</span>
            case 'échec':
                return <span className="flex items-center px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs"><XCircle size={12} className="mr-1" /> Échec</span>
            default:
                return null
        }
    }

    const getTypeLabel = (type: string) => {
        const types: Record<string, string> = {
            investissement: 'Investissement',
            dividende: 'Dividende',
            versement: 'Versement',
            projet: 'Projet',
            retrait: 'Retrait',
            recommandation: 'Recommandation'
        }
        return types[type] || type
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Historique</h1>
                    <p className="text-gray-600 mt-1">Toutes vos activités en un coup d'œil</p>
                </div>
                <div className="flex space-x-3">
                    <Button variant="outline">
                        <Calendar size={18} className="mr-2" />
                        Période
                    </Button>
                    <Button variant="outline">
                        <Download size={18} className="mr-2" />
                        Exporter
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-4"
                    >
                        <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change} ce mois</p>
                    </motion.div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher dans l'historique..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                        />
                    </div>

                    {/* Type Filters */}
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                        <Button
                            variant={filter === 'all' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('all')}
                        >
                            Tous
                        </Button>
                        <Button
                            variant={filter === 'investissement' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('investissement')}
                        >
                            Investissements
                        </Button>
                        <Button
                            variant={filter === 'dividende' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('dividende')}
                        >
                            Dividendes
                        </Button>
                        <Button
                            variant={filter === 'versement' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('versement')}
                        >
                            Versements
                        </Button>
                    </div>

                    {/* Date Range */}
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    >
                        <option value="7j">7 derniers jours</option>
                        <option value="30j">30 derniers jours</option>
                        <option value="90j">3 mois</option>
                        <option value="1a">Cette année</option>
                        <option value="all">Tout</option>
                    </select>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Fil d'activité</h2>

                <div className="space-y-4">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                                {activity.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="font-semibold">{activity.project}</h3>
                                        <p className="text-sm text-gray-500">
                                            {getTypeLabel(activity.type)} • {activity.date} à {activity.time}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-3 mt-2 md:mt-0">
                                        <span className={`font-semibold ${activity.amount.startsWith('+') ? 'text-green-600' :
                                                activity.amount.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                                            }`}>
                                            {activity.amount}
                                        </span>
                                        {getStatusBadge(activity.status)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-6">
                    <Button variant="outline">
                        Charger plus d'activités
                    </Button>
                </div>
            </div>

            {/* Activity Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <h2 className="text-xl font-semibold mb-4">Activité mensuelle</h2>
                <div className="h-40 flex items-end space-x-2">
                    {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'].map((month, i) => (
                        <div key={month} className="flex-1 flex flex-col items-center">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${[65, 45, 80, 70, 90, 55][i]}%` }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t-lg"
                            />
                            <span className="text-xs text-gray-500 mt-2">{month}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}