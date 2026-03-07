'use client'

import { motion } from 'framer-motion'
import {
  Users,
  MessageCircle,
  Calendar,
  Award,
  TrendingUp,
  MapPin,
  Star,
  Heart,
  Share2,
  ThumbsUp,
  MessageSquare,
  Eye,
  UserPlus,
  Globe,
  Clock,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

// Fonction cn simple
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export default function CommunautePage() {
  const stats = [
    { value: '50 000+', label: 'Membres actifs', icon: <Users className="w-6 h-6" />, color: '#1B3B4F' },
    { value: '500+', label: 'Projets financés', icon: <TrendingUp className="w-6 h-6" />, color: '#2C5F7C' },
    { value: '3 000+', label: 'Discussions', icon: <MessageCircle className="w-6 h-6" />, color: '#4A7C9C' },
    { value: '15+', label: 'Événements/an', icon: <Calendar className="w-6 h-6" />, color: '#6B9AB8' }
  ]

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: 'Investisseure',
      location: 'Ouagadougou, Burkina Faso',
      avatar: 'AD',
      content: 'Grâce à OGIAES, j\'ai pu investir dans des projets agricoles qui transforment ma région. Voir l\'impact concret de mon épargne est incroyablement gratifiant.',
      rating: 5,
      invested: '1.2M FCFA',
      projects: 4
    },
    {
      name: 'Ibrahim Traoré',
      role: 'Porteur de projet',
      location: 'Bobo-Dioulasso, Burkina Faso',
      avatar: 'IT',
      content: 'La communauté OGIAES a cru en notre projet solaire. Aujourd\'hui, 20 villages sont électrifiés grâce à leurs investissements. Un partenariat gagnant-gagnant.',
      rating: 5,
      funded: '45M FCFA',
      investors: 156
    },
    {
      name: 'Fatoumata Maïga',
      role: 'Investisseure',
      location: 'Bamako, Mali',
      avatar: 'FM',
      content: 'Je recommande OGIAES à tous ceux qui veulent donner du sens à leur épargne. La plateforme est transparente, l\'équipe réactive et les projets de qualité.',
      rating: 5,
      invested: '850K FCFA',
      projects: 3
    },
    {
      name: 'Mamadou Koné',
      role: 'Expert partenaire',
      location: 'Abidjan, Côte d\'Ivoire',
      avatar: 'MK',
      content: 'En tant qu\'expert technique, j\'accompagne la sélection des projets. La rigueur et la transparence du processus sont remarquables.',
      rating: 5,
      expertise: 'Énergie renouvelable'
    }
  ]

  const forumTopics = [
    {
      title: 'L\'agriculture biologique au Sahel : opportunités et défis',
      author: 'Amadou Diallo',
      replies: 24,
      views: 342,
      lastActivity: 'Il y a 2h',
      category: 'Agriculture',
      pinned: true
    },
    {
      title: 'Retour d\'expérience : mon premier investissement dans le solaire',
      author: 'Marie Sawadogo',
      replies: 18,
      views: 256,
      lastActivity: 'Il y a 5h',
      category: 'Témoignages',
      pinned: false
    },
    {
      title: 'Comment évaluer la rentabilité d\'un projet ?',
      author: 'Ousmane Barry',
      replies: 32,
      views: 489,
      lastActivity: 'Il y a 1j',
      category: 'Conseils',
      pinned: true
    },
    {
      title: 'Présentation du nouveau projet agro-industriel de Kaya',
      author: 'Équipe OGIAES',
      replies: 45,
      views: 678,
      lastActivity: 'Il y a 2j',
      category: 'Annonces',
      pinned: true
    }
  ]

  const upcomingEvents = [
    {
      title: 'Webinaire : Investir dans l\'énergie solaire',
      date: '15 Mars 2024',
      time: '18h00 GMT',
      speaker: 'Dr. Karim Ouédraogo',
      attendees: 156,
      image: '🔆'
    },
    {
      title: 'Rencontre des investisseurs - Ouagadougou',
      date: '22 Mars 2024',
      time: '16h00 GMT',
      speaker: 'Équipe OGIAES',
      attendees: 89,
      image: '🤝'
    },
    {
      title: 'Visite de projet : Ferme avicole de Kaya',
      date: '5 Avril 2024',
      time: '09h00 GMT',
      speaker: 'Ibrahim Traoré',
      attendees: 45,
      image: '🏭'
    }
  ]

  const communityLeaders = [
    {
      name: 'Dr. Karim Ouédraogo',
      role: 'Expert énergie',
      contributions: 345,
      followers: 1234,
      avatar: 'KO',
      badge: 'Expert'
    },
    {
      name: 'Aminata Diallo',
      role: 'Ambassadrice',
      contributions: 289,
      followers: 987,
      avatar: 'AD',
      badge: 'Ambassadeur'
    },
    {
      name: 'Ousmane Barry',
      role: 'Conseiller finance',
      contributions: 234,
      followers: 756,
      avatar: 'OB',
      badge: 'Mentor'
    }
  ]

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, #F5F0E6, white)'
    }}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                style={{
                  backgroundColor: '#F5F0E6',
                  boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.2)'
                }}
              >
                <Users className="w-10 h-10" style={{ color: '#D4AF37' }} />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B3B4F' }}>
                Communauté OGIAES
              </h1>

              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#4A7C9C' }}>
                Rejoignez une communauté passionnée qui construit ensemble l'avenir économique de l'AES
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    style={{ backgroundColor: '#D4AF37', color: '#1B3B4F' }}
                  >
                    Rejoindre la communauté
                    <UserPlus className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/communaute/forum">
                  <Button
                    variant="outline"
                    size="lg"
                    style={{ borderColor: '#2C5F7C', color: '#2C5F7C' }}
                  >
                    Explorer le forum
                    <MessageCircle className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border"
                style={{
                  borderColor: '#F5F0E6',
                  boxShadow: '0 4px 20px rgba(27, 59, 79, 0.05)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    backgroundColor: '#F5F0E6',
                    color: stat.color
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#1B3B4F' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: '#4A7C9C' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1B3B4F' }}>
              Ils nous font confiance
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto" style={{ color: '#4A7C9C' }}>
              Découvrez les témoignages de membres de la communauté
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{
                          background: 'linear-gradient(135deg, #1B3B4F 0%, #2C5F7C 100%)'
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: '#1B3B4F' }}>{testimonial.name}</h3>
                        <p className="text-sm" style={{ color: '#4A7C9C' }}>{testimonial.role}</p>
                        <p className="text-xs flex items-center mt-1" style={{ color: '#6B9AB8' }}>
                          <MapPin size={12} className="mr-1" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex" style={{ color: '#D4AF37' }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="mb-4 italic" style={{ color: '#2C5F7C' }}>"{testimonial.content}"</p>

                  <div className="flex flex-wrap gap-2 text-sm border-t pt-4" style={{ borderColor: '#F5F0E6' }}>
                    {'invested' in testimonial && (
                      <>
                        <span className="px-2 py-1 rounded-full" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                          Investi: {testimonial.invested}
                        </span>
                        <span className="px-2 py-1 rounded-full" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                          {testimonial.projects} projets
                        </span>
                      </>
                    )}
                    {'funded' in testimonial && (
                      <>
                        <span className="px-2 py-1 rounded-full" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                          Collecté: {testimonial.funded}
                        </span>
                        <span className="px-2 py-1 rounded-full" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                          {testimonial.investors} investisseurs
                        </span>
                      </>
                    )}
                    {'expertise' in testimonial && (
                      <span className="px-2 py-1 rounded-full" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                        {testimonial.expertise}
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Forum Preview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: '#1B3B4F' }}>Forum de discussion</h2>
              <p style={{ color: '#4A7C9C' }}>Échangez avec la communauté</p>
            </div>
            <Link href="/communaute/forum">
              <Button variant="ghost" style={{ color: '#2C5F7C' }}>
                Voir tout
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {forumTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/communaute/forum/${index}`}>
                  <Card hover className="p-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-xs font-medium",
                            topic.category === 'Agriculture' && "bg-[#1B3B4F] text-white",
                            topic.category === 'Témoignages' && "bg-[#2C5F7C] text-white",
                            topic.category === 'Conseils' && "bg-[#4A7C9C] text-white",
                            topic.category === 'Annonces' && "bg-[#D4AF37] text-[#1B3B4F]"
                          )}>
                            {topic.category}
                          </span>
                          {topic.pinned && (
                            <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: '#F5F0E6', color: '#1B3B4F' }}>
                              Épinglé
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold mb-1 group-hover:text-[#D4AF37] transition-colors" style={{ color: '#1B3B4F' }}>
                          {topic.title}
                        </h3>
                        <p className="text-sm" style={{ color: '#4A7C9C' }}>
                          Par {topic.author} • {topic.lastActivity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm" style={{ color: '#4A7C9C' }}>
                        <span className="flex items-center">
                          <MessageSquare size={16} className="mr-1" />
                          {topic.replies}
                        </span>
                        <span className="flex items-center">
                          <Eye size={16} className="mr-1" />
                          {topic.views}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Leaders */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1B3B4F' }}>
            Membres actifs de la communauté
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {communityLeaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E7B2 100%)',
                        color: '#1B3B4F'
                      }}
                    >
                      {leader.avatar}
                    </div>
                    <span
                      className="absolute top-0 right-1/2 transform translate-x-12 text-xs font-semibold px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: '#D4AF37',
                        color: '#1B3B4F'
                      }}
                    >
                      {leader.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold" style={{ color: '#1B3B4F' }}>{leader.name}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4A7C9C' }}>{leader.role}</p>
                  <div className="flex justify-center space-x-4 text-sm" style={{ color: '#4A7C9C' }}>
                    <span>
                      <MessageSquare size={14} className="inline mr-1" />
                      {leader.contributions}
                    </span>
                    <span>
                      <Users size={14} className="inline mr-1" />
                      {leader.followers}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    style={{ borderColor: '#2C5F7C', color: '#2C5F7C' }}
                  >
                    Suivre
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom, white, #F5F0E6)'
      }}>
        <Container>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: '#1B3B4F' }}>Événements à venir</h2>
              <p style={{ color: '#4A7C9C' }}>Participez aux rencontres de la communauté</p>
            </div>
            <Link href="/communaute/evenements">
              <Button variant="ghost" style={{ color: '#2C5F7C' }}>
                Tous les événements
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full" >
                  <div className="text-4xl mb-4">{event.image}</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1B3B4F' }}>{event.title}</h3>
                  <div className="space-y-2 text-sm mb-4" style={{ color: '#4A7C9C' }}>
                    <p className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {event.date} à {event.time}
                    </p>
                    <p className="flex items-center">
                      <Users size={14} className="mr-2" />
                      {event.attendees} participants
                    </p>
                    <p className="flex items-center">
                      <Star size={14} className="mr-2" />
                      {event.speaker}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                  >
                    S'inscrire
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div
            className="rounded-3xl p-12 text-center text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1B3B4F 0%, #2C5F7C 100%)',
            }}
          >
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Rejoignez la communauté
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F5F0E6' }}>
                Ensemble, construisons l'avenir économique de l'AES
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    style={{
                      backgroundColor: '#D4AF37',
                      color: '#1B3B4F',
                      border: 'none'
                    }}
                  >
                    Créer mon compte
                  </Button>
                </Link>
                <Link href="/communaute/forum">
                  <Button
                    variant="outline"
                    size="lg"
                    style={{
                      borderColor: '#F5F0E6',
                      color: '#F5F0E6'
                    }}
                  >
                    Visiter le forum
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}