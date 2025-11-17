import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export default function NewsBlogPage() {
  const mainArticle = {
    category: "Technology",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    subtitle: "How artificial intelligence is revolutionizing diagnosis, treatment, and medical research",
    author: "Sarah Johnson",
    date: "October 26, 2025",
    readTime: "8 min read",
    content: [
      "Artificial intelligence is rapidly transforming the healthcare landscape, ushering in an era of unprecedented diagnostic accuracy and personalized treatment plans. From early disease detection to drug discovery, AI systems are proving to be invaluable allies to medical professionals worldwide.",
      "Recent studies have shown that AI-powered diagnostic tools can identify certain cancers with accuracy rates exceeding 95%, often catching diseases in their earliest, most treatable stages. Machine learning algorithms analyze vast amounts of medical imaging data, spotting subtle patterns that might escape even the most experienced radiologists.",
      "Beyond diagnostics, AI is revolutionizing treatment personalization. By analyzing genetic information, lifestyle factors, and medical histories, AI systems can recommend tailored treatment protocols that maximize effectiveness while minimizing side effects. This precision medicine approach is particularly promising in oncology, where targeted therapies can make the difference between life and death.",
      "The pharmaceutical industry is also experiencing an AI-driven renaissance. What once took years and billions of dollars in drug development can now be accelerated through AI simulations that predict molecular interactions and identify promising compounds. Several AI-discovered drugs are already in clinical trials, with early results showing tremendous promise.",
      "However, the integration of AI in healthcare isn't without challenges. Privacy concerns, algorithmic bias, and the need for robust regulatory frameworks remain critical issues that the medical community must address. Ensuring that AI tools are trained on diverse datasets and regularly audited for fairness is essential to prevent exacerbating existing healthcare disparities.",
      "As we look to the future, the collaboration between human expertise and artificial intelligence promises to unlock new frontiers in medicine. The goal isn't to replace healthcare professionals but to augment their capabilities, allowing them to focus on what they do best: providing compassionate, comprehensive care to patients."
    ]
  };

  const suggestedArticles = [
    {
      id: 1,
      category: "Science",
      title: "Breakthrough in Quantum Computing Achieved by Research Team",
      excerpt: "Scientists announce major advancement in quantum error correction, bringing practical quantum computers closer to reality.",
      readTime: "5 min read",
      date: "October 25, 2025"
    },
    {
      id: 2,
      category: "Environment",
      title: "Renewable Energy Surpasses Fossil Fuels in Global Production",
      excerpt: "Historic milestone reached as solar and wind energy generation exceeds traditional energy sources for the first time.",
      readTime: "6 min read",
      date: "October 24, 2025"
    },
    {
      id: 3,
      category: "Technology",
      title: "The Rise of Brain-Computer Interfaces: What You Need to Know",
      excerpt: "New developments in neural technology are enabling direct communication between human brains and digital devices.",
      readTime: "7 min read",
      date: "October 23, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Article */}
      <main className="max-w-4xl mx-auto px-6 py-32">
        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* Category Badge */}
          <span className="inline-block text-white text-sm font-semibold px-4 py-1 rounded-full mb-4" style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)'
          }}>
            {mainArticle.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            {mainArticle.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-6 italic">
            {mainArticle.subtitle}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 py-6 border-t border-b border-gray-200 mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)'
            }}>
              {mainArticle.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-black">{mainArticle.author}</h4>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {mainArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {mainArticle.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {mainArticle.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Suggested Articles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
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