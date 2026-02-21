'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Shield,
    Lock,
    Key,
    Fingerprint,
    Smartphone,
    Mail,
    Clock,
    CheckCircle,
    AlertCircle,
    Eye,
    EyeOff,
    Globe,
    Download,
    Bell,
    ShieldCheck,
    AlertTriangle
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SecuritePage() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
    const [activeSessions, setActiveSessions] = useState(true)

    const securityScore = 85

    const securityChecks = [
        { name: 'Mot de passe', status: 'fort', icon: <Lock size={16} /> },
        { name: 'Double authentification', status: twoFactorEnabled ? 'activé' : 'désactivé', icon: <Fingerprint size={16} /> },
        { name: 'Email de récupération', status: 'configuré', icon: <Mail size={16} /> },
        { name: 'Téléphone', status: 'vérifié', icon: <Smartphone size={16} /> }
    ]

    const recentActivities = [
        { action: 'Connexion', location: 'Ouagadougou, BF', device: 'Chrome sur Windows', time: 'Il y a 2h', status: 'succès' },
        { action: 'Changement de mot de passe', location: 'Ouagadougou, BF', device: 'Firefox sur Mac', time: 'Il y a 3j', status: 'succès' },
        { action: 'Tentative de connexion', location: 'Lagos, NG', device: 'Safari sur iPhone', time: 'Il y a 5j', status: 'bloqué' },
        { action: 'Nouvel appareil', location: 'Bobo-Dioulasso, BF', device: 'Chrome sur Android', time: 'Il y a 1s', status: 'en_cours' }
    ]

    const devices = [
        { name: 'Windows PC - Chrome', location: 'Ouagadougou, BF', lastActive: 'Maintenant', current: true },
        { name: 'iPhone 13 - Safari', location: 'Ouagadougou, BF', lastActive: 'Il y a 2h', current: false },
        { name: 'MacBook Pro - Firefox', location: 'Bobo-Dioulasso, BF', lastActive: 'Il y a 2j', current: false }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Sécurité</h1>
                    <p className="text-gray-600 mt-1">Protégez votre compte et vos investissements</p>
                </div>
                <Button variant="primary">
                    <Shield size={18} className="mr-2" />
                    Vérifier la sécurité
                </Button>
            </div>

            {/* Security Score */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Score de sécurité</h2>
                        <p className="text-green-100 mb-4">Votre compte est bien protégé</p>
                        <Button variant="primary" className="bg-white text-green-700 hover:bg-gray-100">
                            Améliorer
                        </Button>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-2">
                            <span className="text-3xl font-bold">{securityScore}%</span>
                        </div>
                        <p className="text-sm text-green-100">Bon niveau</p>
                    </div>
                </div>
            </motion.div>

            {/* Security Checks Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Password Change */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">Changer le mot de passe</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe actuel
                            </label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                />
                                <button
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nouveau mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20"
                                />
                                <button
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Password Strength */}
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600">Force du mot de passe</span>
                                <span className="text-green-600">Forte</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div className="w-3/4 h-2 bg-green-600 rounded-full" />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Utilisez au moins 8 caractères avec des majuscules, minuscules et chiffres
                            </p>
                        </div>

                        <Button variant="primary" className="w-full">
                            Mettre à jour le mot de passe
                        </Button>
                    </div>
                </motion.div>

                {/* Two Factor Authentication */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">Double authentification</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <Fingerprint className="text-green-600" size={24} />
                                <div>
                                    <p className="font-medium">Authentification à deux facteurs</p>
                                    <p className="text-sm text-gray-500">
                                        {twoFactorEnabled ? 'Protection active' : 'Protection supplémentaire'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactorEnabled ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>

                        {twoFactorEnabled && (
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Smartphone size={18} className="text-gray-400" />
                                        <span className="text-sm">Application d'authentification</span>
                                    </div>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                        Activé
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Mail size={18} className="text-gray-400" />
                                        <span className="text-sm">Email de secours</span>
                                    </div>
                                    <Button variant="ghost" size="sm">Configurer</Button>
                                </div>
                            </div>
                        )}

                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-medium text-blue-700 mb-2">Méthodes de récupération</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-blue-600">Email de secours</span>
                                    <span className="text-blue-600">•••••@gmail.com</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-blue-600">Téléphone</span>
                                    <span className="text-blue-600">+226 ** ** ** 56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Active Sessions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Sessions actives</h2>
                    <Button variant="outline" size="sm">
                        Déconnecter tous les appareils
                    </Button>
                </div>

                <div className="space-y-4">
                    {devices.map((device, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <Smartphone size={18} className="text-gray-400" />
                                <div>
                                    <p className="font-medium">
                                        {device.name}
                                        {device.current && (
                                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                                Appareil actuel
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {device.location} • Dernière activité : {device.lastActive}
                                    </p>
                                </div>
                            </div>
                            {!device.current && (
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                    Déconnecter
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Recent Activity & Security Logs */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">Activité récente</h2>

                    <div className="space-y-3">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-2 h-2 rounded-full mt-2 ${activity.status === 'succès' ? 'bg-green-500' :
                                        activity.status === 'bloqué' ? 'bg-red-500' : 'bg-yellow-500'
                                    }`} />
                                <div className="flex-1">
                                    <p className="font-medium text-sm">{activity.action}</p>
                                    <p className="text-xs text-gray-500">{activity.location} • {activity.device}</p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Security Tips */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">Conseils de sécurité</h2>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
                            <p className="text-sm text-gray-600">
                                Ne partagez jamais vos mots de passe ou codes de vérification
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
                            <p className="text-sm text-gray-600">
                                Activez la double authentification pour plus de sécurité
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
                            <p className="text-sm text-gray-600">
                                Vérifiez régulièrement vos appareils connectés
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0" />
                            <p className="text-sm text-gray-600">
                                Méfiez-vous des emails suspects demandant vos informations
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}