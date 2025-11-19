import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Calendar, Clock } from "lucide-react";

export default function NewsBlogPage() {
  const { id } = useParams(); // get dynamic id from URL

  const [article, setArticle] = useState(null);
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper: calculate read time
  const calculateReadTime = (content = "") => {
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / 200); // avg reading speed 200wpm
    return `${minutes} min read`;
  };

  // Helper: format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch selected article by ID
        const resArticle = await axios.get(
          `https://chatzyrserver-a921fc0b4b47.herokuapp.com/id/${id}`
        );

        const selected = resArticle.data.data;
        setArticle(selected);

        // Fetch all news for suggested articles
        const resAll = await axios.get(
          `https://chatzyrserver-a921fc0b4b47.herokuapp.com/getnews`
        );

        // Exclude current article from suggested
        const suggestions = resAll.data.data.filter((n) => n._id !== id);
        setSuggestedArticles(suggestions.slice(0, 3)); // only 3

      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
    </div>
    );
  }

  // Prepare article fields
  const title = article.title;
  const content = article.content || "";
  const paragraphs = typeof content === "string" ? content.split("\n") : [];
  const date = formatDate(article.updatedAt);
  const readTime = calculateReadTime(content);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-6 py-32">
        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* Category */}
          <span
            className="inline-block text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
            style={{
              background:
                "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
            }}
          >
            {article.tag || "News"}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            {title}
          </h1>

          {/* Subtitle (Optional - If you don’t have one, remove this) */}
          {article.subtitle && (
            <p className="text-xl text-gray-600 mb-6 italic">
              {article.subtitle}
            </p>
          )}

          {/* Author Info */}
          <div className="flex items-center gap-4 py-6 border-t border-b border-gray-200 mb-8">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                background:
                  "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
              }}
            >
              CT
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-black">Chatzyr Team</h4>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* Suggested Articles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-black mb-8">More Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {suggestedArticles.map((a) => (
              <div
                key={a._id}
                onClick={() => (window.location.href = `/blog/${a._id}`)}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {a.tag}
                  </span>

                  <h3 className="text-xl font-bold text-black mb-3 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all">
                    {a.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {a.description || "Click to read more..."}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {calculateReadTime(a.content || "")}
                    </span>
                    <span>{formatDate(a.updatedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
