'use client'

import { motion } from 'framer-motion'
import { 
  Wallet, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Eye
} from 'lucide-react'
import Button from '@/components/ui/Button'
import StatsCards from './composants/StatsCards'

export default function DashboardPage() {
  const stats = [
    {
      title: "Solde Total",
      value: "125 000 FCFA",
      change: "+12.5%",
      trend: "up",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Investissements",
      value: "85 000 FCFA",
      change: "+8.2%",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "En Attente",
      value: "15 000 FCFA",
      change: "-2.3%",
      trend: "down",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Projets Financés",
      value: "3",
      change: "+1",
      trend: "up",
      icon: <CheckCircle className="w-6 h-6" />
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenue, Amadou 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Voici un résumé de vos investissements
          </p>
        </div>
        <Button>
          Nouvel Investissement
        </Button>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Investments */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Investissements Récents</h2>
            <Button variant="ghost" size="sm">
              Voir tout
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentInvestments.map((inv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{inv.project}</h3>
                  <p className="text-sm text-gray-500">{inv.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{inv.amount}</p>
                  <p className={cn(
                    "text-sm",
                    inv.status === "Actif" ? "text-green-600" : "text-yellow-600"
                  )}>
                    {inv.status}
                  </p>
                </div>
                {inv.return !== "-" && (
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">{inv.return}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Actions Rapides</h2>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Eye className="mr-2 w-4 h-4" />
              Voir tous les projets
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="mr-2 w-4 h-4" />
              Simuler un investissement
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Wallet className="mr-2 w-4 h-4" />
              Effectuer un versement
            </Button>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-700 mb-2">
              Prochain versement
            </h3>
            <p className="text-2xl font-bold text-green-600">5 000 FCFA</p>
            <p className="text-sm text-green-600 mt-1">
              Prévu le 25 Jan 2024
            </p>
            <Button size="sm" className="w-full mt-4">
              Effectuer maintenant
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Projets en Cours</h2>
          <Button variant="ghost" size="sm">
            Explorer tous les projets
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="border rounded-lg p-4 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {project.investors} invest.
                </span>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progression</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-green-600 h-2 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">{project.funded}</span>
                  <span className="text-gray-500">{project.target}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                Investir
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}