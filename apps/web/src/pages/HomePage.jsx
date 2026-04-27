import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient';

const HomePage = () => {
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1633681926019-03bd9325ec20');

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const records = await pb.collection('images').getFullList({
          filter: 'category = "hero"',
          sort: '-created',
          $autoCancel: false
        });
        if (records.length > 0) {
          const imageUrl = pb.files.getUrl(records[0], records[0].image);
          setHeroImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching hero image:', error);
      }
    };

    fetchHeroImage();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'We use only the finest luxury beauty products for exceptional results'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open seven days a week to accommodate your busy schedule'
    },
    {
      icon: Award,
      title: 'Expert Stylists',
      description: 'Our certified professionals have years of experience in beauty care'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every treatment is customized to your unique beauty needs'
    }
  ];

  const featuredServices = [
    {
      name: 'Luxury Facial',
      description: 'Rejuvenate your skin with our signature facial treatment',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1664958884838-705b1518406f'
    },
    {
      name: 'Hair Spa',
      description: 'Deep conditioning treatment for healthy, shiny hair',
      price: '$67',
      image: 'https://images.unsplash.com/photo-1542848285-0d50a56a0dfc'
    },
    {
      name: 'Bridal Makeup',
      description: 'Look stunning on your special day with our expert makeup',
      price: '$147',
      image: 'https://images.unsplash.com/photo-1580421383874-7e60f05f64b4'
    }
  ];

  return (
    <>
      <Helmet>
        <title>5taag Salon - Luxury Beauty Salon</title>
        <meta name="description" content="Experience premium beauty treatments at 5taag Salon. Expert stylists, luxury products, and personalized care in an elegant setting in Kolkata." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Luxury beauty salon interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
                Discover your natural beauty
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience luxury beauty treatments in an elegant and relaxing environment. Your transformation begins here at 5taag Salon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 transition-all duration-200 active:scale-[0.98]">
                    Explore Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8 transition-all duration-200 active:scale-[0.98]">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why choose 5taag Salon
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We combine expertise, luxury products, and personalized care to deliver exceptional beauty experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our most popular beauty treatments designed to enhance your natural radiance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;