import AnimatedProfilePicture from '@/components/ui/animated-profile-picture'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { contact, hero } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { Calendar, Code2, Download, Github, Linkedin, MapPin, Sparkles, Zap } from 'lucide-react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Hero() {
  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
  }

  const scrollToNext = () => {
    const element = document.getElementById('skills')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating tech icons */}
        {[
          { Icon: SiReact, delay: 0, duration: 8 },
          { Icon: SiTypescript, delay: 1, duration: 10 },
          { Icon: SiJavascript, delay: 2, duration: 12 },
          { Icon: SiNodedotjs, delay: 3, duration: 9 },
          { Icon: SiTailwindcss, delay: 4, duration: 11 },
          { Icon: FaCode, delay: 5, duration: 7 },
        ].map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 12}%`,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Badge 
              variant="secondary" 
              className="glass px-4 py-2 text-sm font-medium border border-white/20 group"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
              />
              <Calendar className="w-4 h-4 mr-2" />
              {hero.availability}
              <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Badge>
          </motion.div>

          {/* Profile Picture */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <AnimatedProfilePicture 
              src="/profile-picture.jpg"
              alt="aman kumar"
              size={170}
              className="mb-4"
            />
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="gradient-brand-text animate-gradient relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {hero.name}
                <motion.div
                  className="absolute -top-8 -right-8"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <Zap className="w-8 h-8 text-accent" />
                </motion.div>
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-muted-foreground flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <Code2 className="w-8 h-8 text-primary" />
              {hero.role}
              <FaLaptopCode className="w-8 h-8 text-accent" />
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {hero.tagline}
          </motion.p>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center justify-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{hero.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {hero.ctas.map((cta, index) => (
              <Button
                key={index}
                variant={cta.variant as any}
                size="lg"
                onClick={() => handleCTAClick(cta.href)}
                className={`group relative overflow-hidden ${
                  cta.variant === 'primary' 
                    ? 'gradient-brand text-white hover:scale-105 transition-transform duration-300' 
                    : cta.variant === 'secondary'
                    ? 'glass hover:bg-white/10'
                    : 'border-2 border-white/20 hover:border-white/40 glass'
                }`}
              >
                {cta.text === 'Download Resume' && <Download className="w-4 h-4 mr-2" />}
                {cta.text}
                {cta.variant === 'primary' && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </Button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}