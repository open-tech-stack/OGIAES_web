'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './composants/Sidebar'
import Header from './composants/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const cn = (...classes: (string | boolean | undefined)[]): string => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={cn(
        "transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-20"
      )}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}