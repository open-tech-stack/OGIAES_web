// app/dashboard/composants/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="py-3 sm:py-4 mt-auto border-t" style={{ backgroundColor: 'white', borderColor: `${colors.primary}20` }}>
            <div className="container mx-auto px-3 sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-3 md:gap-0"
                    style={{ color: colors.accent }}
                >
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex items-center"
                    >
                        © {currentYear || '2024'} OGIAES. Tous droits réservés.
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="inline-block ml-1.5 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: colors.primary }}
                        />
                    </motion.p>

                    <div className="flex space-x-4 sm:space-x-6">
                        <Link
                            href="/conditions"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.accent }}
                        >
                            Conditions
                        </Link>
                        <Link
                            href="/confidentialite"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.accent }}
                        >
                            Confidentialité
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors hover:opacity-80"
                            style={{ color: colors.accent }}
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}