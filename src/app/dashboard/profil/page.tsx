'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Shield,
    Edit2,
    Camera,
    Award,
    TrendingUp,
    Clock,
    CheckCircle,
    Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ProfilPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [activeTab, setActiveTab] = useState('info')

    const userInfo = {
        name: 'Amadou Diallo',
        email: 'amadou.diallo@email.com',
        phone: '+226 70 12 34 56',
        location: 'Ouagadougou, Burkina Faso',
        memberSince: '15 Janvier 2024',
        verified: true,
        kycStatus: 'verifié'
    }

    const stats = [
        { label: 'Investissements', value: '12', icon: <TrendingUp size={16} /> },
        { label: 'Montant total', value: '2.45M FCFA', icon: <Award size={16} /> },
        { label: 'Projets financés', value: '8', icon: <CheckCircle size={16} /> },
        { label: 'Temps de réponse', value: '< 2h', icon: <Clock size={16} /> }
    ]

    const recentActivity = [
        { action: 'Investissement dans Agropastoral', amount: '500 000 FCFA', date: '15 Jan 2024', status: 'confirmé' },
        { action: 'Versement mensuel', amount: '25 000 FCFA', date: '10 Jan 2024', status: 'effectué' },
        { action: 'Nouveau projet suivi', amount: 'Énergie Solaire', date: '05 Jan 2024', status: 'en cours' },
        { action: 'Retrait de dividendes', amount: '45 000 FCFA', date: '01 Jan 2024', status: 'effectué' }
    ]

    const documents = [
        { name: "Pièce d'identité", status: 'verifié', date: '15 Jan 2024' },
        { name: 'Justificatif de domicile', status: 'en_attente', date: '15 Jan 2024' },
        { name: 'Attestation de revenus', status: 'non_fourni', date: '-' }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'verifié': return 'text-green-600 bg-green-50'
            case 'confirmé': return 'text-green-600 bg-green-50'
            case 'effectué': return 'text-blue-600 bg-blue-50'
            case 'en_attente': return 'text-yellow-600 bg-yellow-50'
            case 'non_fourni': return 'text-gray-600 bg-gray-50'
            default: return 'text-gray-600 bg-gray-50'
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Mon Profil</h1>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Edit2 size={18} className="mr-2" />
                    {isEditing ? 'Annuler' : 'Modifier le profil'}
                </Button>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                            AD
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                            <Camera size={14} className="text-gray-600" />
                        </button>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-gray-500">Nom complet</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        defaultValue={userInfo.name}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                    />
                                ) : (
                                    <p className="font-semibold">{userInfo.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        defaultValue={userInfo.email}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                    />
                                ) : (
                                    <p className="font-semibold flex items-center">
                                        {userInfo.email}
                                        {userInfo.verified && (
                                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Vérifié</span>
                                        )}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">Téléphone</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        defaultValue={userInfo.phone}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                    />
                                ) : (
                                    <p className="font-semibold">{userInfo.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">Localisation</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        defaultValue={userInfo.location}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                    />
                                ) : (
                                    <p className="font-semibold">{userInfo.location}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-gray-400 mb-2 flex justify-center">{stat.icon}</div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="border-b border-gray-100 px-6">
                    <div className="flex space-x-6">
                        <button
                            onClick={() => setActiveTab('info')}
                            className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'info'
                                    ? 'border-green-600 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Informations
                        </button>
                        <button
                            onClick={() => setActiveTab('documents')}
                            className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'documents'
                                    ? 'border-green-600 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Documents KYC
                        </button>
                        <button
                            onClick={() => setActiveTab('activite')}
                            className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'activite'
                                    ? 'border-green-600 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Activité récente
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    {activeTab === 'info' && (
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Membre depuis</p>
                                    <p className="font-semibold flex items-center">
                                        <Calendar size={16} className="mr-2 text-gray-400" />
                                        {userInfo.memberSince}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Statut KYC</p>
                                    <p className="font-semibold flex items-center">
                                        <Shield size={16} className="mr-2 text-green-600" />
                                        <span className="text-green-600">{userInfo.kycStatus}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-semibold text-blue-700 mb-2">Préférences de notification</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                        <span className="text-sm text-gray-700">Notifications par email</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                        <span className="text-sm text-gray-700">Notifications SMS</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                        <span className="text-sm text-gray-700">Rappels de versement</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'documents' && (
                        <div className="space-y-4">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">{doc.name}</p>
                                        <p className="text-sm text-gray-500">Soumis le {doc.date}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(doc.status)}`}>
                                            {doc.status}
                                        </span>
                                        {doc.status === 'non_fourni' ? (
                                            <Button size="sm">Télécharger</Button>
                                        ) : (
                                            <Button variant="outline" size="sm">
                                                <Download size={14} />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'activite' && (
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">{activity.action}</p>
                                        <p className="text-sm text-gray-500">{activity.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-green-600">{activity.amount}</p>
                                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(activity.status)}`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}