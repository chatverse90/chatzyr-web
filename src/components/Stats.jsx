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
        <div className="p-6 text-black text-center">
          <h3 className="text-xl font-bold mb-2">Real-time Chat</h3>
          <p className="text-gray-600 mb-4">
            Experience seamless communication with instant messaging capabilities.
          </p>

          {/* BIG CHAT ICON with gradient */}
          <svg className="feature-icon" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="gradChat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <path d="M2 5a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3H8l-4 4v-4H5a3 3 0 01-3-3V5z" fill="url(#gradChat)" />
          </svg>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 text-black text-center">
          <h3 className="text-xl font-bold mb-2">Group Management</h3>
          <p className="text-gray-600 mb-4">
            Create and manage groups with advanced moderation tools.
          </p>

          {/* BIG GROUP ICON with gradient */}
          <svg
            className="mx-auto w-24 h-24"
            viewBox="0 0 55 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradGroup" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <g fill="url(#gradGroup)">
              <circle cx="32" cy="12" r="7" />
              <circle cx="18" cy="28" r="5" />
              <circle cx="46" cy="28" r="5" />
              <rect x="12" y="34" width="12" height="12" rx="3" />
              <rect x="40" y="34" width="12" height="12" rx="3" />
              <rect x="25" y="20" width="14" height="20" rx="3" />
            </g>
          </svg>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 text-black text-center">
          <h3 className="text-xl font-bold mb-2">File Sharing</h3>
          <p className="text-gray-600 mb-4">
            Share files, images, and documents with your community.
          </p>

          {/* BIG FILE ICON with gradient */}
          <svg className="feature-icon" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="gradFile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm0 0l6 6m-8 7v-6m0 6l-2-2m2 2l2-2" fill="url(#gradFile)" />
          </svg>
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
