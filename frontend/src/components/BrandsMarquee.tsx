import React from 'react';
import { motion } from 'framer-motion';

const BrandsMarquee = () => {
  const brands = [
    "Meta", "Google", "Microsoft", "Amazon", "Apple", "Tesla", 
    "Netflix", "Spotify", "Adobe", "Salesforce", "Shopify", "Zoom"
  ];

  return (
    <section className="py-8 lg:py-12 bg-aurum-dark overflow-hidden">
      <div className="mb-6 lg:mb-8">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl lg:text-2xl font-bold text-white mb-2"
        >
          Trusted by Leading Brands
        </motion.h3>
        <div className="w-16 lg:w-24 h-1 bg-aurum-red mx-auto"></div>
      </div>
      
      <div className="relative">
        <div className="flex space-x-8 lg:space-x-16 animate-marquee">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.1,
                color: "#F03636"
              }}
              className="flex-shrink-0 text-lg lg:text-2xl font-bold text-gray-400 hover:text-aurum-red transition-colors cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </div>
        <div className="absolute top-0 flex space-x-8 lg:space-x-16 animate-marquee2">
          {brands.map((brand, index) => (
            <motion.div
              key={index + brands.length}
              whileHover={{ 
                scale: 1.1,
                color: "#F03636"
              }}
              className="flex-shrink-0 text-lg lg:text-2xl font-bold text-gray-400 hover:text-aurum-red transition-colors cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;