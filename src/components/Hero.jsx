import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(1247);

  const messages = [
    { user: "Leo", message: "Hey everyone! Who's up for a video call?", color: "text-blue-600", badge: "🎮", time: "2:34 PM", status: "online" },
    { user: "Sarah", message: "I'm in! Starting my camera now 📹", color: "text-pink-600", badge: "⭐", time: "2:35 PM", status: "streaming" },
    { user: "Mike", message: "Screen sharing the new project! 🚀", color: "text-green-600", badge: "💼", time: "2:36 PM", status: "online" },
    { user: "Emma", message: "Love the new voice filters! 🎭", color: "text-purple-600", badge: "🎨", time: "2:37 PM", status: "online" },
    { user: "David", message: "Anyone from Tokyo here? 🌸", color: "text-orange-600", badge: "🌍", time: "2:38 PM", status: "away" },
    { user: "Luna", message: "Just joined! This app is amazing ✨", color: "text-indigo-600", badge: "🦄", time: "2:39 PM", status: "online" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setOnlineUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="hero-text space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Your conversations{' '}
              <span className="block">like never before</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
              Connect instantly with people worldwide — chat, call, and make new friends without borders.
            </p>

            <div className="flex flex-col gap-3 items-start">
              <div className="relative">
                <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg relative z-10">
                  Start Connecting
                </button>
                <div className="absolute -bottom-2 left-0 right-0 h-5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-b-xl opacity-80"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm ml-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8m-8 4h5m-9 4h12a4 4 0 004-4V7a4 4 0 00-4-4H6a4 4 0 00-4 4v9a4 4 0 004 4z" />
                </svg>
                Join millions of people already chatting and calling worldwide.
              </div>
            </div>
          </div>

          {/* Right side - Animated Chat Demo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md h-[26rem] sm:h-[28rem] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-3xl relative overflow-hidden shadow-2xl">

              {/* Chat Interface */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 sm:p-4 border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">C</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Chatzyr</h3>
                      <p className="text-xs text-gray-500">{onlineUsers.toLocaleString()} online • 12 streaming</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-3 sm:p-4 space-y-3 h-56 sm:h-64 overflow-y-auto scrollbar-hide">
                  {messages.slice(0, currentMessage + 1).map((msg, index) => (
                    <div
                      key={index}
                      className={`transform transition-all duration-500 ${index <= currentMessage ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                        }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.user}`}
                            alt={msg.user}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`font-bold text-sm ${msg.color}`}>{msg.user}</span>
                            {msg.status === 'streaming' && (
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">LIVE</span>
                            )}
                          </div>
                          <div className="border-l-4 border-gray-200 pl-3">
                            <p className={`text-sm ${msg.color} font-medium`}>{msg.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex items-start gap-2 animate-pulse">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Josh`}
                          alt="Josh"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                      </div>
                      <div className="border-l-4 border-gray-200 pl-3 pt-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-2 sm:p-3 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-lg px-3 py-2 text-sm text-gray-500 border shadow-sm">
                      Type your message...
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-all">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          {/* Floating notifications - responsive positioning */}
          <div className="absolute top-8 right-2 sm:top-30 right-4 lg:right-8 xl:right-12 bg-white rounded-xl shadow-2xl p-2 sm:p-3 border border-gray-200 z-10">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Live Stream</span>
            </div>
          </div>

          <div className="absolute top-36 sm:top-45 right-2 sm:right-4 lg:right-8 xl:right-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-2 sm:p-3 border border-gray-200 z-10">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{onlineUsers.toLocaleString()} online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;