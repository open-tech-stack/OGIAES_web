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

// Fonction cn simple
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export default function CommunautePage() {
  const stats = [
    { value: '50 000+', label: 'Membres actifs', icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: colors.secondaryDark },
    { value: '500+', label: 'Projets financés', icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, color: colors.secondary },
    { value: '3 000+', label: 'Discussions', icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />, color: colors.accent },
    { value: '15+', label: 'Événements/an', icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />, color: colors.accentDark }
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
    <div className="min-h-screen bg-linear-to-b from-[#F8F9FF] to-white">
      {/* Hero Section - Harmonisé */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-b from-[#F8F9FF] to-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-4 sm:mb-6 mx-auto"
                style={{
                  backgroundColor: colors.lightBg,
                  boxShadow: `0 10px 25px -5px ${colors.primary}30`
                }}
              >
                <Users className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                Communauté OGIAES
              </h1>

              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ color: colors.accent }}>
                Rejoignez une communauté passionnée qui construit ensemble l'avenir économique de l'AES
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/auth/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
                    style={{ backgroundColor: colors.primary, color: colors.secondaryDark }}
                  >
                    Rejoindre la communauté
                    <UserPlus className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link href="/communaute/forum" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                    style={{ borderColor: colors.secondary, color: colors.secondary }}
                  >
                    Explorer le forum
                    <MessageCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center border"
                style={{
                  borderColor: `${colors.primary}20`,
                  boxShadow: `0 4px 20px ${colors.secondaryDark}10`
                }}
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3"
                  style={{
                    backgroundColor: colors.lightBg,
                    color: stat.color
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-base sm:text-lg lg:text-2xl font-bold mb-0.5 sm:mb-1" style={{ color: colors.secondaryDark }}>{stat.value}</div>
                <div className="text-xs sm:text-sm" style={{ color: colors.accent }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 lg:mb-4 px-4" style={{ color: colors.secondaryDark }}>
              Ils nous font confiance
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" style={{ color: colors.accent }}>
              Découvrez les témoignages de membres de la communauté
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg"
                        style={{
                          background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)`
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base" style={{ color: colors.secondaryDark }}>{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>{testimonial.role}</p>
                        <p className="text-[10px] sm:text-xs flex items-center mt-0.5 sm:mt-1" style={{ color: colors.accentDark }}>
                          <MapPin size={10} className="sm:size-12 mr-1" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5" style={{ color: colors.primary }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={12} className="sm:size-14" fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="mb-3 sm:mb-4 italic text-xs sm:text-sm" style={{ color: colors.secondary }}>"{testimonial.content}"</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm border-t pt-3 sm:pt-4" style={{ borderColor: `${colors.primary}20` }}>
                    {'invested' in testimonial && (
                      <>
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
                          Investi: {testimonial.invested}
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
                          {testimonial.projects} projets
                        </span>
                      </>
                    )}
                    {'funded' in testimonial && (
                      <>
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
                          Collecté: {testimonial.funded}
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
                          {testimonial.investors} invest.
                        </span>
                      </>
                    )}
                    {'expertise' in testimonial && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
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

      {/* Forum Preview - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 px-4">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>Forum de discussion</h2>
              <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>Échangez avec la communauté</p>
            </div>
            <Link href="/communaute/forum" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto text-sm" style={{ color: colors.secondary }}>
                Voir tout
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-2 sm:space-y-3 px-4">
            {forumTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/communaute/forum/${index}`}>
                  <Card hover className="p-3 sm:p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                          <span className={cn(
                            "px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium",
                            topic.category === 'Agriculture' && `bg-[${colors.secondaryDark}] text-white`,
                            topic.category === 'Témoignages' && `bg-[${colors.secondary}] text-white`,
                            topic.category === 'Conseils' && `bg-[${colors.accent}] text-white`,
                            topic.category === 'Annonces' && `bg-[${colors.primary}] text-[${colors.secondaryDark}]`
                          )}>
                            {topic.category}
                          </span>
                          {topic.pinned && (
                            <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs" style={{ backgroundColor: colors.lightBg, color: colors.secondaryDark }}>
                              Épinglé
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate" style={{ color: colors.secondaryDark }}>
                          {topic.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs truncate" style={{ color: colors.accent }}>
                          Par {topic.author} • {topic.lastActivity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-[10px] sm:text-xs" style={{ color: colors.accent }}>
                        <span className="flex items-center whitespace-nowrap">
                          <MessageSquare size={12} className="sm:size-14 mr-0.5 sm:mr-1" />
                          {topic.replies}
                        </span>
                        <span className="flex items-center whitespace-nowrap">
                          <Eye size={12} className="sm:size-14 mr-0.5 sm:mr-1" />
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

      {/* Community Leaders - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-center px-4" style={{ color: colors.secondaryDark }}>
            Membres actifs de la communauté
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4">
            {communityLeaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-4 sm:p-5 lg:p-6">
                  <div className="relative">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl mx-auto mb-3 sm:mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.goldLight} 100%)`,
                        color: colors.secondaryDark
                      }}
                    >
                      {leader.avatar}
                    </div>
                    <span
                      className="absolute top-0 right-1/2 transform translate-x-8 sm:translate-x-10 lg:translate-x-12 text-[8px] sm:text-[10px] lg:text-xs font-semibold px-1 sm:px-1.5 lg:px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.secondaryDark
                      }}
                    >
                      {leader.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-0.5" style={{ color: colors.secondaryDark }}>{leader.name}</h3>
                  <p className="text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: colors.accent }}>{leader.role}</p>
                  <div className="flex justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm" style={{ color: colors.accent }}>
                    <span>
                      <MessageSquare size={12} className="sm:size-14 inline mr-1" />
                      {leader.contributions}
                    </span>
                    <span>
                      <Users size={12} className="sm:size-14 inline mr-1" />
                      {leader.followers}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 sm:mt-4 text-xs sm:text-sm py-1.5 sm:py-2"
                    style={{ borderColor: colors.secondary, color: colors.secondary }}
                  >
                    Suivre
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Events - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-white to-[#F8F9FF]">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 px-4">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: colors.secondaryDark }}>Événements à venir</h2>
              <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>Participez aux rencontres de la communauté</p>
            </div>
            <Link href="/communaute/evenements" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto text-sm" style={{ color: colors.secondary }}>
                Tous les événements
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full p-4 sm:p-5 lg:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{event.image}</div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: colors.secondaryDark }}>{event.title}</h3>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: colors.accent }}>
                    <p className="flex items-center">
                      <Calendar size={12} className="sm:size-14 mr-1.5 sm:mr-2" />
                      <span className="truncate">{event.date} à {event.time}</span>
                    </p>
                    <p className="flex items-center">
                      <Users size={12} className="sm:size-14 mr-1.5 sm:mr-2" />
                      {event.attendees} participants
                    </p>
                    <p className="flex items-center">
                      <Star size={12} className="sm:size-14 mr-1.5 sm:mr-2" />
                      <span className="truncate">{event.speaker}</span>
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm py-1.5 sm:py-2"
                    style={{ borderColor: colors.primary, color: colors.primary }}
                  >
                    S'inscrire
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div
            className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden mx-4"
            style={{
              background: `linear-gradient(135deg, ${colors.secondaryDark} 0%, ${colors.accent} 100%)`,
            }}
          >
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#F5C505] rounded-full blur-2xl sm:blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#F5C505] rounded-full blur-2xl sm:blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
                Rejoignez la communauté
              </h2>
              <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto" style={{ color: '#F8F9FF' }}>
                Ensemble, construisons l'avenir économique de l'AES
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/auth/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.secondaryDark,
                      border: 'none'
                    }}
                  >
                    Créer mon compte
                  </Button>
                </Link>
                <Link href="/communaute/forum" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                    style={{
                      borderColor: '#F8F9FF',
                      color: '#F8F9FF'
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