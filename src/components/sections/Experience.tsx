import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, Briefcase, TrendingUp, Users, Target } from 'lucide-react'
import { FaBriefcase, FaUserTie, FaHandshake, FaLightbulb } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { experience } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Briefcase className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-brand-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            My journey in software development and the valuable experiences I've gained
            <Target className="w-5 h-5 text-accent" />
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0 
                    ? 'left-6 md:right-0 md:left-auto md:transform md:translate-x-1/2' 
                    : 'left-6 md:left-0 md:transform md:-translate-x-1/2'
                } top-8`}
                whileHover={{ scale: 1.5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.7)",
                    "0 0 0 10px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-8 ml-16 md:ml-0"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.start} - {exp.end}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Certificate */}
                  {exp.certificate && (
                    <Button variant="ghost" size="sm" className="mt-4" asChild>
                      <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking full-time opportunities where I can contribute to meaningful projects 
              and continue growing as a developer.
            </p>
            <Button 
              size="lg" 
              className="gradient-brand text-white hover:scale-105 transition-transform duration-300"
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}