import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { LayoutDashboard, Users, Focus, Target, Lightbulb, MapPin, Database, LogOut } from "lucide-react";

export function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-700 text-white font-bold tracking-tight">
          Ministry CMS
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link to="/admin/news" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <Focus size={18} /> News & Events
          </Link>
          <Link to="/admin/publications" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <Database size={18} /> Publications
          </Link>
          <Link to="/admin/institutions" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <Target size={18} /> Institutions
          </Link>
          <Link to="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
            <Users size={18} /> User Management
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <LogOut size={18} /> Go to Site
          </Link>
        </div>
      </aside>
      
      {/* Main Container */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Admin User</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>
        
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
