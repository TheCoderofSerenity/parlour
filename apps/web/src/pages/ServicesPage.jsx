import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      name: 'Luxury Facial',
      description: 'Rejuvenate your skin with our signature facial treatment using premium products. Includes deep cleansing, exfoliation, and hydrating mask.',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1664958884838-705b1518406f'
    },
    {
      name: 'Hair Spa Treatment',
      description: 'Deep conditioning treatment for healthy, shiny hair. Includes scalp massage, nourishing mask, and styling.',
      price: '$67',
      image: 'https://images.unsplash.com/photo-1542848285-0d50a56a0dfc'
    },
    {
      name: 'Bridal Makeup',
      description: 'Look stunning on your special day with our expert bridal makeup. Includes trial session and touch-up kit.',
      price: '$147',
      image: 'https://images.unsplash.com/photo-1580421383874-7e60f05f64b4'
    },
    {
      name: 'Threading & Waxing',
      description: 'Professional hair removal services for smooth, flawless skin. Gentle techniques for sensitive areas.',
      price: '$34',
      image: 'https://images.unsplash.com/photo-1452223355713-db7fc5eed0b9'
    },
    {
      name: 'Relaxing Massage',
      description: 'Unwind with our therapeutic massage treatments. Choose from Swedish, deep tissue, or aromatherapy.',
      price: '$78',
      image: 'https://images.unsplash.com/photo-1608515152841-ede49b2e1bd1'
    },
    {
      name: 'Nail Care & Art',
      description: 'Complete manicure and pedicure services with gel polish options. Includes nail art and hand massage.',
      price: '$52',
      image: 'https://images.unsplash.com/photo-1608896772441-5a0d6fdd2acf'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - 5taag Salon</title>
        <meta name="description" content="Explore our range of luxury beauty services including facials, hair spa, makeup, threading, massage, and nail care. Premium treatments by expert stylists." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
                Our services
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Indulge in our comprehensive range of beauty treatments designed to enhance your natural beauty and leave you feeling refreshed and confident
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;