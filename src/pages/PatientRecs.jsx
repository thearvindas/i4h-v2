import ResourceList from '../components/ResourceList';

// Sample recommendations data - in a real app, this would come from an API or JSON file
const recommendations = [
  {
    id: 'rec1',
    title: 'The Pain Management Workbook',
    category: 'books',
    description: 'A comprehensive guide to understanding and managing chronic pain.',
  },
  {
    id: 'rec2',
    title: 'Meditation for Pain Relief',
    category: 'tools',
    description: 'Guided meditation practices specifically designed for pain management.',
  },
  {
    id: 'rec3',
    title: 'Daily Movement Routine',
    category: 'tips',
    description: 'Gentle exercises and stretches to maintain mobility and reduce pain.',
  },
  {
    id: 'rec4',
    title: 'Pain Tracking App',
    category: 'tools',
    description: 'Track your symptoms, triggers, and progress over time.',
  },
];

const categories = ['all', 'books', 'tools', 'tips'];

const PatientRecs = () => {
  return (
    <div className="patient-recs">
      <section className="hero">
        <div className="container">
          <h1>Patient Recommendations</h1>
          <p className="lead">
            Resources and tools recommended by others who have experienced chronic pelvic pain.
          </p>
        </div>
      </section>

      <section className="recommendations">
        <div className="container">
          <ResourceList resources={recommendations} categories={categories} />
        </div>
      </section>
    </div>
  );
};

export default PatientRecs; 