'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  PieChart,
  TrendingUp,
  Wallet,
  History,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Shield
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Tableau de bord', href: '/dashboard' },
    { icon: <PieChart size={20} />, label: 'Portefeuille', href: '/dashboard/portefeuille' },
    { icon: <TrendingUp size={20} />, label: 'Investissements', href: '/dashboard/investissements' },
    { icon: <Target size={20} />, label: 'Projets', href: '/dashboard/projets' },
    { icon: <Wallet size={20} />, label: 'Versements', href: '/dashboard/versements' },
    { icon: <History size={20} />, label: 'Historique', href: '/dashboard/historique' },
    { icon: <Users size={20} />, label: 'Communauté', href: '/dashboard/communaute' },
    { icon: <Shield size={20} />, label: 'Sécurité', href: '/dashboard/securite' },
    { icon: <Settings size={20} />, label: 'Paramètres', href: '/dashboard/parametres' },
  ]

  return (
    <motion.aside
      initial={{ width: isOpen ? 256 : 80 }}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-screen bg-white border-r border-gray-100 shadow-sm z-50"
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100">
        {isOpen ? (
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-xl text-gray-900">OGIAES</span>
          </Link>
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">O</span>
          </div>
        )}
        
        <button
          onClick={onToggle}
          className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`
                  flex items-center px-3 py-2.5 rounded-lg transition-colors relative
                  ${isActive 
                    ? 'bg-green-50 text-green-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <span className={isActive ? 'text-green-600' : 'text-gray-400'}>
                  {item.icon}
                </span>
                
                {isOpen && (
                  <span className="ml-3 text-sm font-medium">{item.label}</span>
                )}
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-6 bg-green-600 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center px-3 py-2.5 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} className="text-gray-400" />
          {isOpen && <span className="ml-3 text-sm font-medium">Déconnexion</span>}
        </motion.button>
      </div>
    </motion.aside>
  )
}