import React, { useState } from 'react';

const ChatZyrNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Content");

  const newsItems = [
    {
      id: 1,
      title: "Breaking: Major Tech Announcement Shakes Industry",
      category: "Technology",
      image: "https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg",
      size: "large",
      date: "2 hours ago",
      route:'/blog'
    },
    {
      id: 2,
      title: "How AI is transforming content creation across platforms",
      category: "AI & Innovation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      size: "medium",
      date: "4 hours ago",
      route:'/blog'
    },
    {
      id: 3,
      title: "Traveling as a way of self-discovery and growth",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      size: "medium",
      date: "6 hours ago",
      route:'/blog'
    },
    {
      id: 4,
      title: "Designing for well-being: promoting positive digital habits",
      category: "Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      size: "small",
      date: "8 hours ago",
      route:'/blog'
    },
    {
      id: 5,
      title: "Audio Revolution: offers new possibilities for content creators",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop",
      size: "small",
      date: "10 hours ago",
      route:'/blog'
    },
    {
      id: 6,
      title: "The unseen of spending three years at Realitygate",
      category: "Career",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      size: "small",
      date: "12 hours ago",
      route:'/blog'
    },
    {
      id: 7,
      title: "Audio Revolution: offers new possibilities for content creators",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop",
      size: "small",
      date: "14 hours ago",
      route:'/blog'
    }
  ];

  const categories = ["All Content", "Technology", "AI & Innovation", "Lifestyle", "Design", "Innovation"];

  const filteredNews = selectedCategory === "All Content"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      {/* Header */}
      <header className="px-4 md:px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <div className="inline-block">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-gray-900 leading-tight">
                  ChatZyr
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full mb-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6 leading-tight">
                News
              </h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Last updated 2 min ago</span>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Stay ahead with the latest insights in AI, technology, and innovation.
                  <span className="text-red-600 font-semibold"> Curated daily</span> for professionals and enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="px-4 md:px-8 mb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${selectedCategory === category
                    ? 'bg-black text-white shadow-lg shadow-black/25 border border-gray-800'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredNews.length}</span> articles found
              {selectedCategory !== "All Content" && (
                <span className="ml-2">in <span className="font-medium text-red-600">{selectedCategory}</span></span>
              )}
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              <span className="text-sm">Filter by category</span>
            </div>
          </div>
        </div>
      </nav>

      {/* News Grid */}
      <main className="px-4 md:px-8 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-500/20 ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                    item.size === 'medium' ? 'md:col-span-1 md:row-span-2' :
                      'md:col-span-1 md:row-span-1'
                  }`}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-3xl"></div>

                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold border border-white/30 shadow-lg">
                    <div className={`w-2 h-2 rounded-full mr-2 ${item.category === 'Technology' ? 'bg-red-500' :
                        item.category === 'AI & Innovation' ? 'bg-green-400' :
                          item.category === 'Lifestyle' ? 'bg-yellow-300' :
                            item.category === 'Design' ? 'bg-gray-500' :
                              item.category === 'Innovation' ? 'bg-red-400' :
                                'bg-blue-600'
                      }`}></div>
                    {item.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className={`text-white font-bold leading-tight mb-4 ${item.size === 'large' ? 'text-2xl md:text-3xl' :
                      item.size === 'medium' ? 'text-lg md:text-xl' :
                        'text-base md:text-lg'
                    }`}>
                    {item.title}
                  </h3>

                  {/* Hover overlay */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/90 text-sm font-medium">
                        <span> <a href="/blog">Read article</a></span>
                        <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Load More Button */}
      <div className="text-center pb-16 relative z-10">
        <button className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-gray-500/30 border border-gray-800 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95">
          {/* Shiny gradient sweep effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-400/10 to-gray-600/0 opacity-0 group-hover:opacity-100 animate-[shine_1.2s_ease-in-out] rounded-full"></span>

          <span className="relative z-10 flex items-center gap-2">
            Load More Stories
            <svg
              className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>

        <style>
          {`
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}
        </style>


      </div>
    </div>
  );
};

export default ChatZyrNews;