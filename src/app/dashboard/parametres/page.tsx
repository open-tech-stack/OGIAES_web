'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Settings,
    Bell,
    Globe,
    Moon,
    Sun,
    Mail,
    Smartphone,
    CreditCard,
    DollarSign,
    Languages,
    Volume2,
    Eye,
    EyeOff,
    Save,
    RefreshCw,
    Trash2,
    LogOut,
    Download,
    Shield,
    TrendingUp
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ParametresPage() {
    const [activeTab, setActiveTab] = useState('general')
    const [darkMode, setDarkMode] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState({
        investments: true,
        dividends: true,
        payments: true,
        promotions: false,
        security: true
    })
    const [language, setLanguage] = useState('fr')
    const [currency, setCurrency] = useState('XOF')
    const [showAmounts, setShowAmounts] = useState(true)

    const tabs = [
        { id: 'general', label: 'Général', icon: <Settings size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'preferences', label: 'Préférences', icon: <Globe size={18} /> },
        { id: 'confidentialite', label: 'Confidentialité', icon: <Eye size={18} /> }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
                <p className="text-gray-600 mt-1">Personnalisez votre expérience</p>
            </div>

            {/* Settings Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-1 flex flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                                ? 'bg-green-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Settings Content */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                {/* General Settings */}
                {activeTab === 'general' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Paramètres généraux</h2>

                        {/* Language */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <Languages size={20} className="text-gray-400" />
                                <div>
                                    <p className="font-medium">Langue</p>
                                    <p className="text-sm text-gray-500">Choisissez votre langue préférée</p>
                                </div>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                            </select>
                        </div>

                        {/* Currency */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <DollarSign size={20} className="text-gray-400" />
                                <div>
                                    <p className="font-medium">Devise</p>
                                    <p className="text-sm text-gray-500">Devise d'affichage par défaut</p>
                                </div>
                            </div>
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20"
                            >
                                <option value="XOF">FCFA (XOF)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="USD">Dollar (USD)</option>
                            </select>
                        </div>

                        {/* Dark Mode */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                {darkMode ? <Moon size={20} className="text-gray-400" /> : <Sun size={20} className="text-gray-400" />}
                                <div>
                                    <p className="font-medium">Mode sombre</p>
                                    <p className="text-sm text-gray-500">Activer le thème sombre</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* Show Amounts */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                {showAmounts ? <Eye size={20} className="text-gray-400" /> : <EyeOff size={20} className="text-gray-400" />}
                                <div>
                                    <p className="font-medium">Afficher les montants</p>
                                    <p className="text-sm text-gray-500">Masquer ou afficher les montants par défaut</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAmounts(!showAmounts)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showAmounts ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showAmounts ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Notifications Settings */}
                {activeTab === 'notifications' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Préférences de notification</h2>

                        <div className="space-y-4">
                            {Object.entries(emailNotifications).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        {key === 'investments' && <TrendingUp size={20} className="text-gray-400" />}
                                        {key === 'dividends' && <RefreshCw size={20} className="text-gray-400" />}
                                        {key === 'payments' && <CreditCard size={20} className="text-gray-400" />}
                                        {key === 'promotions' && <Mail size={20} className="text-gray-400" />}
                                        {key === 'security' && <Shield size={20} className="text-gray-400" />}
                                        <div>
                                            <p className="font-medium capitalize">{key}</p>
                                            <p className="text-sm text-gray-500">
                                                {key === 'investments' && 'Nouveaux investissements et opportunités'}
                                                {key === 'dividends' && 'Paiements de dividendes'}
                                                {key === 'payments' && 'Rappels de versements'}
                                                {key === 'promotions' && 'Offres et promotions'}
                                                {key === 'security' && 'Alertes de sécurité'}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setEmailNotifications({ ...emailNotifications, [key]: !value })}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-green-600' : 'bg-gray-300'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-medium text-blue-700 mb-2">Canaux de notification</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                    <span className="text-sm">Email</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                    <span className="text-sm">SMS</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="rounded text-green-600" />
                                    <span className="text-sm">Notifications push</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Preferences */}
                {activeTab === 'preferences' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Préférences d'affichage</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-3">Tableau de bord</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="dashboard" defaultChecked className="text-green-600" />
                                        <span className="text-sm">Vue classique</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="dashboard" className="text-green-600" />
                                        <span className="text-sm">Vue compacte</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="dashboard" className="text-green-600" />
                                        <span className="text-sm">Vue détaillée</span>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-3">Graphiques</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                        <span className="text-sm">Afficher les tendances</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded text-green-600" />
                                        <span className="text-sm">Comparaisons annuelles</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-green-600" />
                                        <span className="text-sm">Projections</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-medium mb-3">Fuseau horaire</h3>
                            <select className="w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20">
                                <option>UTC+00:00 - Abidjan, Ouagadougou</option>
                                <option>UTC+01:00 - Lagos, Kinshasa</option>
                                <option>UTC+02:00 - Le Caire, Johannesburg</option>
                            </select>
                        </div>
                    </motion.div>
                )}

                {/* Privacy */}
                {activeTab === 'confidentialite' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Confidentialité et données</h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium">Profil public</p>
                                    <p className="text-sm text-gray-500">Permettre aux autres de voir votre profil</p>
                                </div>
                                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                                    <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium">Montrer mes investissements</p>
                                    <p className="text-sm text-gray-500">Afficher vos investissements publics</p>
                                </div>
                                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                                    <span className="inline-block h-4 w-4 transform translate-x-1 rounded-full bg-white" />
                                </button>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="font-medium mb-2">Télécharger mes données</p>
                                <p className="text-sm text-gray-500 mb-3">Obtenez une copie de toutes vos données</p>
                                <Button variant="outline" size="sm">
                                    <Download size={16} className="mr-2" />
                                    Exporter mes données
                                </Button>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg">
                                <p className="font-medium text-red-700 mb-2">Zone de danger</p>
                                <p className="text-sm text-red-600 mb-3">Supprimer définitivement votre compte</p>
                                <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-100">
                                    <Trash2 size={16} className="mr-2" />
                                    Supprimer mon compte
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Save Button */}
                <div className="flex justify-end mt-6 pt-6 border-t border-gray-100">
                    <Button variant="primary">
                        <Save size={18} className="mr-2" />
                        Enregistrer les modifications
                    </Button>
                </div>
            </div>
        </div>
    )
}