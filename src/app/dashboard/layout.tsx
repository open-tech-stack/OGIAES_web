'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './composants/Sidebar'
import Header from './composants/Header'
import Footer from './composants/Footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className={`flex-1 transition-all duration-300 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-20'
          }`}>
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-6"
          >
            {children}
          </motion.main>

          <Footer />
        </div>
      </div>
    </div>
  )
}