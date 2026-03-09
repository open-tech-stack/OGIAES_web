// app/dashboard/layout.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './composants/Sidebar'
import Header from './composants/Header'
import Footer from './composants/Footer'

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.lightBg }}>
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className={`flex-1 transition-all duration-300 flex flex-col ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-4 sm:p-5 lg:p-6"
          >
            {children}
          </motion.main>

          <Footer />
        </div>
      </div>
    </div>
  )
}