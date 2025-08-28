import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AnimatedProfilePictureProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export default function AnimatedProfilePicture({ 
  src, 
  alt, 
  size = 200, 
  className = "" 
}: AnimatedProfilePictureProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Animated background rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          background: `conic-gradient(from 0deg, 
            hsl(var(--brand-from)), 
            hsl(var(--brand-via)), 
            hsl(var(--brand-to)), 
            hsl(var(--brand-from)))`
        }}
      />
      
      {/* Secondary ring */}
      <motion.div
        className="absolute inset-1 rounded-full bg-background/80"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          animate={{
            x: [0, Math.cos(i * 45 * Math.PI / 180) * 40, 0],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * 40, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Profile image container */}
      <motion.div
        className="relative z-10 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ width: size, height: size }}
      >
        {/* Loading shimmer */}
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Actual image */}
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: imageLoaded ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          onLoad={() => setImageLoaded(true)}
          whileHover={{ scale: 1.1 }}
        />

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  )
}