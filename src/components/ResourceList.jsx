import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResourceCard from './ResourceCard';

const ResourceList = ({ resources, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const matchesSearch = (resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory = (resource) =>
    selectedCategory === 'all' || resource.category === selectedCategory;

  const filteredResources = resources
    .filter(matchesSearch)
    .filter(matchesCategory);

  return (
    <div className="resource-list">
      <div className="filters">
        <input
          type="text"
          className="search-bar"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        <AnimatePresence>
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              icon={resource.icon}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResourceList; 