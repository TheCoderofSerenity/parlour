import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-primary">{service.price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;