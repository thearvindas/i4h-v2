import { motion } from 'framer-motion';

const ResourceCard = ({ title, description, category, icon }) => {
  return (
    <motion.div
      className="resource-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      {category && <span className="category-badge">{category}</span>}
      <p>{description}</p>
    </motion.div>
  );
};

export default ResourceCard; 