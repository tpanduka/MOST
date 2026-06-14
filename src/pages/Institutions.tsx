import { ChevronRight, ExternalLink, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Institution {
  id: number;
  acronym: string;
  websiteUrl: string;
  name: string;
  description: string;
}

export function Institutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/institutions')
      .then(res => res.json())
      .then(data => {
        setInstitutions(data);
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
            <span>Institutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Institutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Explore the specialized research institutes, centers, and commissions driving scientific progress and technology transfer in Sri Lanka.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="py-20 text-center text-slate-500">Loading institutions...</div>
          ) : institutions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutions.map((inst, index) => (
                <motion.div 
                  key={inst.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 border border-blue-100">
                      <Building2 size={24} />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">{inst.acronym}</h3>
                    </div>
                    <h4 className="text-sm font-semibold text-blue-700 mb-3">{inst.name}</h4>
                    <p className="text-slate-600 text-sm flex-1">{inst.description}</p>
                  </div>
                  <div className="border-t border-slate-100 p-4 bg-slate-50">
                    <a 
                      href={inst.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500">
              <p className="text-lg font-medium">No institutions available.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
