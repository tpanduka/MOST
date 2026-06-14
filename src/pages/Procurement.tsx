import { useState, useMemo } from "react";
import { Search, Calendar, FileText, ChevronDown, Download, Filter, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

type Status = "Open" | "Closed" | "Awarded";

interface Notice {
  id: number;
  title: string;
  referenceNo: string;
  publishDate: string;
  deadline: string;
  status: Status;
  category: string;
}

const mockNotices: Notice[] = [
  { id: 1, title: "Supply and Delivery of Desktop Computers", referenceNo: "MOST/PRO/2026/01", publishDate: "2026-06-10", deadline: "2026-07-15", status: "Open", category: "Goods" },
  { id: 2, title: "Consultancy for National AI Strategy Framework", referenceNo: "MOST/PRO/2026/02", publishDate: "2026-06-01", deadline: "2026-06-20", status: "Open", category: "Consultancy" },
  { id: 3, title: "Renovation of the Planetarium Main Hall", referenceNo: "MOST/PRO/2026/03", publishDate: "2026-05-15", deadline: "2026-06-05", status: "Closed", category: "Works" },
  { id: 4, title: "Procurement of Laboratory Equipment for NIFS", referenceNo: "MOST/PRO/2026/04", publishDate: "2026-04-10", deadline: "2026-05-10", status: "Awarded", category: "Goods" },
  { id: 5, title: "Development of e-Government Research Portal", referenceNo: "MOST/PRO/2026/05", publishDate: "2026-06-12", deadline: "2026-07-28", status: "Open", category: "Services" },
  { id: 6, title: "Supply of Vehicle Fleet for NERDC", referenceNo: "MOST/PRO/2026/06", publishDate: "2026-03-01", deadline: "2026-03-30", status: "Awarded", category: "Goods" },
];

export function Procurement() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedNotices = useMemo(() => {
    return mockNotices
      .filter((notice) => {
        const matchesSearch = notice.title.toLowerCase().includes(search.toLowerCase()) || notice.referenceNo.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "All" || notice.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        const dateA = new Date(a.publishDate).getTime();
        const dateB = new Date(b.publishDate).getTime();
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
      });
  }, [search, statusFilter, sortOrder]);

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-300 font-medium mb-4">
            <Link to="/" className="hover:text-white">{t('nav.home')}</Link>
            <span className="text-slate-500">/</span>
            <span>{t('nav.procurement')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Procurement Notices</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Access active tenders, calls for proposals, and awarded contracts across the Ministry and its affiliated institutions.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row gap-4 items-end lg:items-center justify-between">
            <div className="w-full lg:w-1/3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Search Tenders</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title or ref no..." 
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <div className="relative">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="w-full sm:w-48 appearance-none pl-4 pr-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Awarded">Awarded</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium text-slate-700 mb-1">Sort by Publish Date</label>
                <div className="relative">
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="w-full sm:w-48 appearance-none pl-4 pr-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {filteredAndSortedNotices.length > 0 ? (
              <div className="divide-y divide-slate-200">
                {filteredAndSortedNotices.map((notice) => (
                  <motion.div 
                    key={notice.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{notice.referenceNo}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          notice.status === 'Open' ? 'bg-green-100 text-green-700' :
                          notice.status === 'Closed' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {notice.status}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          {notice.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{notice.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-1.5"><Calendar size={16} className="text-slate-400"/> Published: {notice.publishDate}</div>
                        <div className="flex items-center gap-1.5"><Calendar size={16} className={notice.status === 'Open' ? 'text-orange-500' : 'text-slate-400'}/> Deadline: <span className={notice.status === 'Open' ? 'font-semibold text-orange-600' : ''}>{notice.deadline}</span></div>
                      </div>
                    </div>
                    <div className="shrink-0 mt-4 md:mt-0">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm font-medium text-sm">
                        <Download size={16} /> Documents
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">No notices found</h3>
                <p className="text-slate-500 mt-1">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
