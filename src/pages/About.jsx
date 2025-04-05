import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Medical Director',
    bio: 'Board-certified physician specializing in pelvic pain management with over 15 years of experience.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Research Lead',
    bio: 'PhD in pain research, focusing on innovative approaches to chronic pain management.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient Advocate',
    bio: 'Lived experience with chronic pelvic pain and dedicated to supporting others on their journey.',
  },
];

const About = () => {
  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">
            Our mission is to provide evidence-based resources and support for those affected by chronic pelvic pain.
          </p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="text-center">
            <h2>Our Mission</h2>
            <p>
              We believe in a comprehensive approach to pelvic pain management,
              combining medical expertise with lived experience to create a
              supportive community and valuable resources.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="text-center">Our Team</h2>
          <div className="grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 