import React from 'react';

const Feedback = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Feedback for I4H Website');
    const body = encodeURIComponent(
      'Name:\n\nEmail:\n\nFeedback:\n\n'
    );
    window.location.href = `mailto:pelvicpain8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="feedback-page">
      <section className="hero">
        <div className="container">
          <h1>Share Your Thoughts</h1>
          <p className="lead">
            Your feedback helps us improve and better serve our community. Share your experience, suggestions, or recommend resources we should include.
          </p>
        </div>
      </section>

      <section className="feedback-content">
        <div className="container">
          <div className="feedback-card">
            <h2>Send us your feedback</h2>
            <p>Click the button below to open your email client and send us your feedback directly.</p>
            <button 
              onClick={handleEmailClick}
              className="button primary"
            >
              Send Feedback via Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback; 