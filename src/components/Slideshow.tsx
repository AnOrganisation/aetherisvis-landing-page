import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCard } from './ImageCard';

const slides = [
  {
    image: '/images/service1.jpg',
    title: 'Data Visualization',
    description: 'Transform complex data into intuitive visual stories'
  },
  {
    image: '/images/service2.jpg',
    title: 'Interactive Dashboards',
    description: 'Real-time analytics and reporting solutions'
  },
  {
    image: '/images/service3.jpg',
    title: 'Custom Solutions',
    description: 'Tailored visualization tools for your specific needs'
  }
];

export const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="w-full"
        >
          <ImageCard {...slides[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        →
      </button>
    </div>
  );
};
