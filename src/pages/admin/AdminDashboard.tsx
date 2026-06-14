import { FileText, Users, Eye, ArrowUpRight } from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">Total News</h3>
            <p className="text-3xl font-bold text-slate-900">248</p>
          </div>
          <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600">
            <FileText size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">Total Downloads</h3>
            <p className="text-3xl font-bold text-slate-900">1,204</p>
          </div>
          <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center text-emerald-600">
            <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">Web Traffic</h3>
            <p className="text-3xl font-bold text-slate-900">54.2k</p>
          </div>
          <div className="bg-indigo-50 w-10 h-10 rounded-lg flex items-center justify-center text-indigo-600">
            <Eye size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
          <div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">Total Users</h3>
            <p className="text-3xl font-bold text-slate-900">15</p>
          </div>
          <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center text-purple-600">
            <Users size={20} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Pending Review</h3>
          <div className="space-y-4 text-slate-500 text-center py-10">
            <p>No content currently waiting for review.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-4 text-slate-500 text-center py-10">
            <p>Activity logs will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
