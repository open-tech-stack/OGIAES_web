// app/dashboard/composants/StatsCards.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

// Vos nouvelles couleurs
const colors = {
  primary: '#F5C505',
  primaryDark: '#F3BB00',
  secondary: '#1A05A2',
  secondaryDark: '#03045F',
  accent: '#340DA4',
  accentDark: '#42009E',
  goldLight: '#E1A624',
  lightBg: '#F8F9FF'
}

interface Stat {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

interface StatsCardsProps {
  stats: Stat[]
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-5 lg:p-6 border"
          style={{ borderColor: `${colors.primary}20` }}
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: colors.lightBg }}>
              <span style={{ color: colors.accent }}>{stat.icon}</span>
            </div>
            <div className={`flex items-center space-x-1 text-xs  ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
              {stat.trend === 'up' ? <ArrowUpRight size={14}  /> : <ArrowDownRight size={14} className="sm:size-16" />}
              <span>{stat.change}</span>
            </div>
          </div>

          <h3 className="text-xs sm:text-sm mb-1" style={{ color: colors.accent }}>{stat.title}</h3>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold" style={{ color: colors.secondaryDark }}>{stat.value}</p>
        </motion.div>
      ))}
    </div>
  )
}