'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Wallet,
    Calendar,
    Clock,
    CheckCircle,
    AlertCircle,
    Plus,
    Repeat,
    CreditCard,
    Smartphone,
    Landmark,
    ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import StatsCards from '../composants/StatsCards'

export default function VersementsPage() {
    const [selectedMethod, setSelectedMethod] = useState('orange')
    const [amount, setAmount] = useState('')

    const stats = [
        {
            title: "Total Versé",
            value: "425 000 FCFA",
            change: "+25.3%",
            trend: "up" as const,
            icon: <Wallet className="w-6 h-6" />
        },
        {
            title: "Versements Mensuels",
            value: "25 000 FCFA",
            change: "Fixe",
            trend: "up" as const,
            icon: <Repeat className="w-6 h-6" />
        },
        {
            title: "Prochain Versement",
            value: "25 Jan 2024",
            change: "Dans 5 jours",
            trend: "up" as const,
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Statut",
            value: "À jour",
            change: "OK",
            trend: "up" as const,
            icon: <CheckCircle className="w-6 h-6" />
        }
    ]

    const paymentMethods = [
        { id: 'orange', name: 'Orange Money', icon: <Smartphone size={20} />, fee: '0%' },
        { id: 'moov', name: 'Moov Money', icon: <Smartphone size={20} />, fee: '0%' },
        { id: 'bank', name: 'Virement Bancaire', icon: <Landmark size={20} />, fee: '0.5%' },
        { id: 'card', name: 'Carte Bancaire', icon: <CreditCard size={20} />, fee: '1.5%' }
    ]

    const scheduledPayments = [
        { id: 1, project: 'Agropastoral du Sahel', amount: '25 000 FCFA', date: '25 Jan 2024', status: 'programmé' },
        { id: 2, project: 'Énergie Solaire Kaya', amount: '15 000 FCFA', date: '10 Fév 2024', status: 'programmé' },
        { id: 3, project: 'Transformation Céréales', amount: '10 000 FCFA', date: '20 Fév 2024', status: 'programmé' }
    ]

    const history = [
        { date: '25 Déc 2023', project: 'Agropastoral du Sahel', amount: '25 000 FCFA', status: 'réussi' },
        { date: '25 Nov 2023', project: 'Agropastoral du Sahel', amount: '25 000 FCFA', status: 'réussi' },
        { date: '25 Oct 2023', project: 'Agropastoral du Sahel', amount: '25 000 FCFA', status: 'réussi' }
    ]

    const quickAmounts = ['5 000', '10 000', '25 000', '50 000', '100 000']

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Versements</h1>
                    <p className="text-gray-600 mt-1">Gérez vos versements et investissements</p>
                </div>
                <Button variant="primary">
                    <Plus size={18} className="mr-2" />
                    Nouveau versement
                </Button>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={stats} />

            {/* Quick Payment */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Payment Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-6">Effectuer un versement</h2>

                    {/* Amount */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Montant (FCFA)
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0"
                                className="w-full px-4 py-3 text-2xl font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                FCFA
                            </span>
                        </div>
                    </div>

                    {/* Quick Amounts */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">Montants rapides</p>
                        <div className="flex flex-wrap gap-2">
                            {quickAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => setAmount(amt)}
                                    className="px-4 py-2 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                                >
                                    {amt} FCFA
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Méthode de paiement
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    className={`p-4 rounded-lg border-2 transition-all ${selectedMethod === method.id
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-gray-200 hover:border-green-200'
                                        }`}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`mb-2 ${selectedMethod === method.id ? 'text-green-600' : 'text-gray-400'
                                            }`}>
                                            {method.icon}
                                        </div>
                                        <span className="text-xs font-medium">{method.name}</span>
                                        <span className="text-xs text-gray-400 mt-1">Frais {method.fee}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Options */}
                    <div className="mb-6">
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                            <span className="text-sm text-gray-700">Versement mensuel automatique</span>
                        </label>
                    </div>

                    {/* Submit */}
                    <Button variant="primary" size="lg" className="w-full">
                        Effectuer le versement
                        <ArrowRight size={18} className="ml-2" />
                    </Button>
                </motion.div>

                {/* Scheduled Payments */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Versements programmés</h2>
                        <Button variant="ghost" size="sm">Gérer</Button>
                    </div>

                    <div className="space-y-4">
                        {scheduledPayments.map((payment) => (
                            <motion.div
                                key={payment.id}
                                whileHover={{ scale: 1.02 }}
                                className="p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold">{payment.project}</h3>
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                        {payment.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        {payment.date}
                                    </p>
                                    <p className="font-semibold text-green-600">{payment.amount}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700 mb-1">Total mensuel programmé</p>
                        <p className="text-2xl font-bold text-green-600">50 000 FCFA</p>
                    </div>
                </motion.div>
            </div>

            {/* History */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Historique des versements</h2>
                    <Button variant="ghost" size="sm">Voir tout</Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Projet</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Montant</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Statut</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {history.map((item, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3 text-sm">{item.date}</td>
                                    <td className="px-4 py-3 text-sm">{item.project}</td>
                                    <td className="px-4 py-3 text-sm font-semibold text-green-600">{item.amount}</td>
                                    <td className="px-4 py-3">
                                        <span className="flex items-center text-green-600 text-sm">
                                            <CheckCircle size={14} className="mr-1" />
                                            {item.status}
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    )
}