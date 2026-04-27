import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryCard from '@/components/GalleryCard.jsx';
import { Skeleton } from '@/components/ui/skeleton';

const GalleryPage = () => {

  const [images] = useState([]);
  const loading = false;
  
  const sampleImages = [
    {
      id: 'sample1',
      image: 'https://images.unsplash.com/photo-1452223355713-db7fc5eed0b9',
      title: 'Radiant Skin Transformation',
      description: 'Before and after facial treatment'
    },
    {
      id: 'sample2',
      image: 'https://images.unsplash.com/photo-1608515152841-ede49b2e1bd1',
      title: 'Hair Styling Excellence',
      description: 'Professional hair transformation'
    },
    {
      id: 'sample3',
      image: 'https://images.unsplash.com/photo-1608896772441-5a0d6fdd2acf',
      title: 'Bridal Makeup Artistry',
      description: 'Stunning bridal look'
    }
  ];

  const displayImages = images.length > 0 ? images : sampleImages;

  return (
    <>
      <Helmet>
        <title>Gallery - 5taag Salon</title>
        <meta name="description" content="View our gallery of stunning beauty transformations. See before and after results from our expert treatments and services." />
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
                Our gallery
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Witness the transformative power of our beauty treatments through our collection of stunning before and after results
              </p>
            </motion.div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="aspect-square rounded-xl" />
                ))}
              </div>
            ) : displayImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayImages.map((image, index) => (
                  <GalleryCard key={image.id} image={image} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No gallery images available yet.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;