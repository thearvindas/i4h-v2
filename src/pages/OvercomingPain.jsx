import { motion } from 'framer-motion';

const modules = [
  {
    title: 'Understanding Your Pain',
    content: 'Learn about the different types of pelvic pain and how they affect your body. Understanding the mechanisms behind your pain can help you better manage it.',
    resources: [
      { title: 'Pain Types Guide', link: '/resources/pain-types' },
      { title: 'Body Awareness Exercises', link: '/resources/body-awareness' },
    ],
  },
  {
    title: 'Building a Support System',
    content: 'Discover how to build and maintain a strong support network. Learn about different types of support and how to communicate your needs effectively.',
    resources: [
      { title: 'Support Group Directory', link: '/resources/support-groups' },
      { title: 'Communication Guide', link: '/resources/communication' },
    ],
  },
  {
    title: 'Daily Management Strategies',
    content: 'Practical tips and techniques for managing pain in your daily life. From pacing activities to stress management, find what works for you.',
    resources: [
      { title: 'Activity Pacing Guide', link: '/resources/pacing' },
      { title: 'Stress Management Techniques', link: '/resources/stress-management' },
    ],
  },
  {
    title: 'Medical Treatment Options',
    content: 'Explore various medical treatments and interventions available for chronic pelvic pain. Understand the benefits and potential risks of different approaches.',
    resources: [
      { title: 'Treatment Options Overview', link: '/resources/treatments' },
      { title: 'Finding the Right Provider', link: '/resources/providers' },
    ],
  },
  {
    title: 'Long-term Wellness',
    content: 'Strategies for maintaining your well-being over the long term. Learn about lifestyle changes, self-care practices, and maintaining progress.',
    resources: [
      { title: 'Wellness Plan Template', link: '/resources/wellness-plan' },
      { title: 'Progress Tracking Tools', link: '/resources/tracking' },
    ],
  },
];

const OvercomingPain = () => {
  return (
    <div className="overcoming-pain">
      <section className="hero">
        <div className="container">
          <h1>Overcoming Pelvic Pain</h1>
          <p className="lead">
            A comprehensive guide to managing and overcoming chronic pelvic pain.
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
                {module.resources && (
                  <div className="resources">
                    <h3>Related Resources</h3>
                    <ul>
                      {module.resources.map((resource) => (
                        <li key={resource.title}>
                          <a href={resource.link}>{resource.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OvercomingPain; 