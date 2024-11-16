import { motion } from 'framer-motion';

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, title, description }) => {
  return (
    <motion.div 
      className="relative aspect-[4/3] bg-gray-100 overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
        <h3 className="text-lg font-semibold text-accent">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};
