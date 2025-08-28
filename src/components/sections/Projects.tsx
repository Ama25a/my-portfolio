import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Star, ChevronRight, Rocket, Code, Monitor, Smartphone } from 'lucide-react'
import {  FaRocket } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { projects } from '@/data/portfolio'
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Rocket className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-brand-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Code className="w-5 h-5 text-accent" />
            Some of my favorite projects that showcase my skills and passion for development
            <FaRocket className="w-5 h-5 text-accent" />
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card border-0 h-full overflow-hidden">
                <CardHeader className="p-0 relative">
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-accent text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="aspect-video relative overflow-hidden">
                    {/* Project Image */}
                    <img
                      src={project.images}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                </CardHeader>


                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full group"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Case Study
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glass border-0">
                        <DialogHeader>
                          <DialogTitle className="text-2xl gradient-brand-text">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>

                        {selectedProject && (
                          <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tech.map((tech, index) => (
                                <Badge key={index} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2 text-primary">Problem</h4>
                                  <p className="text-muted-foreground">{selectedProject.details.problem}</p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                                  <p className="text-muted-foreground">{selectedProject.details.solution}</p>
                                </div>

                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2 text-primary">Key Features</h4>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    {selectedProject.details.features.map((feature, index) => (
                                      <li key={index} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2 text-primary">Challenges</h4>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    {selectedProject.details.challenges.map((challenge, index) => (
                                      <li key={index} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 mr-2 flex-shrink-0" />
                                        {challenge}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2 text-primary">What I Learned</h4>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    {selectedProject.details.learnings.map((learning, index) => (
                                      <li key={index} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                        {learning}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-white/10">
                              <Button asChild className="gradient-brand text-white">
                                <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild>
                                <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  View Source Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="glass hover:bg-white/10"
          >
            <a href="https://github.com/ankitkumar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}