import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, Globe, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';

interface ContactPageProps {
  darkMode: boolean;
}

export function ContactPage({ darkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@yanovasolutions.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Your default email client should open. Please send the email to complete your message.');
    }, 100);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@yanovasolutions.com',
      link: 'mailto:contact@yanovasolutions.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+213 675036186',
      link: 'tel:+213675036186'
    },
    {
      icon: Phone,
      title: 'Phone (Alt)',
      value: '+213 555247170',
      link: 'tel:+213555247170'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, link: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, link: '#', color: 'hover:text-cyan-400' },
    { icon: Instagram, link: '#', color: 'hover:text-pink-400' },
    { icon: Github, link: '#', color: 'hover:text-purple-400' }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <MessageSquare className="w-16 h-16 text-cyan-400" />
          </motion.div>
          <h1 className={`text-5xl md:text-7xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Kontakt <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Oss</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's build the next layer of digital defense together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className={`backdrop-blur p-8 relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border-cyan-500/30'
                : 'bg-white/80 border-cyan-600/40 shadow-lg'
            }`}>
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0, 183, 255, 0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                <h2 className={`text-3xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send melding</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Navn</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className={darkMode 
                        ? 'bg-black/50 border-cyan-500/30 focus:border-cyan-400 text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border-cyan-600/40 focus:border-cyan-600 text-gray-900 placeholder:text-gray-400'
                      }
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Epost</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className={darkMode 
                        ? 'bg-black/50 border-cyan-500/30 focus:border-cyan-400 text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border-cyan-600/40 focus:border-cyan-600 text-gray-900 placeholder:text-gray-400'
                      }
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Subject</label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help you?"
                      required
                      className={darkMode 
                        ? 'bg-black/50 border-cyan-500/30 focus:border-cyan-400 text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border-cyan-600/40 focus:border-cyan-600 text-gray-900 placeholder:text-gray-400'
                      }
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className={`resize-none ${darkMode 
                        ? 'bg-black/50 border-cyan-500/30 focus:border-cyan-400 text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border-cyan-600/40 focus:border-cyan-600 text-gray-900 placeholder:text-gray-400'
                      }`}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-6 group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            </Card>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Card className={`backdrop-blur p-6 hover:border-cyan-400 transition-all duration-300 group ${
                      darkMode 
                        ? 'bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30'
                        : 'bg-white/80 border-cyan-600/40 shadow-lg'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                          darkMode ? 'from-cyan-500/20 to-blue-500/20' : 'from-cyan-100 to-blue-100'
                        }`}>
                          <Icon className={`w-7 h-7 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        </div>
                        <div>
                          <div className={`text-sm mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{info.title}</div>
                          <div className={darkMode ? 'text-white' : 'text-gray-900'}>{info.value}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className={`backdrop-blur p-8 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30'
                  : 'bg-white/80 border-cyan-600/40 shadow-lg'
              }`}>
                <h3 className={`text-2xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center border transition-all ${
                          darkMode
                            ? 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-400 text-gray-400'
                            : 'from-cyan-100 to-blue-100 border-cyan-600/40 hover:border-cyan-600 text-gray-600'
                        } ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <h3 className={`text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's secure your digital future <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>together</span>
            </h3>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
