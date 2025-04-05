import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Understanding Pelvic Pain',
    content: 'Learn about the basics of chronic pelvic pain, including causes, symptoms, and diagnosis. Our Pelvic Pain 101 section provides foundational knowledge to help you better understand your condition.',
    link: '/pelvic-pain-101',
    linkText: 'Explore Pelvic Pain 101',
    icon: '📚',
  },
  {
    title: 'Treatment Resources',
    content: 'Access a curated collection of evidence-based resources for managing pelvic pain. From physical therapy to mindfulness practices, find comprehensive information about various treatment approaches.',
    link: '/resources',
    linkText: 'Browse Resources',
    icon: '🔍',
  },
  {
    title: 'Patient Recommendations',
    content: 'Discover tools, books, apps, and practices recommended by others who have experienced pelvic pain. These peer-tested resources can help support your healing journey.',
    link: '/recommendations',
    linkText: 'View Recommendations',
    icon: '💝',
  },
  {
    title: 'About Our Platform',
    content: 'Learn about our mission to provide evidence-based resources and support for those affected by chronic pelvic pain. Meet our team of medical professionals and patient advocates.',
    link: '/about',
    linkText: 'Meet Our Team',
    icon: '👥',
  },
];

const Overview = () => {
  return (
    <div className="overview">
      <section className="hero">
        <div className="container">
          <h1>Overview</h1>
          <p className="lead">
            Your comprehensive guide to navigating pelvic pain resources and support.
          </p>
        </div>
      </section>

      <section className="overview-content">
        <div className="container">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="section-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="section-icon">{section.icon}</div>
              <div className="section-content">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                <Link to={section.link} className="button">
                  {section.linkText}
                  <span className="arrow">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview; 