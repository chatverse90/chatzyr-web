import CardSwap, { Card } from '../components/scroll'
import React from 'react';
// import image1 from '../assets/Slide1.PNG'
// import image2 from '../assets/Slide2.PNG'
// import image3 from '../assets/Slide3.PNG'

export const CardAnim = () => {
  const data = [
    {
      title: "LIVE AVATAR CHAT 24/7",
      description: "Chat Now with 1,000's of other people from around the world.",
      icon: "💬"
    },
    {
      title: "PRIVATE MESSAGES",
      description: "Send private messages, and chat in private with whomever you choose.",
      icon: "🔒"
    },
    {
      title: "MESSAGE BOARDS",
      description: "Start new discussions using our Message Boards.",
      icon: "📋"
    },
    {
      title: "PROFILES",
      description: "Create and customize your profile. Show the world what you are all about.",
      icon: "👤"
    },
    {
      title: "NEW FRIENDS",
      description: "Make new friends who share similar interests.",
      icon: "🤝"
    },
    {
      title: "PRIVACY",
      description: "Change your privacy level. You choose who you want to chat with.",
      icon: "🛡️"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover everything you need to create meaningful connections and engaging conversations
          </p>
        </div>

        {/* Features Grid - Separate from CardSwap */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* Icon - Simple without gradient background */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};