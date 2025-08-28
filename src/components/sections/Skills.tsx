import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Database, Server, Wrench, Brain, Zap, Star, TrendingUp } from 'lucide-react'
import { SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit } from 'react-icons/si'
import { FaCode, FaLaptopCode, FaTools, FaRocket } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { skills } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Brain className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-brand-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Technologies I love working with and constantly learning
            <FaRocket className="w-5 h-5 text-accent" />
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.group}
              variants={itemVariants}
              className={`glass-card p-8 group cursor-pointer transition-all duration-300 ${
                selectedGroup === skillGroup.group || selectedGroup === null
                  ? 'opacity-100'
                  : 'opacity-60'
              }`}
              onMouseEnter={() => setSelectedGroup(skillGroup.group)}
              onMouseLeave={() => setSelectedGroup(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${
                    skillGroup.group === 'Frontend' ? 'gradient-skills' :
                    skillGroup.group === 'Backend' ? 'gradient-experience' :
                    skillGroup.group === 'Database' ? 'gradient-projects' :
                    'gradient-brand'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skillGroup.group === 'Frontend' && <Code className="w-6 h-6 text-white" />}
                  {skillGroup.group === 'Backend' && <Server className="w-6 h-6 text-white" />}
                  {skillGroup.group === 'Database' && <Database className="w-6 h-6 text-white" />}
                  {skillGroup.group === 'Tools & Others' && <Wrench className="w-6 h-6 text-white" />}
                </motion.div>
                <h3 className="text-xl font-semibold">{skillGroup.group}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="space-y-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        {skill.name}
                        {skill.level >= 90 && <Star className="w-4 h-4 text-yellow-400" />}
                        {skill.level >= 80 && skill.level < 90 && <TrendingUp className="w-4 h-4 text-green-400" />}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-white/10 group-hover:bg-white/20 transition-colors"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">What I Bring to the Table</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-brand-text">8+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-brand-text">15+</div>
                <div className="text-sm text-muted-foreground">Technologies Learned</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-brand-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}