'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cpu, Zap, Shield, Wifi, MapPin, Mail, Phone, BookOpen } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const About = () => {
  const { personal, publications } = portfolioData

  const specialties = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Embedded Systems",
      description: "Microcontroller programming, RTOS implementation, and hardware-software integration"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "Connected device development, wireless protocols, and cloud integration"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Systems",
      description: "Low-latency applications, interrupt handling, and deterministic performance"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "System Reliability",
      description: "Fault-tolerant design, security implementation, and quality assurance"
    }
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: personal.location
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: personal.email
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: personal.phone
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Specialties */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-2xl font-semibold mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Core Specialties
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {specialty.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {specialty.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {specialty.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact & Publications */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Publications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <BookOpen className="mr-3 h-6 w-6 text-primary" />
                Recent Publications
              </h3>
              <div className="space-y-4">
                {publications.slice(0, 2).map((pub, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-medium text-foreground text-sm mb-2 leading-tight">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {pub.journal || pub.conference} • {pub.date}
                    </p>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">
                      {pub.abstract}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quote or Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 border border-primary/10"
        >
          <blockquote className="text-xl md:text-2xl text-foreground font-medium italic mb-4">
&quot;Innovation in embedded systems comes from the perfect harmony between hardware constraints and software creativity.&quot;
          </blockquote>
          <p className="text-muted-foreground">
            — Philosophy that drives my approach to embedded systems development
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About