'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    TrendingUp,
    Filter,
    Download,
    Calendar,
    ChevronDown,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    CheckCircle,
    XCircle,
    AlertCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import StatsCards from '../composants/StatsCards'

export default function InvestissementsPage() {
    const [filter, setFilter] = useState('all')
    const [selectedPeriod, setSelectedPeriod] = useState('30j')

    const stats = [
        {
            title: "Total Investi",
            value: "2 450 000 FCFA",
            change: "+15.3%",
            trend: "up",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "Rendement Total",
            value: "342 500 FCFA",
            change: "+12.8%",
            trend: "up",
            icon: <ArrowUpRight className="w-6 h-6" />
        },
        {
            title: "Investissements Actifs",
            value: "12",
            change: "+3",
            trend: "up",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            title: "Taux de Rendement",
            value: "14.2%",
            change: "+2.1%",
            trend: "up",
            icon: <TrendingUp className="w-6 h-6" />
        }
    ]

    const investments = [
        {
            id: 1,
            project: "Agropastoral du Sahel",
            category: "Agriculture",
            amount: "500 000 FCFA",
            date: "15 Jan 2024",
            return: "45 000 FCFA",
            returnRate: "+9%",
            status: "actif",
            nextPayment: "15 Fév 2024",
            progress: 75
        },
        {
            id: 2,
            project: "Énergie Solaire Kaya",
            category: "Énergie",
            amount: "750 000 FCFA",
            date: "10 Déc 2023",
            return: "90 000 FCFA",
            returnRate: "+12%",
            status: "actif",
            nextPayment: "10 Fév 2024",
            progress: 45
        },
        {
            id: 3,
            project: "Transformation Céréales",
            category: "Industrie",
            amount: "300 000 FCFA",
            date: "20 Jan 2024",
            return: "18 000 FCFA",
            returnRate: "+6%",
            status: "en_attente",
            nextPayment: "20 Fév 2024",
            progress: 90
        },
        {
            id: 4,
            project: "Ferme Avicole Moderne",
            category: "Agriculture",
            amount: "450 000 FCFA",
            date: "05 Jan 2024",
            return: "36 000 FCFA",
            returnRate: "+8%",
            status: "actif",
            nextPayment: "05 Fév 2024",
            progress: 60
        },
        {
            id: 5,
            project: "Panneaux Solaires",
            category: "Énergie",
            amount: "250 000 FCFA",
            date: "28 Déc 2023",
            return: "25 000 FCFA",
            returnRate: "+10%",
            status: "termine",
            nextPayment: "Terminé",
            progress: 100
        },
        {
            id: 6,
            project: "Unités de Transformation",
            category: "Industrie",
            amount: "200 000 FCFA",
            date: "12 Jan 2024",
            return: "14 000 FCFA",
            returnRate: "+7%",
            status: "actif",
            nextPayment: "12 Fév 2024",
            progress: 30
        }
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'actif':
                return <span className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs"><CheckCircle size={12} className="mr-1" /> Actif</span>
            case 'en_attente':
                return <span className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs"><Clock size={12} className="mr-1" /> En attente</span>
            case 'termine':
                return <span className="flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"><CheckCircle size={12} className="mr-1" /> Terminé</span>
            default:
                return null
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Mes Investissements
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Gérez et suivez tous vos investissements
                    </p>
                </div>
                <div className="flex space-x-3">
                    <Button variant="outline">
                        <Download size={18} className="mr-2" />
                        Exporter
                    </Button>
                    <Button>
                        Nouvel Investissement
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={stats} />

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex space-x-2">
                        <Button
                            variant={filter === 'all' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('all')}
                        >
                            Tous
                        </Button>
                        <Button
                            variant={filter === 'actif' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('actif')}
                        >
                            Actifs
                        </Button>
                        <Button
                            variant={filter === 'en_attente' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('en_attente')}
                        >
                            En attente
                        </Button>
                        <Button
                            variant={filter === 'termine' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter('termine')}
                        >
                            Terminés
                        </Button>
                    </div>

                    <div className="flex space-x-2">
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                        >
                            <option value="7j">7 derniers jours</option>
                            <option value="30j">30 derniers jours</option>
                            <option value="90j">3 mois</option>
                            <option value="1a">Cette année</option>
                        </select>

                        <Button variant="outline" size="sm">
                            <Filter size={16} className="mr-2" />
                            Filtres
                        </Button>

                        <Button variant="outline" size="sm">
                            <Calendar size={16} className="mr-2" />
                            Période
                        </Button>
                    </div>
                </div>
            </div>

            {/* Investments List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Projet</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Montant</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rendement</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Statut</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Prochain paiement</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {investments.map((inv, index) => (
                                <motion.tr
                                    key={inv.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold">{inv.project}</p>
                                            <p className="text-xs text-gray-500">{inv.category}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-semibold">{inv.amount}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">{inv.date}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold text-green-600">{inv.return}</p>
                                            <p className="text-xs text-green-500">{inv.returnRate}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {getStatusBadge(inv.status)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">{inv.nextPayment}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button variant="ghost" size="sm">
                                            Détails
                                        </Button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Affichage 1-6 de 24 investissements</p>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm" disabled>Précédent</Button>
                        <Button variant="outline" size="sm" className="bg-green-50 text-green-600">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Suivant</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}