import { ChevronRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  slug: string;
  category: string;
  publishedDate: string | null;
  status: string;
}

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-300 font-medium mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span>News & Events</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">News & Announcements</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="py-20 text-center text-slate-500">Loading latest news...</div>
          ) : news.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400">No Image</div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">{item.category || "General"}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{item.slug}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <Calendar size={14} />
                      <span>{item.publishedDate ? new Date(item.publishedDate).toLocaleDateString() : "Unknown Date"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500">
              <p className="text-lg font-medium">No recent news available.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
