'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  FileCheck,
  Calendar,
  TrendingUp,
  Code,
  Trophy,
  BookOpen,
  Zap,
  Users,
  Book,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { personalData } from '@/data/personal'
import ProfileImage from '@/components/ui/ProfileImage'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('education')
  const [expandedActivities, setExpandedActivities] = useState<{[key: number]: boolean}>({})

  // Statistics data
  const stats = [
    { 
      icon: <Code className="h-6 w-6" />, 
      label: "프로젝트", 
      value: personalData.projectsData?.length || 8,
      description: "완료된 프로젝트" 
    },
    { 
      icon: <Trophy className="h-6 w-6" />, 
      label: "수상", 
      value: personalData.awards.length,
      description: "수상 경력" 
    },
    { 
      icon: <FileCheck className="h-6 w-6" />, 
      label: "자격증", 
      value: personalData.certifications.length,
      description: "보유 자격증" 
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      label: "기술스택", 
      value: Object.values(personalData.skills).flat().length,
      description: "보유 기술" 
    }
  ]

  // Contact information with icons
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "연락처",
      value: personalData.contact.phone,
      type: "tel"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "이메일",
      value: personalData.contact.email,
      type: "email"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "위치",
      value: personalData.contact.location,
      type: "text"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/umdoyuun",
      type: "link",
      href: personalData.social.github
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      label: "Blog",
      value: "doyun98.tistory.com",
      type: "link",
      href: personalData.social.blog
    }
  ]

  const tabs = [
    { id: 'education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'awards', label: 'Awards', icon: <Award className="h-4 w-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <FileCheck className="h-4 w-4" /> },
    { id: 'activities', label: 'Activities', icon: <Users className="h-4 w-4" /> }
  ]


  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50"
            style={{ 
              height: '500px',
              paddingRight: '8px'
            }}
          >
            <div className="space-y-4 pr-2 pb-4">
              {personalData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        edu.status === '진행중' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.description}</p>
                    {edu.gpa && (
                      <p className="text-sm font-medium text-foreground">
                        학점: {edu.gpa}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      
      case 'awards':
        return (
          <motion.div
            key="awards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50"
            style={{ 
              height: '500px',
              paddingRight: '8px'
            }}
          >
            <div className="space-y-4 pr-2 pb-4">
              {personalData.awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-yellow-400/30 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full border-4 border-background">
                    <Trophy className="h-2 w-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-4 border border-yellow-200/50 dark:border-yellow-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{award.title}</h4>
                      <span className="text-xs text-muted-foreground bg-white/70 dark:bg-black/20 px-2 py-1 rounded">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      
      case 'certifications':
        return (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50"
            style={{ 
              height: '500px',
              paddingRight: '8px'
            }}
          >
            <div className="space-y-4 pr-2 pb-4">
              {personalData.certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-primary">{cert.organization}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-card border rounded px-2 py-1">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    자격번호: {cert.number}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'activities':
        const getActivityIcon = (iconType: string) => {
          switch (iconType) {
            case 'users': return <Users className="h-4 w-4 text-primary" />
            case 'book': return <Book className="h-4 w-4 text-primary" />
            case 'graduation-cap': return <GraduationCap className="h-4 w-4 text-primary" />
            case 'star': return <Star className="h-4 w-4 text-primary" />
            default: return <Users className="h-4 w-4 text-primary" />
          }
        }

        const getActivityColor = (type: string) => {
          switch (type) {
            case '동아리': return 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-700/50'
            case '스터디': return 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/50'
            case '멘토링': return 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200/50 dark:border-purple-700/50'
            case '지역활동': return 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200/50 dark:border-orange-700/50'
            default: return 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-gray-200/50 dark:border-gray-700/50'
          }
        }

        const toggleActivityExpansion = (activityId: number) => {
          setExpandedActivities(prev => ({
            ...prev,
            [activityId]: !prev[activityId]
          }))
        }

        return (
          <motion.div
            key="activities"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50"
            style={{ 
              height: '500px',
              paddingRight: '8px'
            }}
          >
            <div className="space-y-4 pr-2 pb-4">
              {personalData.activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${getActivityColor(activity.type)} rounded-lg p-4 border hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {getActivityIcon(activity.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground text-base">{activity.title}</h4>
                        <p className="text-sm text-primary font-medium">{activity.role}</p>
                        <p className="text-xs text-muted-foreground">{activity.organization}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground bg-white/70 dark:bg-black/20 px-2 py-1 rounded flex-shrink-0">
                          {activity.period}
                        </span>
                        {'isGroup' in activity && activity.isGroup && (
                          <button
                            onClick={() => toggleActivityExpansion(activity.id)}
                            className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          >
                            {expandedActivities[activity.id] ? 
                              <ChevronUp className="h-4 w-4" /> : 
                              <ChevronDown className="h-4 w-4" />
                            }
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Sub-activities for grouped items */}
                    {'isGroup' in activity && activity.isGroup && expandedActivities[activity.id] && 'subActivities' in activity && activity.subActivities && (
                      <div className="mb-3 space-y-2">
                        <h5 className="text-sm font-medium text-foreground">세부 활동:</h5>
                        {activity.subActivities.map((sub, subIndex: number) => (
                          <div key={subIndex} className="bg-white/50 dark:bg-black/20 rounded p-3 ml-2 border-l-2 border-primary/30">
                            <div className="flex items-start justify-between mb-1">
                              <h6 className="text-sm font-medium text-foreground">{sub.title}</h6>
                              <span className="text-xs text-muted-foreground">{sub.period}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">{sub.description}</p>
                            {sub.achievements && sub.achievements.length > 0 && (
                              <ul className="text-xs text-muted-foreground space-y-0.5">
                                {sub.achievements.map((achievement, achIndex: number) => (
                                  <li key={achIndex} className="flex items-start">
                                    <span className="text-primary mr-1 text-[10px]">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activity.achievements && activity.achievements.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-foreground mb-1">주요 성과:</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5">
                          {activity.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Profile & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Profile Card */}
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 h-[1082px]">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Profile Photo Section */}
                <div className="relative h-[438px] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-b border-border">
                  <ProfileImage
                    src="/images/profile/avatar.jpg"
                    alt={`${personalData.name} 프로필 사진`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{personalData.name}</h3>
                    <p className="text-primary-foreground/90 text-base">{personalData.title}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-6 flex-1 overflow-y-auto flex flex-col">
                  <div className="flex flex-col justify-evenly h-full space-y-4">
                    {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200 group"
                    >
                      <div className="text-primary group-hover:text-primary/80 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                          {info.label}
                        </p>
                        {info.type === 'link' ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-foreground hover:text-primary transition-colors font-medium truncate block"
                          >
                            {info.value}
                          </a>
                        ) : info.type === 'email' ? (
                          <a
                            href={`mailto:${info.value}`}
                            className="text-base text-foreground hover:text-primary transition-colors font-medium truncate block"
                          >
                            {info.value}
                          </a>
                        ) : info.type === 'tel' ? (
                          <a
                            href={`tel:${info.value}`}
                            className="text-base text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base text-foreground font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Introduction & Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Introduction */}
            <Card className="border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">소개</h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {`안녕하세요! 문제해결 능력과 사용자 중심의 소프트웨어 개발에 열정을 가진 개발자 엄도윤입니다.

다양한 IoT 서비스와 AI 기술을 활용한 프로젝트를 통해 하드웨어와 소프트웨어의 경계를 넘나드는 통합적 사고력을 기르고 있습니다. 특히 제한된 리소스 환경에서의 성능 최적화와 사용자 경험 개선에 관심이 많으며, 실제 문제를 해결하는 실용적인 솔루션 개발에 집중하고 있습니다.`}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tabbed Content */}
            <Card className="border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-xl overflow-hidden h-[700px] flex flex-col">
              <CardContent className="p-0 flex-1 flex flex-col">
                {/* Tab Navigation */}
                <div className="flex border-b border-border flex-shrink-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 p-8 overflow-hidden">
                  {renderTabContent()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="text-center border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg mb-4 transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 backdrop-blur-lg shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground font-medium italic mb-4 leading-relaxed">
                &ldquo;혁신은 기술의 경계를 넘어서는 창의적인 사고에서 시작됩니다&rdquo;
              </blockquote>
              <p className="text-muted-foreground">
                — 임베디드 시스템 개발에 대한 저의 철학
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection