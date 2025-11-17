import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your ChatZyr Premium subscription at any time. There are no long-term commitments, and you can continue to enjoy the benefits until the end of your billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 30-day free trial for new users. Experience all the benefits of ChatZyr Premium before deciding to subscribe."
    },
    {
      question: "How do I download conversations for offline access?",
      answer: "With ChatZyr Premium, you can download any conversation by simply tapping the download button next to it. Once downloaded, your conversations will be available to access offline anytime, anywhere."
    },
    {
      question: "Can I share my account with others?",
      answer: "Your ChatZyr Premium account is intended for individual use. To share the experience with others, each user should have their own subscription to enjoy personalized AI responses and features."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about ChatZyr. Can't find the answer you're looking for? 
          Contact our support team.
        </p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
