import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - 5taag Salon</title>
        <meta name="description" content="Get in touch with 5taag Salon. Visit our luxury beauty salon in Kolkata or contact us for appointments and inquiries. We're here to help you look and feel your best." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
                Get in touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Visit our salon or send us a message to book your appointment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Send us a message
                  </h2>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Contact information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          4, BM Banerjee Rd<br />
                          near Old Bazzar, Indrapuri<br />
                          Beehive Garden, Belghoria<br />
                          Kolkata, West Bengal 700056
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">info@5taagsalon.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=88.3%2C22.5%2C88.4%2C22.6&layer=mapnik&marker=22.5589%2C88.3667"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="5taag Salon Location"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;