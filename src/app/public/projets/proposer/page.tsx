'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    CheckCircle,
    AlertCircle,
    Upload,
    FileText,
    Users,
    Target,
    TrendingUp,
    MapPin,
    Calendar,
    DollarSign,
    Image as ImageIcon,
    HelpCircle,
    Lightbulb,
    Shield,
    Clock,
    Send
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'

type Step = 'info' | 'details' | 'documents' | 'review'

export default function ProposerProjetPage() {
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

    const [currentStep, setCurrentStep] = useState<Step>('info')
    const [formData, setFormData] = useState({
        // Étape 1 - Infos de base
        title: '',
        category: '',
        location: '',
        targetAmount: '',
        duration: '',
        // Étape 2 - Détails du projet
        description: '',
        problem: '',
        solution: '',
        team: '',
        expectedImpact: '',
        // Étape 3 - Documents
        businessPlan: null,
        financialProjections: null,
        teamPhotos: null,
        legalDocuments: null
    })

    const steps = [
        { id: 'info', label: 'Informations', icon: <FileText size={20} /> },
        { id: 'details', label: 'Détails', icon: <Target size={20} /> },
        { id: 'documents', label: 'Documents', icon: <Upload size={20} /> },
        { id: 'review', label: 'Validation', icon: <CheckCircle size={20} /> }
    ]

    const categories = [
        { value: 'agriculture', label: 'Agriculture' },
        { value: 'energie', label: 'Énergie' },
        { value: 'industrie', label: 'Industrie' },
        { value: 'technologie', label: 'Technologie' },
        { value: 'infrastructure', label: 'Infrastructure' },
        { value: 'education', label: 'Éducation' },
        { value: 'sante', label: 'Santé' },
        { value: 'autre', label: 'Autre' }
    ]

    const requirements = [
        {
            icon: <Users size={24} />,
            title: 'Équipe solide',
            description: 'Présentez votre équipe et son expérience'
        },
        {
            icon: <Target size={24} />,
            title: 'Objectifs clairs',
            description: 'Définissez des objectifs mesurables et réalistes'
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Viabilité économique',
            description: 'Modèle économique viable et durable'
        },
        {
            icon: <Shield size={24} />,
            title: 'Impact social',
            description: 'Bénéfices concrets pour la communauté'
        }
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                [field]: e.target.files[0]
            })
        }
    }

    const nextStep = () => {
        const stepOrder: Step[] = ['info', 'details', 'documents', 'review']
        const currentIndex = stepOrder.indexOf(currentStep)
        if (currentIndex < stepOrder.length - 1) {
            setCurrentStep(stepOrder[currentIndex + 1])
            window.scrollTo(0, 0)
        }
    }

    const prevStep = () => {
        const stepOrder: Step[] = ['info', 'details', 'documents', 'review']
        const currentIndex = stepOrder.indexOf(currentStep)
        if (currentIndex > 0) {
            setCurrentStep(stepOrder[currentIndex - 1])
            window.scrollTo(0, 0)
        }
    }

    const handleSubmit = () => {
        // Logique d'envoi du formulaire
        console.log('Formulaire soumis:', formData)
    }

    return (
        <div className="min-h-screen bg-[#F8F9FF]">
            {/* Header avec progression - Harmonisé */}
            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-b from-[#F8F9FF] to-white">
                <Container>
                    <Link href="/public/home"
                        className="inline-flex items-center mb-4 sm:mb-6 transition-colors hover:opacity-80"
                        style={{ color: colors.accent }}>
                        <ArrowLeft size={18} className="sm:size-20 mr-2" />
                        <span className="text-sm sm:text-base">Retour aux projets</span>
                    </Link>

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
                                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.primary }} />
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: colors.secondaryDark }}>
                                Proposer un projet
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4" style={{ color: colors.accent }}>
                                Soumettez votre projet à la communauté des investisseurs citoyens
                            </p>
                        </div>
                    </FadeIn>

                    {/* Barre de progression - Responsive */}
                    <div className="max-w-3xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex-1 last:flex-none">
                                    <div className="flex items-center">
                                        <div className={`
                                            flex items-center justify-center 
                                            w-8 h-8 sm:w-10 sm:h-10 
                                            rounded-full border-2 transition-all
                                            text-xs sm:text-sm
                                            ${currentStep === step.id
                                                ? 'border-primary bg-primary text-white'
                                                : steps.findIndex(s => s.id === currentStep) > index
                                                    ? 'border-green-500 bg-green-500 text-white'
                                                    : 'border-gray-300 text-gray-300'
                                            }
                                        `}
                                            style={{
                                                borderColor: currentStep === step.id ? colors.primary :
                                                    steps.findIndex(s => s.id === currentStep) > index ? '#10b981' : '#d1d5db',
                                                backgroundColor: currentStep === step.id ? colors.primary :
                                                    steps.findIndex(s => s.id === currentStep) > index ? '#10b981' : 'transparent'
                                            }}>
                                            {steps.findIndex(s => s.id === currentStep) > index ? (
                                                <CheckCircle size={16} className="sm:size-20" />
                                            ) : (
                                                <span className="scale-75 sm:scale-100">{step.icon}</span>
                                            )}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`
                                                flex-1 h-0.5 mx-1 sm:mx-2 transition-all
                                                ${steps.findIndex(s => s.id === currentStep) > index
                                                    ? 'bg-green-500'
                                                    : 'bg-gray-300'
                                                }
                                            `} />
                                        )}
                                    </div>
                                    <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 block text-center"
                                        style={{ color: colors.accent }}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contenu du formulaire - Responsive */}
            <section className="py-8 sm:py-10 lg:py-12">
                <Container>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        {/* Étape 1 - Informations de base */}
                        {currentStep === 'info' && (
                            <FadeIn>
                                <div className="bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8"
                                    style={{ borderColor: `${colors.primary}20` }}>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6"
                                        style={{ color: colors.secondaryDark }}>
                                        Informations générales
                                    </h2>

                                    <div className="space-y-4 sm:space-y-6">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Titre du projet *
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                placeholder="Ex: Ferme agropastorale du Sahel"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Catégorie *
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            >
                                                <option value="">Sélectionnez une catégorie</option>
                                                {categories.map(cat => (
                                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Localisation *
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                                                    style={{ color: colors.accent }} />
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    placeholder="Ville, Pays"
                                                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2"
                                                    style={{
                                                        borderColor: `${colors.primary}20`,
                                                        color: colors.secondaryDark,
                                                        '--tw-ring-color': colors.primary
                                                    } as any}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div>
                                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                    style={{ color: colors.secondaryDark }}>
                                                    Montant recherché (FCFA) *
                                                </label>
                                                <div className="relative">
                                                    <DollarSign className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                                                        style={{ color: colors.accent }} />
                                                    <input
                                                        type="number"
                                                        name="targetAmount"
                                                        value={formData.targetAmount}
                                                        onChange={handleInputChange}
                                                        placeholder="10 000 000"
                                                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2"
                                                        style={{
                                                            borderColor: `${colors.primary}20`,
                                                            color: colors.secondaryDark,
                                                            '--tw-ring-color': colors.primary
                                                        } as any}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                    style={{ color: colors.secondaryDark }}>
                                                    Durée du projet (mois) *
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                                                        style={{ color: colors.accent }} />
                                                    <input
                                                        type="number"
                                                        name="duration"
                                                        value={formData.duration}
                                                        onChange={handleInputChange}
                                                        placeholder="24"
                                                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2"
                                                        style={{
                                                            borderColor: `${colors.primary}20`,
                                                            color: colors.secondaryDark,
                                                            '--tw-ring-color': colors.primary
                                                        } as any}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Étape 2 - Détails du projet */}
                        {currentStep === 'details' && (
                            <FadeIn>
                                <div className="bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8"
                                    style={{ borderColor: `${colors.primary}20` }}>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6"
                                        style={{ color: colors.secondaryDark }}>
                                        Détails du projet
                                    </h2>

                                    <div className="space-y-4 sm:space-y-6">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Description du projet *
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Décrivez votre projet en détail..."
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Problème identifié *
                                            </label>
                                            <textarea
                                                name="problem"
                                                value={formData.problem}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Quel problème votre projet résout-il ?"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Solution proposée *
                                            </label>
                                            <textarea
                                                name="solution"
                                                value={formData.solution}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Comment votre projet résout-il ce problème ?"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Présentation de l'équipe *
                                            </label>
                                            <textarea
                                                name="team"
                                                value={formData.team}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Présentez les membres de votre équipe et leurs compétences"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                style={{ color: colors.secondaryDark }}>
                                                Impact attendu *
                                            </label>
                                            <textarea
                                                name="expectedImpact"
                                                value={formData.expectedImpact}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Quel sera l'impact concret sur la communauté ? (emplois créés, bénéficiaires, etc.)"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 resize-none"
                                                style={{
                                                    borderColor: `${colors.primary}20`,
                                                    color: colors.secondaryDark,
                                                    '--tw-ring-color': colors.primary
                                                } as any}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Étape 3 - Documents */}
                        {currentStep === 'documents' && (
                            <FadeIn>
                                <div className="bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8"
                                    style={{ borderColor: `${colors.primary}20` }}>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6"
                                        style={{ color: colors.secondaryDark }}>
                                        Documents requis
                                    </h2>

                                    <div className="space-y-4 sm:space-y-6">
                                        {[
                                            { id: 'businessPlan', label: 'Business plan *', accept: '.pdf,.doc,.docx', desc: 'PDF, DOC (max 10 Mo)' },
                                            { id: 'financialProjections', label: 'Prévisions financières *', accept: '.xls,.xlsx,.pdf', desc: 'Excel, PDF (max 10 Mo)' },
                                            { id: 'teamPhotos', label: 'Photos de l\'équipe/projet', accept: 'image/*', desc: 'JPG, PNG (max 5 Mo par image)', icon: <ImageIcon /> },
                                            { id: 'legalDocuments', label: 'Documents légaux', accept: '.pdf', desc: 'Registre de commerce, statuts, etc.' }
                                        ].map((doc) => (
                                            <div key={doc.id}>
                                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                                                    style={{ color: colors.secondaryDark }}>
                                                    {doc.label}
                                                </label>
                                                <div className="border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-opacity-100 transition-colors cursor-pointer"
                                                    style={{ borderColor: `${colors.primary}40` }}>
                                                    <input
                                                        type="file"
                                                        accept={doc.accept}
                                                        multiple={doc.id === 'teamPhotos' || doc.id === 'legalDocuments'}
                                                        onChange={(e) => handleFileUpload(e, doc.id)}
                                                        className="hidden"
                                                        id={doc.id}
                                                    />
                                                    <label htmlFor={doc.id} className="cursor-pointer block">
                                                        {doc.icon || <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2"
                                                            style={{ color: colors.primary }} />}
                                                        <p className="text-xs sm:text-sm font-medium" style={{ color: colors.secondaryDark }}>
                                                            Cliquez pour télécharger
                                                        </p>
                                                        <p className="text-xs mt-1" style={{ color: colors.accent }}>
                                                            {doc.desc}
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Étape 4 - Validation */}
                        {currentStep === 'review' && (
                            <FadeIn>
                                <div className="bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8"
                                    style={{ borderColor: `${colors.primary}20` }}>
                                    <div className="text-center mb-6 sm:mb-8">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                                            style={{ backgroundColor: colors.primary }}>
                                            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.secondaryDark }} />
                                        </div>
                                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2"
                                            style={{ color: colors.secondaryDark }}>
                                            Validation finale
                                        </h2>
                                        <p className="text-sm sm:text-base" style={{ color: colors.accent }}>
                                            Vérifiez les informations avant de soumettre votre projet
                                        </p>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ backgroundColor: colors.lightBg }}>
                                            <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: colors.secondaryDark }}>
                                                Engagements
                                            </h3>
                                            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style={{ color: colors.accent }}>
                                                <li className="flex items-start">
                                                    <CheckCircle size={14} className="sm:size-16 mr-1.5 sm:mr-2 mt-0.5"
                                                        style={{ color: colors.primary }} />
                                                    Je certifie que toutes les informations fournies sont exactes
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle size={14} className="sm:size-16 mr-1.5 sm:mr-2 mt-0.5"
                                                        style={{ color: colors.primary }} />
                                                    Je m'engage à fournir des rapports réguliers aux investisseurs
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle size={14} className="sm:size-16 mr-1.5 sm:mr-2 mt-0.5"
                                                        style={{ color: colors.primary }} />
                                                    J'accepte les conditions générales de la plateforme
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl" style={{ backgroundColor: colors.lightBg }}>
                                            <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: colors.secondaryDark }}>
                                                Prochaines étapes
                                            </h3>
                                            <ol className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm list-decimal list-inside"
                                                style={{ color: colors.accent }}>
                                                <li>Notre équipe examinera votre projet sous 48-72h</li>
                                                <li>Vous serez contacté pour un entretien si nécessaire</li>
                                                <li>Une fois validé, votre projet sera publié sur la plateforme</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Navigation buttons - Responsive */}
                        <div className="flex justify-between mt-4 sm:mt-6 lg:mt-8 gap-3">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 'info'}
                                className="flex-1 sm:flex-none text-sm sm:text-base py-2 sm:py-3"
                                style={{
                                    borderColor: colors.secondaryDark,
                                    color: colors.secondaryDark,
                                    opacity: currentStep === 'info' ? 0.5 : 1
                                }}
                            >
                                Précédent
                            </Button>

                            {currentStep !== 'review' ? (
                                <Button
                                    onClick={nextStep}
                                    className="flex-1 sm:flex-none text-sm sm:text-base py-2 sm:py-3"
                                    style={{ background: colors.primary, color: colors.secondaryDark }}
                                >
                                    Suivant
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    className="flex-1 sm:flex-none text-sm sm:text-base py-2 sm:py-3 flex items-center justify-center"
                                    style={{ background: colors.primary, color: colors.secondaryDark }}
                                >
                                    <Send size={16} className="sm:size-18 mr-1.5 sm:mr-2" />
                                    Soumettre
                                </Button>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section des critères - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.lightBg }}>
                <Container>
                    <FadeIn>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 px-4"
                            style={{ color: colors.secondaryDark }}>
                            Critères d'évaluation des projets
                        </h2>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6">
                        {requirements.map((req, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                                    style={{ color: colors.primary, backgroundColor: colors.lightBg }}>
                                    {req.icon}
                                </div>
                                <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2"
                                    style={{ color: colors.secondaryDark }}>
                                    {req.title}
                                </h3>
                                <p className="text-xs sm:text-sm" style={{ color: colors.accent }}>
                                    {req.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FAQ - Responsive */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8"
                            style={{ color: colors.secondaryDark }}>
                            Questions fréquentes
                        </h2>

                        <div className="space-y-3 sm:space-y-4">
                            {[
                                {
                                    q: "Combien de temps dure l'examen du projet ?",
                                    a: "Notre équipe examine généralement les projets sous 48 à 72 heures ouvrées."
                                },
                                {
                                    q: "Quels sont les frais pour porter un projet ?",
                                    a: "La soumission est gratuite. En cas de financement réussi, une commission de 5% est prélevée."
                                },
                                {
                                    q: "Puis-je modifier mon projet après soumission ?",
                                    a: "Oui, vous pourrez modifier votre projet tant qu'il n'a pas été publié."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-3 sm:p-4 rounded-lg sm:rounded-xl"
                                    style={{ backgroundColor: colors.lightBg }}>
                                    <h3 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 flex items-center"
                                        style={{ color: colors.secondaryDark }}>
                                        <HelpCircle size={14} className="sm:size-16 mr-1.5 sm:mr-2"
                                            style={{ color: colors.primary }} />
                                        {item.q}
                                    </h3>
                                    <p className="text-xs sm:text-sm ml-6 sm:ml-7" style={{ color: colors.accent }}>
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}