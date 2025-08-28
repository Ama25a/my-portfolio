import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      href: 'https://wa.me/919876543210'
    },
    {
      icon: FaTelegram,
      label: 'Telegram',
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'https://t.me/ankitkumar'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700',
      href: 'https://linkedin.com/in/ankitkumar-dev'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 right-0 space-y-3 mb-2"
        >
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-full text-white shadow-lg ${option.color} transition-all duration-300 group`}
            >
              <option.icon className="w-5 h-5" />
              <span className="text-sm font-medium pr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {option.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Main floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? "#ef4444" : "#6366f1"
        }}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  )
}