'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Users,
    MessageCircle,
    Award,
    TrendingUp,
    Star,
    MapPin,
    Calendar,
    Heart,
    Share2,
    ThumbsUp,
    Eye,
    UserPlus,
    Crown,
    Medal
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CommunautePage() {
    const [activeTab, setActiveTab] = useState('feed')

    const stats = [
        { label: 'Membres actifs', value: '10,234', change: '+234' },
        { label: 'Investisseurs', value: '5,678', change: '+156' },
        { label: 'Projets financés', value: '89', change: '+12' },
        { label: 'Discussions', value: '1,456', change: '+89' }
    ]

    const topInvestors = [
        { rank: 1, name: 'Ibrahim Traoré', amount: '2.5M FCFA', projects: 12, avatar: 'IT', badge: 'crown' },
        { rank: 2, name: 'Aminata Sankara', amount: '1.8M FCFA', projects: 9, avatar: 'AS', badge: 'medal' },
        { rank: 3, name: 'Moussa Diallo', amount: '1.5M FCFA', projects: 7, avatar: 'MD', badge: 'medal' },
        { rank: 4, name: 'Fatimata Ouédraogo', amount: '1.2M FCFA', projects: 6, avatar: 'FO', badge: 'none' },
        { rank: 5, name: 'Adama Koné', amount: '980K FCFA', projects: 5, avatar: 'AK', badge: 'none' }
    ]

    const discussions = [
        {
            id: 1,
            author: 'Ibrahim Traoré',
            avatar: 'IT',
            time: 'Il y a 2h',
            title: 'Stratégies d\'investissement dans l\'agriculture',
            content: 'Quels sont les meilleurs secteurs agricoles pour investir au Burkina ? Je pense que l\'agropastoral a un fort potentiel...',
            likes: 45,
            comments: 23,
            views: 234
        },
        {
            id: 2,
            author: 'Aminata Sankara',
            avatar: 'AS',
            time: 'Il y a 5h',
            title: 'Retour d\'expérience - Projet Énergie Solaire',
            content: 'Après 6 mois d\'investissement dans le solaire à Kaya, voici mon analyse des rendements...',
            likes: 78,
            comments: 34,
            views: 567
        },
        {
            id: 3,
            author: 'Moussa Diallo',
            avatar: 'MD',
            time: 'Hier',
            title: 'Question sur les dividendes',
            content: 'Comment sont calculés les dividendes mensuels ? Est-ce que quelqu\'un peut m\'expliquer le processus ?',
            likes: 23,
            comments: 45,
            views: 345
        }
    ]

    const events = [
        {
            title: 'Webinaire - Investir dans l\'AES',
            date: '25 Jan 2024',
            time: '18:00 GMT',
            participants: 234,
            type: 'webinar'
        },
        {
            title: 'Rencontre investisseurs - Ouagadougou',
            date: '30 Jan 2024',
            time: '15:00 GMT',
            participants: 89,
            type: 'meetup'
        },
        {
            title: 'Présentation nouveaux projets',
            date: '05 Fév 2024',
            time: '17:00 GMT',
            participants: 156,
            type: 'presentation'
        }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Communauté</h1>
                    <p className="text-gray-600 mt-1">Échangez avec d'autres investisseurs</p>
                </div>
                <Button variant="primary">
                    <MessageCircle size={18} className="mr-2" />
                    Nouvelle discussion
                </Button>
            </div>

            {/* Stats */}
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
                        <p className="text-xs text-green-600 mt-1">+{stat.change} cette semaine</p>
                    </motion.div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Feed */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs */}
                    <div className="bg-white rounded-xl shadow-sm p-1 flex">
                        {['feed', 'discussions', 'events'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab
                                        ? 'bg-green-600 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {tab === 'feed' && 'Fil d\'actualité'}
                                {tab === 'discussions' && 'Discussions'}
                                {tab === 'events' && 'Événements'}
                            </button>
                        ))}
                    </div>

                    {/* Posts */}
                    {discussions.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            {/* Author */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        {post.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{post.author}</h3>
                                        <p className="text-xs text-gray-500">{post.time}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                    <UserPlus size={16} />
                                </Button>
                            </div>

                            {/* Content */}
                            <h4 className="font-semibold mb-2">{post.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">{post.content}</p>

                            {/* Actions */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                                    <ThumbsUp size={16} />
                                    <span className="text-sm">{post.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                                    <MessageCircle size={16} />
                                    <span className="text-sm">{post.comments}</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                                    <Share2 size={16} />
                                </button>
                                <span className="flex items-center space-x-1 text-gray-400 ml-auto">
                                    <Eye size={16} />
                                    <span className="text-sm">{post.views}</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Top Investors */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Top Investisseurs</h2>
                            <Crown size={20} className="text-yellow-500" />
                        </div>

                        <div className="space-y-4">
                            {topInvestors.map((investor) => (
                                <div key={investor.rank} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${investor.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                                                investor.rank === 2 ? 'bg-gray-100 text-gray-700' :
                                                    investor.rank === 3 ? 'bg-orange-100 text-orange-700' :
                                                        'bg-gray-50 text-gray-600'
                                            }`}>
                                            {investor.rank}
                                        </span>
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                                            {investor.avatar}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{investor.name}</p>
                                            <p className="text-xs text-gray-500">{investor.projects} projets</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-green-600 text-sm">{investor.amount}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-xl font-semibold mb-4">Événements à venir</h2>

                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                    <h3 className="font-semibold text-sm mb-2">{event.title}</h3>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="flex items-center text-gray-500">
                                            <Calendar size={12} className="mr-1" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center text-gray-500">
                                            <Users size={12} className="mr-1" />
                                            {event.participants}
                                        </span>
                                    </div>
                                    <Button size="sm" className="w-full mt-2">
                                        Participer
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white"
                    >
                        <h3 className="font-semibold mb-2">Rejoignez la discussion</h3>
                        <p className="text-sm text-green-100 mb-4">
                            Partagez votre expérience et apprenez des autres investisseurs
                        </p>
                        <Button variant="primary" className="w-full bg-white text-green-700 hover:bg-gray-100">
                            Commencer
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}