import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedMenuProps {
  size?: number;
  [key: string]: any;
}

const AnimatedMenu: React.FC<AnimatedMenuProps> = ({ size = 24, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Menu size={size} {...props} />
    </motion.div>
  );
};

export default AnimatedMenu;