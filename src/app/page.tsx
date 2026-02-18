'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Smartphone,
  CheckCircle,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'
import SlideIn from '@/components/animations/SlideIn'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
 redirect('/public')
}