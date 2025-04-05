import { motion } from 'framer-motion';

const modules = [
  {
    title: 'What is Chronic Pelvic Pain?',
    content: 'Chronic pelvic pain is pain in the area below the bellybutton and between the hips that lasts six months or longer. It can be a symptom of another disease, or it can be a condition in its own right. The pain may be steady or come and go, and it can range from mild to severe.',
  },
  {
    title: 'Symptoms',
    content: 'The pain can manifest in different ways, including: serious and steady pain, pain that comes and goes, dull aching, sharp pains or cramping, and pressure or heaviness deep within the pelvis. You might experience pain during sex, bowel movements, or urination. Other symptoms can include frequent urination, bloating, and digestive issues.',
  },
  {
    title: 'Common Causes',
    content: 'Several conditions can cause chronic pelvic pain, including: endometriosis, muscle and bone problems, nerve injuries, chronic pelvic inflammatory disease, fibroids, irritable bowel syndrome, and painful bladder syndrome (interstitial cystitis). Mental health factors like depression and chronic stress may also play a role.',
  },
  {
    title: 'When to Seek Help',
    content: 'You should see a healthcare professional if pelvic pain disrupts your daily life or if your symptoms seem to be getting worse. Early intervention can help identify the underlying cause and develop an effective treatment plan.',
  },
  {
    title: 'Risk Factors',
    content: 'Having multiple conditions that cause pelvic pain, such as endometriosis and fibroids, increases your risk. A history of pelvic inflammatory disease or physical/sexual abuse may also increase the risk of chronic pelvic pain.',
  }
];

const PelvicPain101 = () => {
  return (
    <div className="pelvic-pain-101">
      <section className="hero">
        <div className="container">
          <h1>Understanding Pelvic Pain</h1>
          <p className="lead">
            Learn about the basics of chronic pelvic pain, including causes, symptoms, and when to seek medical help.
          </p>
        </div>
      </section>

      <div className="content">
        {modules.map((module) => (
          <div key={module.title} className="module">
            <h2>{module.title}</h2>
            <p>{module.content}</p>
          </div>
        ))}
        
        <div className="source-attribution">
          <p>Source: Information adapted from Mayo Clinic's comprehensive guide on chronic pelvic pain. 
            <a href="https://www.mayoclinic.org/diseases-conditions/chronic-pelvic-pain/symptoms-causes/syc-20354368" 
              target="_blank" 
              rel="noopener noreferrer">
              Learn more at Mayo Clinic
            </a>
          </p>
        </div>
      </div>

      <section className="cta">
        <div className="container">
          <div className="text-center">
            <h2>Need Professional Support?</h2>
            <p className="lead">
              Explore our curated collection of treatment resources and healthcare providers.
            </p>
            <div className="cta-buttons">
              <a href="/resources" className="button primary">
                Browse Treatment Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PelvicPain101; 