export const APP_NAME = 'OGIAES'
export const APP_DESCRIPTION = 'Plateforme d\'Investissement Citoyen de l\'AES'

export const COUNTRIES = [
  { value: 'BF', label: 'Burkina Faso', code: '+226' },
  { value: 'ML', label: 'Mali', code: '+223' },
  { value: 'NE', label: 'Niger', code: '+227' }
] as const

export const INVESTMENT_MINIMUM = 500
export const INVESTMENT_MAXIMUM = 10000000

export const PROJECT_CATEGORIES = [
  { value: 'agriculture', label: 'Agriculture', icon: '🌾' },
  { value: 'energy', label: 'Énergie', icon: '⚡' },
  { value: 'industry', label: 'Industrie', icon: '🏭' },
  { value: 'technology', label: 'Technologie', icon: '💻' },
  { value: 'infrastructure', label: 'Infrastructure', icon: '🏗️' },
  { value: 'education', label: 'Éducation', icon: '📚' }
] as const

export const INVESTMENT_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const

export const PAYMENT_METHODS = [
  { value: 'orange_money', label: 'Orange Money', icon: '/icons/orange-money.svg' },
  { value: 'moov_money', label: 'Moov Money', icon: '/icons/moov-money.svg' },
  { value: 'wave', label: 'Wave', icon: '/icons/wave.svg' },
  { value: 'bank_transfer', label: 'Virement bancaire', icon: '/icons/bank.svg' }
] as const

export const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  INVESTMENT: 'investment',
  WITHDRAWAL: 'withdrawal',
  RETURN: 'return'
} as const

export const ROLES = {
  USER: 'user',
  INVESTOR: 'investor',
  PROJECT_OWNER: 'project_owner',
  ADMIN: 'admin'
} as const

export const DOCUMENT_TYPES = [
  { value: 'cni', label: 'Carte Nationale d\'Identité' },
  { value: 'passport', label: 'Passeport' },
  { value: 'driver_license', label: 'Permis de conduire' }
] as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    VERIFY: '/api/auth/verify',
    LOGOUT: '/api/auth/logout'
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update',
    DOCUMENTS: '/api/user/documents'
  },
  INVESTMENTS: {
    LIST: '/api/investments',
    CREATE: '/api/investments/create',
    DETAILS: (id: string) => `/api/investments/${id}`
  },
  PROJECTS: {
    LIST: '/api/projects',
    DETAILS: (id: string) => `/api/projects/${id}`,
    CATEGORIES: '/api/projects/categories'
  },
  TRANSACTIONS: {
    LIST: '/api/transactions',
    CREATE: '/api/transactions/create'
  }
} as const