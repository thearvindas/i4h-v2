import { useState } from 'react';
import { motion } from 'framer-motion';
import resourcesData from '../data/resources.json';

const types = [
  { value: 'all', label: 'All Types' },
  { value: 'app', label: 'Apps' },
  { value: 'book', label: 'Books' },
  { value: 'resource', label: 'Resources' }
];

const ResourceCard = ({ resource }) => (
  <motion.div
    className="resource-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="resource-header">
      <h3>{resource.title}</h3>
      {resource.isCanadian && (
        <span className="canadian-flag" role="img" aria-label="Canadian resource">
          🇨🇦
        </span>
      )}
    </div>
    <div className="resource-meta">
      <span className="type-badge">{resource.type}</span>
    </div>
    <p>{resource.description}</p>
    {resource.creator && (
      <div className="creator">
        <small>Created by: {resource.creator}</small>
      </div>
    )}
    <a href={resource.link} className="button primary" target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </motion.div>
);

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showCanadianOnly, setShowCanadianOnly] = useState(false);

  const filterResources = () => {
    return resourcesData.filter(resource => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.creator.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesCanadian = !showCanadianOnly || resource.isCanadian;
      const isTreatment = resource.category === 'treatment-management';

      return matchesSearch && matchesType && matchesCanadian && isTreatment;
    });
  };

  return (
    <div className="resources-page">
      <section className="hero">
        <div className="container">
          <h1>treatment resources</h1>
          <p className="lead">
            Evidence-based resources for managing chronic pelvic pain.
          </p>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="search-wrapper"
            >
              <input
                type="text"
                className="search-input"
                placeholder="Search treatment resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="filters">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="filter-select"
                >
                  {types.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                <label className="canadian-filter">
                  <input
                    type="checkbox"
                    checked={showCanadianOnly}
                    onChange={(e) => setShowCanadianOnly(e.target.checked)}
                  />
                  <span>🇨🇦 Canadian Resources Only</span>
                </label>
              </div>
            </motion.div>
          </div>

          <div className="resources-grid">
            {filterResources().map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 