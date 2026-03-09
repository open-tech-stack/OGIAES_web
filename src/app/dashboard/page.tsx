// app/dashboard/page.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Eye
} from 'lucide-react'
import Button from '@/components/ui/Button'
import StatsCards from './composants/StatsCards'
import Link from 'next/link'

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

export default function DashboardPage() {
  const stats = [
    {
      title: "Solde Total",
      value: "125 000 FCFA",
      change: "+12.5%",
      trend: "up" as const,
      icon: <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Investissements",
      value: "85 000 FCFA",
      change: "+8.2%",
      trend: "up" as const,
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "En Attente",
      value: "15 000 FCFA",
      change: "-2.3%",
      trend: "down" as const,
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Projets Financés",
      value: "3",
      change: "+1",
      trend: "up" as const,
      icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ]

  const recentInvestments = [
    {
      project: "Agropastoral du Sahel",
      amount: "25 000 FCFA",
      date: "15 Jan 2024",
      status: "Actif",
      return: "+8%"
    },
    {
      project: "Énergie Solaire Kaya",
      amount: "15 000 FCFA",
      date: "10 Jan 2024",
      status: "Actif",
      return: "+12%"
    },
    {
      project: "Transformation Céréales",
      amount: "45 000 FCFA",
      date: "05 Jan 2024",
      status: "En attente",
      return: "-"
    }
  ]

  const projects = [
    {
      name: "Agropastoral du Sahel",
      category: "Agriculture",
      progress: 75,
      funded: "75M FCFA",
      target: "100M FCFA",
      investors: 234
    },
    {
      name: "Énergie Solaire Kaya",
      category: "Énergie",
      progress: 45,
      funded: "45M FCFA",
      target: "100M FCFA",
      investors: 156
    },
    {
      name: "Transformation Céréales",
      category: "Industrie",
      progress: 90,
      funded: "90M FCFA",
      target: "100M FCFA",
      investors: 312
    }
  ]

  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: colors.secondaryDark }}>
            Bienvenue, Amadou 👋
          </h1>
          <p className="text-xs sm:text-sm mt-0.5 sm:mt-1" style={{ color: colors.accent }}>
            Voici un résumé de vos investissements
          </p>
        </div>
        <Link href="/investissements/nouveau" className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-2.5"
            style={{ background: colors.primary, color: colors.secondaryDark }}
          >
            Nouvel Investissement
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {/* Recent Investments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-5 lg:p-6 border"
          style={{ borderColor: `${colors.primary}20` }}
        >
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold" style={{ color: colors.secondaryDark }}>
              Investissements Récents
            </h2>
            <Link href="/dashboard/investissements">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm" style={{ color: colors.accent }}>
                Voir tout
              </Button>
            </Link>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {recentInvestments.map((inv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg transition-colors gap-2 sm:gap-0"
                style={{ backgroundColor: colors.lightBg }}
              >
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm" style={{ color: colors.secondaryDark }}>{inv.project}</h3>
                  <p className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>{inv.date}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-3">
                  <div className="text-right">
                    <p className="font-semibold text-xs sm:text-sm" style={{ color: colors.secondaryDark }}>{inv.amount}</p>
                    <p className="text-[10px] sm:text-xs" style={{
                      color: inv.status === "Actif" ? 'green' : colors.primary
                    }}>
                      {inv.status}
                    </p>
                  </div>
                  {inv.return !== "-" && (
                    <div className="flex items-center text-green-600">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] sm:text-xs font-medium">{inv.return}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-5 lg:p-6 border"
          style={{ borderColor: `${colors.primary}20` }}
        >
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
            Actions Rapides
          </h2>

          <div className="space-y-2 sm:space-y-3">
            <Link href="/projets">
              <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2 sm:py-2.5"
                style={{ borderColor: colors.accent, color: colors.accent }}>
                <Eye className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                Voir tous les projets
              </Button>
            </Link>
            <Link href="/simulateur">
              <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2 sm:py-2.5"
                style={{ borderColor: colors.accent, color: colors.accent }}>
                <TrendingUp className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                Simuler un investissement
              </Button>
            </Link>
            <Link href="/versements">
              <Button variant="outline" className="w-full justify-start text-xs sm:text-sm py-2 sm:py-2.5"
                style={{ borderColor: colors.accent, color: colors.accent }}>
                <Wallet className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                Effectuer un versement
              </Button>
            </Link>
          </div>

          <div className="mt-4 sm:mt-5 lg:mt-6 p-3 sm:p-4 rounded-lg" style={{ backgroundColor: `${colors.primary}15` }}>
            <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: colors.secondaryDark }}>
              Prochain versement
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.primary }}>5 000 FCFA</p>
            <p className="text-[10px] sm:text-xs mt-1" style={{ color: colors.accent }}>
              Prévu le 25 Jan 2024
            </p>
            <Link href="/versements/effectuer">
              <Button size="sm" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm py-1.5 sm:py-2"
                style={{ background: colors.primary, color: colors.secondaryDark }}>
                Effectuer maintenant
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-5 lg:p-6 border"
        style={{ borderColor: `${colors.primary}20` }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-5 lg:mb-6 gap-2 sm:gap-0">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold" style={{ color: colors.secondaryDark }}>
            Projets en Cours
          </h2>
          <Link href="/projets">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm" style={{ color: colors.accent }}>
              Explorer tous les projets
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="border rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm" style={{ color: colors.secondaryDark }}>{project.name}</h3>
                  <p className="text-[10px] sm:text-xs" style={{ color: colors.accent }}>{project.category}</p>
                </div>
                <span className="text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${colors.primary}15`, color: colors.secondaryDark }}>
                  {project.investors} invest.
                </span>
              </div>

              <div className="mt-3 sm:mt-4">
                <div className="flex justify-between text-[10px] sm:text-xs mb-1">
                  <span style={{ color: colors.accent }}>Progression</span>
                  <span className="font-semibold" style={{ color: colors.secondaryDark }}>{project.progress}%</span>
                </div>
                <div className="w-full rounded-full h-1.5 sm:h-2" style={{ backgroundColor: colors.lightBg }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1.5 sm:h-2 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs mt-2">
                  <span style={{ color: colors.accent }}>{project.funded}</span>
                  <span style={{ color: colors.accent }}>{project.target}</span>
                </div>
              </div>

              <Link href={`/projets/${index}`}>
                <Button variant="outline" size="sm" className="w-full mt-3 sm:mt-4 text-[10px] sm:text-xs py-1.5"
                  style={{ borderColor: colors.primary, color: colors.primary }}>
                  Investir
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}