import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatZyrNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Content");
  const [newsItems, setNewsItems] = useState([]);
  const [latestTime, setLatestTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [shareData, setShareData] = useState(null);



  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return "";

    const now = new Date();
    const updated = new Date(timestamp);
    const diffMs = now - updated;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Just now";
    if (minutes < 2) return "Under a minute ago";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 2) return "Under an hour ago";
    if (hours < 5) return `${hours} hours ago`;
    if (hours < 24) return "Few hours ago";
    if (days < 2) return "A day ago";
    if (days < 7) return "Few days ago";

    return `${days} days ago`;
  };

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://chatzyrserver-a921fc0b4b47.herokuapp.com/getnews"
        );

        const items = response.data.data;
        setNewsItems(items);

        // Find the latest updatedAt
        const latest = items.reduce((latest, item) => {
          const curr = new Date(item.updatedAt);
          return curr > latest ? curr : latest;
        }, new Date(0)); // start with oldest possible date

        // Set formatted OR raw date (your choice)
        setLatestTime(formatTimeAgo(latest)); // formatted
        // setLatestTime(latest);  // raw Date object

        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleShare = async (item) => {

    const sharePayload = {
      title: item.title,
      text: item.description || item.title,
      url: `https://chatzyr.net${item.shareableLink || `/blog/${item._id}`}`
    };

    // If browser supports native Web Share API (with files/images)
    if (navigator.share) {
      try {
        await navigator.share(sharePayload);
        return;
      } catch (err) {
        console.log("Native share failed, fallback will show.", err);
      }
    }

    // Fallback: open custom share modal
    setShareData({
      ...sharePayload,
      image: item.picture
    });
  };

  // Get unique categories from news items
  const categories = ["All Content", ...new Set(newsItems.map(item => item.tag))];

  const filteredNews = selectedCategory === "All Content"
    ? newsItems
    : newsItems.filter(item => item.tag === selectedCategory);

  // Assign sizes to news items for grid layout
  const getItemSize = (index) => {
    if (index === 0) return 'large';
    if (index === 1 || index === 2) return 'medium';
    return 'small';
  };

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
                  <span className="text-sm">Last updated {latestTime}</span>
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

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <p className="text-red-600 font-medium mb-4">Error loading news: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* News Grid */}
      {!loading && !error && (
        <main className="px-4 md:px-8 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {filteredNews.map((item, index) => {
                const size = getItemSize(index);
                return (
                  <article
                    key={item._id}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-500/20 ${size === 'large' ? 'md:col-span-2 md:row-span-2' :
                      size === 'medium' ? 'md:col-span-1 md:row-span-2' :
                        'md:col-span-1 md:row-span-1'
                      }`}
                  >
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-3xl"></div>

                    <div className="absolute inset-0">
                      <img
                        src={item.picture}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold border border-white/30 shadow-lg">
                        <div className="w-2 h-2 rounded-full mr-2 bg-red-500"></div>
                        {item.tag}
                      </span>
                    </div>


                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20 flex items-center gap-1">
                        {formatTimeAgo(item.updatedAt)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className={`text-white font-bold leading-tight mb-4 ${size === 'large' ? 'text-2xl md:text-3xl' :
                        size === 'medium' ? 'text-lg md:text-xl' :
                          'text-base md:text-lg'
                        }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      {item.description && size === 'large' && (
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">{item.description}</p>
                      )}

                      {/* Hover overlay */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-white/90 text-sm font-medium">
                            <span>
                              <a href={item.shareableLink || `/blog/${item._id}`} onClick={(e) => e.stopPropagation()}>Read article</a>
                            </span>
                            <svg className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          <div className="flex space-x-2">
                            {/* heart icon */}
                            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                            {/* shareableLink */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log("SHARE BUTTON CLICKED");
                                handleShare(item);
                              }}

                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
                            >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /> </svg>
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
                  </article>
                );
              })}
            </div>
          </div>
        </main>
      )}

      {/* Load More Button */}
      {!loading && !error && filteredNews.length > 0 && (
        <div className="text-center pb-16 relative z-10">
          <button className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-gray-500/30 border border-gray-800 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95">
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
      )}


      {shareData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-1/3 p-6 relative">

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShareData(null)}
            >
              ✕
            </button>

            {/* Preview Image */}
            <img
              src={shareData.image}
              alt="share preview"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {shareData.title}
            </h3>

            {/* Link */}
            <p className="text-sm text-blue-600 underline break-all mb-4">
              {shareData.url}
            </p>

            {/* Share Buttons */}
            <div className="grid grid-cols-3 gap-3">

              {/* Copy */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareData.url);
                  alert("Link copied!");
                }}
                className="flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                📋
                <span className="text-xs mt-1">Copy</span>
              </button>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareData.title + "\n" + shareData.url)}`}
                target="_blank"
                className="flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                💬
                <span className="text-xs mt-1">WhatsApp</span>
              </a>

              {/* Twitter */}
              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`}
                target="_blank"
                className="flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                🐦
                <span className="text-xs mt-1">Twitter</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`}
                target="_blank"
                className="flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                👍
                <span className="text-xs mt-1">Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}`}
                target="_blank"
                className="flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
              >
                💼
                <span className="text-xs mt-1">LinkedIn</span>
              </a>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatZyrNews;