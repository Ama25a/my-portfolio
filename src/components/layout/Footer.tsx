import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contact, hero } from '@/data/portfolio'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: contact.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: contact.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: contact.socials.twitter, label: 'Twitter' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-brand-text">
              {hero.name}
            </div>
            <p className="text-muted-foreground max-w-sm">
              {hero.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass-card p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(link.href.slice(1))
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>Available for new opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} {hero.name}. 
          </p>
          
        </div>
      </div>
    </footer>
  )
}