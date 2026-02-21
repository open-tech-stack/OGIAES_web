'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-4 mt-auto">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
                >
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex items-center"
                    >
                        © {currentYear || '2024'} OGIAES. Tous droits réservés.

                        {/* L'animation est maintenant dans un span, pas dans un div */}
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="inline-block ml-1 w-1.5 h-1.5 bg-green-500 rounded-full"
                        />
                    </motion.p>

                    {/* Reste du code identique... */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link
                            href="/conditions"
                            className="hover:text-green-400 transition-colors duration-200"
                        >
                            Conditions
                        </Link>
                        <Link
                            href="/confidentialite"
                            className="hover:text-green-400 transition-colors duration-200"
                        >
                            Confidentialité
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-green-400 transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}