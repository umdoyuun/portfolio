import { Github, Mail, Cpu, Heart } from 'lucide-react'
import Link from 'next/link'
import { portfolioData } from '@/data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { personal } = portfolioData

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: `mailto:${personal.email}`,
      label: 'Email'
    },
    {
      icon: <Github size={20} />,
      href: personal.github,
      label: 'GitHub'
    }
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">EmbeddedDev</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Passionate embedded systems engineer dedicated to creating innovative IoT solutions 
              and bridging the gap between hardware and software.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-2 rounded-full bg-background/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personal.location}</p>
              <p>{personal.email}</p>
              <p>{personal.phone}</p>
            </div>
            <div className="mt-4">
              <Link
                href="#contact"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Let&apos;s work together →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} {personal.name}. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and Next.js</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Designed for innovation • Built for performance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer