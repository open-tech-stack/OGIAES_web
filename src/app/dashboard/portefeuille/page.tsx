'use client'

import { JSX, useState } from 'react'
import { motion } from 'framer-motion'
import {
    PieChart,
    TrendingUp,
    TrendingDown,
    DollarSign,
    Calendar,
    Download,
    Eye,
    EyeOff,
    ArrowUpRight,
    ArrowDownRight,
    BarChart3,
    RefreshCw
} from 'lucide-react'
import Button from '@/components/ui/Button'
import StatsCards from '../composants/StatsCards'

export default function PortefeuillePage() {
    const [showBalance, setShowBalance] = useState(true)
    const [selectedPeriod, setSelectedPeriod] = useState('1M')

    const stats = [
        {
            title: "Valeur Totale",
            value: showBalance ? "3 245 000 FCFA" : "••••••",
            change: "+18.5%",
            trend: "up" as const,
            icon: <DollarSign className="w-6 h-6" />
        },
        {
            title: "Gain Total",
            value: showBalance ? "485 000 FCFA" : "••••••",
            change: "+15.2%",
            trend: "up" as const,
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "Performance",
            value: "+14.8%",
            change: "+2.3%",
            trend: "up" as const,
            icon: <BarChart3 className="w-6 h-6" />
        },
        {
            title: "Dividendes",
            value: showBalance ? "42 500 FCFA" : "••••••",
            change: "+5.2%",
            trend: "up" as const,
            icon: <RefreshCw className="w-6 h-6" />
        }
    ]

    const allocations = [
        { name: 'Agriculture', value: 35, color: 'bg-green-500', amount: '1 135 750 FCFA' },
        { name: 'Énergie', value: 28, color: 'bg-yellow-500', amount: '908 600 FCFA' },
        { name: 'Industrie', value: 22, color: 'bg-blue-500', amount: '713 900 FCFA' },
        { name: 'Services', value: 15, color: 'bg-purple-500', amount: '486 750 FCFA' }
    ]

    const performances = [
        { name: 'Agropastoral du Sahel', value: '+12.5%', trend: 'up', amount: '625 000 FCFA' },
        { name: 'Énergie Solaire Kaya', value: '+15.8%', trend: 'up', amount: '1 185 000 FCFA' },
        { name: 'Transformation Céréales', value: '+8.2%', trend: 'up', amount: '324 000 FCFA' },
        { name: 'Ferme Avicole', value: '-2.1%', trend: 'down', amount: '220 500 FCFA' }
    ]

    const transactions = [
        { type: 'Dividende', project: 'Agropastoral du Sahel', amount: '+12 500 FCFA', date: '15 Jan 2024', status: 'reçu' },
        { type: 'Investissement', project: 'Énergie Solaire', amount: '-50 000 FCFA', date: '10 Jan 2024', status: 'effectué' },
        { type: 'Dividende', project: 'Transformation Céréales', amount: '+8 500 FCFA', date: '05 Jan 2024', status: 'reçu' }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Mon Portefeuille</h1>
                    <p className="text-gray-600 mt-1">Suivez la performance de vos investissements</p>
                </div>
                <div className="flex space-x-3">
                    <Button variant="outline" onClick={() => setShowBalance(!showBalance)}>
                        {showBalance ? <EyeOff size={18} className="mr-2" /> : <Eye size={18} className="mr-2" />}
                        {showBalance ? 'Masquer' : 'Afficher'}
                    </Button>
                    <Button variant="outline">
                        <Download size={18} className="mr-2" />
                        Exporter
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={stats} />

            {/* Portfolio Overview */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Allocation Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">Répartition</h2>

                    {/* Donut Chart Simulation */}
                    // Dans la section du graphique en donut
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Répartition</h2>

                        {/* Donut Chart Simulation */}
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <svg viewBox="0 0 100 100" className="transform -rotate-90">
                                {(() => {
                                    let cumulativeAngle = 0
                                    return allocations.map((item, index) => {
                                        const startAngle = cumulativeAngle * 3.6
                                        cumulativeAngle += item.value
                                        const endAngle = cumulativeAngle * 3.6

                                        const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
                                        const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
                                        const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
                                        const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

                                        const largeArc = item.value > 50 ? 1 : 0

                                        return (
                                            <path
                                                key={index}
                                                d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY} Z`}
                                                fill={item.color.replace('bg-', 'fill-')}
                                                className="hover:opacity-80 transition-opacity cursor-pointer"
                                            />
                                        )
                                    })
                                })()}
                                <circle cx="50" cy="50" r="25" fill="white" />
                            </svg>
                        </div>
                        {/* Reste du code... */}
                    </motion.div>

                    {/* Legend */}
                    <div className="space-y-3">
                        {allocations.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-semibold">{item.value}%</span>
                                    <span className="text-xs text-gray-500 ml-2">{item.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Performance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Performance</h2>
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-3 py-1 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                        >
                            <option value="1W">1 semaine</option>
                            <option value="1M">1 mois</option>
                            <option value="3M">3 mois</option>
                            <option value="1Y">1 an</option>
                        </select>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-32 mb-6 flex items-end space-x-2">
                        {[65, 72, 68, 78, 85, 82, 88, 92, 95, 98, 102, 105].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${value}%` }}
                                transition={{ delay: i * 0.05 }}
                                className="flex-1 bg-linear-to-t from-green-400 to-green-500 rounded-t-lg hover:from-green-500 hover:to-green-600 transition-all cursor-pointer"
                            />
                        ))}
                    </div>

                    {/* Top Performers */}
                    <h3 className="font-semibold mb-3">Top Performances</h3>
                    <div className="space-y-3">
                        {performances.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <span className="font-medium">{item.name}</span>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-500">{item.amount}</span>
                                    <span className={`flex items-center text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {item.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                        {item.value}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Transactions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Dernières Transactions</h2>
                    <Button variant="ghost" size="sm">Voir tout</Button>
                </div>

                <div className="space-y-3">
                    {transactions.map((tx, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0"
                        >
                            <div>
                                <p className="font-medium">{tx.type}</p>
                                <p className="text-sm text-gray-500">{tx.project}</p>
                            </div>
                            <div className="text-right">
                                <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {tx.amount}
                                </p>
                                <p className="text-xs text-gray-400">{tx.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}