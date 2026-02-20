// lib/animations.ts
export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4
        }
    }
}

export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const scaleOnHover = {
    whileHover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    whileTap: {
        scale: 0.95
    }
}