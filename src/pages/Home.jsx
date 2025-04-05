import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lhhwLogo from '../logos/lhhw_logo_transparent.png';
import uaLogo from '../logos/ua_logo_green_rgb.png';

const valueProps = [
  {
    title: 'Research-backed Info',
    description: 'Access evidence-based information curated by medical professionals and researchers.',
    icon: '📚',
  },
  {
    title: 'Lived Experiences',
    description: 'Learn from others who have navigated similar challenges and found effective solutions.',
    icon: '🤝',
  },
  {
    title: 'Supportive Community',
    description: 'Connect with a caring community that understands your journey.',
    icon: '💝',
  },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1>navigating pelvic pain together</h1>
            <p className="lead">
              Evidence-based resources and support for managing chronic pelvic pain.
            </p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/pelvic-pain-101" className="button primary">
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="curated">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center">Curated by researchers & doctors from</h2>
            <div className="logos-container">
              <motion.img 
                src={lhhwLogo} 
                alt="Life Healing Health & Wellness Logo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.img 
                src={uaLogo} 
                alt="University of Arizona Logo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <div className="grid">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="icon">{prop.icon}</div>
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Take the First Step?</h2>
            <p className="lead">
              Join our community and discover comprehensive resources for managing pelvic pain.
            </p>
            <div className="cta-buttons">
              <Link to="/treatment" className="button primary">
                Explore Treatment Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 