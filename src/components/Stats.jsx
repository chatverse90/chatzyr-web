import React from 'react';
import './Stats.css';
import CardSwap, { Card } from '../components/scroll'

const Stats = () => {
  const stats = [
    {
      number: "+50M",
      label: "Conversations",
      description: "Access a vast library of over 50 million conversations."
    },
    {
      number: "+10k",
      label: "Monthly Users",
      description: "Join a vibrant community growing each and every month."
    },
    {
      number: "+5K",
      label: "Active Groups",
      description: "Supporting thousands of friends."
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      description: "Our user experience gets a perfect rating from 9/10 users."
    }
  ];

  const scrollCards = [
    {
      content: (
        <div className="p-6 text-black">
          <h3 className="text-xl font-bold mb-2">Real-time Chat</h3>
          <p className="text-gray-600">Experience seamless communication with instant messaging capabilities.</p>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 text-black">
          <h3 className="text-xl font-bold mb-2">Group Management</h3>
          <p className="text-gray-600">Create and manage groups with advanced moderation tools.</p>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 text-black">
          <h3 className="text-xl font-bold mb-2">File Sharing</h3>
          <p className="text-gray-600">Share files, images, and documents with your community.</p>
        </div>
      )
    }
  ];

  return (
    <section className="section stats">
      <div className="container">
        {/* Title Section */}
        <div className="stats-header">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Join millions of users who trust Chatzyr for their communication needs
          </p>
        </div>

        {/* Main Content with Stats and Scroll Component */}
        <div className="stats-content">
          {/* Left Side - Stats */}
          <div className="stats-left">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Scroll Component */}
          <div className="stats-right">
            <CardSwap
              width={400}
              height={300}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
              containerClassName="stats-scroll-container"
            >
              {scrollCards.map((card, index) => (
                <Card key={index} customClass="bg-white border-gray-200 shadow-lg">
                  {card.content}
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
