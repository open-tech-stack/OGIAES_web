'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const notifications = [
    {
      id: 1,
      title: 'Nouvel investissement',
      message: 'Votre investissement de 25 000 FCFA a été confirmé',
      time: 'Il y a 5 min',
      read: false
    },
    {
      id: 2,
      title: 'Projet financé',
      message: 'Le projet Agropastoral du Sahel a atteint 75%',
      time: 'Il y a 2h',
      read: true
    },
    {
      id: 3,
      title: 'Versement effectué',
      message: 'Votre versement mensuel a été traité',
      time: 'Il y a 1 jour',
      read: true
    }
  ]

  return (
    <header className="h-20 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>

        {/* Search Bar */}
        <motion.div
          animate={{ width: searchFocused ? 400 : 300 }}
          className="relative"
        >
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un projet, un investissement..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
          />
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Bell size={18} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold">Notifications</h3>
                  <Button variant="ghost" size="sm">Marquer tout lu</Button>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <motion.div
                      key={notif.id}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className={`p-4 border-b border-gray-50 cursor-pointer ${
                        !notif.read ? 'bg-green-50/50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{notif.title}</h4>
                        <span className="text-xs text-gray-400">{notif.time}</span>
                      </div>
                      <p className="text-xs text-gray-600">{notif.message}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="p-3 text-center border-t border-gray-100">
                  <Button variant="ghost" size="sm" className="w-full">
                    Voir toutes les notifications
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-medium">Amadou Diallo</p>
              <p className="text-xs text-gray-500">Membre depuis 2024</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </motion.button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-100">
                  <p className="font-medium">Amadou Diallo</p>
                  <p className="text-xs text-gray-500">amadou.diallo@email.com</p>
                </div>
                
                <div className="p-2">
                  <Link href="/dashboard/profil">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50"
                    >
                      <User size={16} className="text-gray-400" />
                      <span className="text-sm">Mon profil</span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/dashboard/parametres">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50"
                    >
                      <Settings size={16} className="text-gray-400" />
                      <span className="text-sm">Paramètres</span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/aide">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50"
                    >
                      <HelpCircle size={16} className="text-gray-400" />
                      <span className="text-sm">Centre d'aide</span>
                    </motion.div>
                  </Link>
                  
                  <div className="border-t border-gray-100 my-2" />
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    <span className="text-sm">Déconnexion</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}