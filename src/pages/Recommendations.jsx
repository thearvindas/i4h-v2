import { useState } from 'react';
import { motion } from 'framer-motion';
import resourcesData from '../data/resources.json';

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
    <p>{resource.description}</p>
    {resource.creator && (
      <div className="creator">
        <small>Created by: {resource.creator}</small>
      </div>
    )}
    <a href={resource.link} className="button" target="_blank" rel="noopener noreferrer">
      Visit
    </a>
  </motion.div>
);

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCanadianOnly, setShowCanadianOnly] = useState(false);

  const filterResources = () => {
    return resourcesData.filter(resource => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.creator.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCanadian = !showCanadianOnly || resource.isCanadian;
      const isPatientRec = resource.category === 'patient-recs';

      return matchesSearch && matchesCanadian && isPatientRec;
    });
  };

  return (
    <div className="resources-page">
      <section className="hero">
        <div className="container">
          <h1>recommendations</h1>
          <p className="lead">
            Curated recommendations to support your pelvic pain journey.
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
              <div className="search-input-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search recommendations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="filters">
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

export default Recommendations; 