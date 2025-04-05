import { motion } from 'framer-motion';

const modules = [
  {
    title: 'Overview',
    content: 'Chronic pelvic pain is a complex condition that affects many individuals. It can be caused by various factors and requires a comprehensive approach to management.',
  },
  {
    title: 'Causes',
    content: 'Common causes include muscle tension, nerve irritation, inflammation, and psychological factors. Often, multiple factors contribute to the condition.',
  },
  {
    title: 'Symptoms',
    content: 'Symptoms can vary widely but often include persistent pain in the pelvic region, discomfort during daily activities, and impact on quality of life.',
  },
  {
    title: 'Diagnosis',
    content: 'Diagnosis typically involves a thorough medical history, physical examination, and sometimes additional tests to rule out other conditions.',
  },
];

const PelvicPain101 = () => {
  return (
    <div className="pelvic-pain-101">
      <section className="hero">
        <div className="container">
          <h1>Pelvic Pain 101</h1>
          <p className="lead">
            Understanding the basics of chronic pelvic pain and its management.
          </p>
        </div>
      </section>

      <section className="modules">
        <div className="container">
          <div className="grid">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                className="module"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h2>{module.title}</h2>
                <p>{module.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PelvicPain101; 