import { motion } from "motion/react";
import { ArrowRight, FileText, Blocks, Newspaper, Microscope, Landmark, ChevronRight, FlaskConical, Lightbulb, BadgeCheck, Share2, GraduationCap, Telescope, BrainCircuit, MonitorSmartphone, Atom, Satellite, Dna, Globe, Rocket, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[600px] sm:min-h-[700px] flex items-center">
        {/* Animated Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 mix-blend-luminosity">
          <iframe
            src="https://www.youtube.com/embed/VlPtGk4ZklU?autoplay=1&mute=1&loop=1&playlist=VlPtGk4ZklU&controls=0&disablekb=1&playsinline=1&rel=0&showinfo=0"
            className="absolute w-[300vw] h-[300vh] sm:w-[150vw] sm:h-[150vh] top-1/2 left-auto right-0 translate-x-[20%] sm:translate-x-[10%] -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media; picture-in-picture"
            title="Background Video"
            style={{ border: 0 }}
          />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              National Portal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
              Empowering Sri Lanka through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Science, Technology and Innovation</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed drop-shadow">
              Creating an effective STI ecosystem driving economic growth, improving quality of life, and addressing global challenges within a sustainable development framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Discover Our Vision <ArrowRight size={18} />
              </Link>
              <Link to="/institutions" className="bg-white/10 backdrop-blur border border-white/20 hover:border-white/40 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors">
                View Institutions
              </Link>
            </div>
          </motion.div>
          <div className="hidden md:flex justify-end items-center relative pr-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[400px] h-[400px] rounded-full flex items-center justify-center relative"
            >
              {/* Central Glowing Globe */}
              <div className="absolute w-32 h-32 bg-blue-900/40 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900/50 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                <Globe size={48} className="text-cyan-300 animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-400/20"></div>
              <div className="absolute inset-4 rounded-full border border-cyan-400/10 border-dashed animate-[spin_60s_linear_infinite_reverse]"></div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                {[
                  { Icon: Microscope, color: "text-blue-400", glow: "shadow-[0_0_20px_rgba(96,165,250,0.6)] border-blue-400/30" },
                  { Icon: FlaskConical, color: "text-cyan-400", glow: "shadow-[0_0_20px_rgba(34,211,238,0.6)] border-cyan-400/30" },
                  { Icon: Telescope, color: "text-indigo-400", glow: "shadow-[0_0_20px_rgba(129,140,248,0.6)] border-indigo-400/30" },
                  { Icon: BrainCircuit, color: "text-purple-400", glow: "shadow-[0_0_20px_rgba(192,132,252,0.6)] border-purple-400/30" },
                  { Icon: Cpu, color: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(52,211,153,0.6)] border-emerald-400/30" },
                  { Icon: Atom, color: "text-fuchsia-400", glow: "shadow-[0_0_20px_rgba(232,121,249,0.6)] border-fuchsia-400/30" },
                  { Icon: Satellite, color: "text-sky-400", glow: "shadow-[0_0_20px_rgba(56,189,248,0.6)] border-sky-400/30" },
                  { Icon: Dna, color: "text-rose-400", glow: "shadow-[0_0_20px_rgba(251,113,133,0.6)] border-rose-400/30" },
                  { Icon: MonitorSmartphone, color: "text-teal-400", glow: "shadow-[0_0_20px_rgba(45,212,191,0.6)] border-teal-400/30" },
                  { Icon: Rocket, color: "text-amber-400", glow: "shadow-[0_0_20px_rgba(251,191,36,0.6)] border-amber-400/30" },
                ].map((item, i) => {
                  const angle = (i * 360) / 10;
                  return (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`,
                      }}
                    >
                      <div className={`w-full h-full flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-md border animate-[spin_40s_linear_infinite_reverse] ${item.glow}`}>
                        <item.Icon className={item.color} size={24} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20 mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickCard title="News & Events" icon={<Newspaper size={28} />} link="/news" />
          <QuickCard title="Publications" icon={<FileText size={28} />} link="/downloads" />
          <QuickCard title="Institutions" icon={<Landmark size={28} />} link="/institutions" />
          <QuickCard title="Vidatha" icon={<Blocks size={28} />} link="/divisions" bg="bg-blue-600 text-white border-blue-700 hover:bg-blue-500 hover:border-blue-600" isDark={true} />
        </div>
      </section>

      {/* Latest News & Focus Areas would go here */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest Announcements</h2>
              <p className="text-slate-500 mt-2">Updates from the Ministry and its institutions.</p>
            </div>
            <Link to="/news" className="hidden sm:flex text-blue-600 hover:text-blue-800 font-medium items-center gap-1">
              View all news <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder News Cards */}
            <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop" alt="Sustainable Energy Research" className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">Press Release</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">National Innovation Agency calls for proposals on sustainable energy</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">The National Innovation Agency (NIA) has officially launched its 2026 funding cycle for advanced sustainable energy research.</p>
                <span className="text-xs text-slate-400 font-medium">October 14, 2026</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1540506154086-cedd3aa5a1ee?w=800&auto=format&fit=crop" alt="Technology Exhibition" className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">Event</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">Shilpa Sena Exhibition 2026 dates announced</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">The next iteration of the national technology exhibition will be held at BMICH showcasing the latest technical advancements.</p>
                <span className="text-xs text-slate-400 font-medium">October 10, 2026</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop" alt="AI Research" className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">Policy</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">New guidelines issued for AI research in public institutions</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">The Ministry has published comprehensive guidelines for ethical deployment and research involving artificial intelligence models.</p>
                <span className="text-xs text-slate-400 font-medium">October 05, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="bg-slate-50 py-20 relative overflow-hidden">
        {/* Subtle background gradients for glassmorphism */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FocusCard title="Research & Development" icon={<FlaskConical size={32} />} />
            <FocusCard title="Innovation & Commercialization" icon={<Lightbulb size={32} />} />
            <FocusCard title="Standards & Accreditation" icon={<BadgeCheck size={32} />} />
            <FocusCard title="Technology Transfer" icon={<Share2 size={32} />} />
            <FocusCard title="STEM Education" icon={<GraduationCap size={32} />} />
            <FocusCard title="Space & Astronomy" icon={<Telescope size={32} />} />
            <FocusCard title="Artificial Intelligence" icon={<BrainCircuit size={32} />} />
            <FocusCard title="Digital Technology" icon={<MonitorSmartphone size={32} />} />
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickCard({ title, icon, link, bg = "bg-white text-slate-800 border-slate-200 hover:bg-slate-50 hover:border-blue-400", isDark = false }: { title: string, icon: React.ReactNode, link: string, bg?: string, isDark?: boolean }) {
  const baseShadow = isDark ? "0px 6px 0px 0px #1e3a8a" : "0px 6px 0px 0px #cbd5e1";
  const hoverShadow = isDark ? "0px 12px 0px 0px #1e3a8a" : "0px 12px 0px 0px #94a3b8";
  const tapShadow = isDark ? "0px 0px 0px 0px #1e3a8a" : "0px 0px 0px 0px #cbd5e1";
  
  return (
    <motion.div
      initial={{ boxShadow: baseShadow, y: 0 }}
      whileHover={{ y: -4, scale: 1.01, boxShadow: hoverShadow }}
      whileTap={{ y: 6, scale: 0.98, boxShadow: tapShadow }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ borderRadius: '0.75rem' }}
      className="h-full"
    >
      <Link to={link} className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 h-full transition-colors ${bg}`}>
        <div className={`mb-3 ${isDark ? 'text-white' : 'text-blue-600'}`}>{icon}</div>
        <span className="font-semibold text-sm sm:text-base text-center">{title}</span>
      </Link>
    </motion.div>
  );
}

function FocusCard({ title, icon }: { title: string, icon?: React.ReactNode }) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border-b-4 border-r-4 border-slate-300 border-t border-l border-white/50 shadow-md hover:shadow-xl hover:translate-y-[-4px] hover:translate-x-[-2px] hover:border-blue-400 hover:bg-white/60 active:translate-y-0 active:translate-x-0 active:border-b active:border-r transition-all duration-300 flex flex-col items-center justify-center min-h-40 cursor-pointer group gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="text-blue-600 group-hover:text-blue-500 transition-colors drop-shadow-sm group-hover:scale-110 duration-300 ease-out">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-800 text-center group-hover:text-blue-800 transition-colors drop-shadow-sm">{title}</h3>
    </div>
  );
}
