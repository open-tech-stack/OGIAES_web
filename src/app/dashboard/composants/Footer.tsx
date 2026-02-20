'use client'

import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <div className="mb-2 md:mb-0">
                        © {currentYear} OGIAES. Tous droits réservés.
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/conditions" className="hover:text-green-600 transition-colors">
                            Conditions
                        </Link>
                        <Link href="/confidentialite" className="hover:text-green-600 transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="/contact" className="hover:text-green-600 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}