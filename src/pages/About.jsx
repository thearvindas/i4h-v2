import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Erin Kelly',
    role: 'Term Clinical Associate Professor',
    bio: 'Department of Obstetrics and Gynaecology, Faculty of Medicine & Dentistry at the University of Alberta.',
    email: 'eckelly@ualberta.ca'
  },
  {
    name: 'Dr. Annick Poirier',
    role: 'Clinical Lecturer',
    bio: 'Department of Obstetrics and Gynaecology, Faculty of Medicine & Dentistry at the University of Alberta.',
    email: 'annick1@ualberta.ca'
  }
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
          <h2>Our Mission</h2>
          <div className="mission-transition">
            This website is our first step towards moving forward this mission.
          </div>
          <div className="mission-content">
            <p>
              Chronic pelvic pain (CPP) in women is a complex condition often met with delayed diagnosis and inadequate care due to systemic barriers. Many women report that their symptoms are diminished or dismissed, and effective treatment remains elusive. Managing CPP requires a holistic, biopsychosocial approach, yet time constraints in medical settings make comprehensive care challenging.
            </p>
            <p>
              To address this, we propose developing a digital tool that empowers patients by helping them track symptoms, medication adherence, and treatment responses. The tool would also offer:
            </p>
            <ul>
              <li>CBT, MBT, and DBT exercises</li>
              <li>Readiness for change assessments</li>
              <li>Patient testimonials and peer support</li>
              <li>Communication strategies for personal and professional interactions</li>
              <li>Self-management guidance to enhance confidence and advocacy</li>
              <li>Resources to break the stigma and isolation surrounding CPP</li>
            </ul>
            <p>
              This accessible solution would enhance patient-provider communication, promote self-efficacy, and support a more integrated approach to CPP care.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="email-button">
                  Contact via Email
                </a>
              </div>
            ))}
            <p className="additional-team">
              Our team also includes 2 nurses, 2 physicians, and 8 physiotherapists dedicated to advancing pelvic pain care and research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 