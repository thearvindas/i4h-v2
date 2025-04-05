import { useState } from 'react';
import ResourceList from '../components/ResourceList';

// Sample treatment data - in a real app, this would come from an API or JSON file
const treatments = [
  {
    id: 'treatment1',
    title: 'Pelvic Floor Physical Therapy',
    category: 'physical-therapy',
    description: 'Helps relieve muscle tension and improve mobility through targeted exercises and manual therapy.',
  },
  {
    id: 'treatment2',
    title: 'Cognitive Behavioral Therapy',
    category: 'psychological',
    description: 'Addresses the psychological aspects of chronic pain and helps develop coping strategies.',
  },
  {
    id: 'treatment3',
    title: 'Medication Management',
    category: 'medical',
    description: 'Various medications can help manage pain and associated symptoms under medical supervision.',
  },
  {
    id: 'treatment4',
    title: 'Acupuncture',
    category: 'alternative',
    description: 'Traditional Chinese medicine technique that may help reduce pain and improve overall well-being.',
  },
];

const categories = [
  'all',
  'physical-therapy',
  'psychological',
  'medical',
  'alternative',
];

const Treatment = () => {
  return (
    <div className="treatment">
      <section className="hero">
        <div className="container">
          <h1>Treatment Options</h1>
          <p className="lead">
            Explore various treatment approaches for managing chronic pelvic pain.
          </p>
        </div>
      </section>

      <section className="treatments">
        <div className="container">
          <ResourceList resources={treatments} categories={categories} />
        </div>
      </section>
    </div>
  );
};

export default Treatment; 