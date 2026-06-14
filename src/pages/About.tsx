import { ArrowRight, CheckCircle2, ChevronRight, Users, Focus, Target, Lightbulb, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-300 font-medium mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">About the Ministry</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Driving economic growth and addressing national challenges through an effective Science, Technology and Innovation ecosystem.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 sticky top-8">
                <nav className="flex flex-col gap-1">
                  <a href="#vision" className="px-4 py-3 bg-blue-50 text-blue-700 font-semibold rounded-lg flex items-center justify-between">
                    Vision & Mission <ChevronRight size={16} />
                  </a>
                  <a href="#objectives" className="px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium rounded-lg flex items-center justify-between transition-colors">
                    Objectives <ChevronRight size={16} />
                  </a>
                  <a href="#leadership" className="px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium rounded-lg flex items-center justify-between transition-colors">
                    Ministry Leadership <ChevronRight size={16} />
                  </a>
                  <a href="#structure" className="px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium rounded-lg flex items-center justify-between transition-colors">
                    Organizational Structure <ChevronRight size={16} />
                  </a>
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:col-span-2 space-y-16">
              
              {/* Vision & Mission */}
              <div id="vision" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">Vision & Mission</h2>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 opacity-10">
                      <Target size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="bg-blue-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        <Focus className="text-blue-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                      <p className="text-blue-100 text-lg leading-relaxed font-medium">
                        "A developed nation through Science, Technology and Innovation."
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-800 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 opacity-10">
                      <Lightbulb size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        <MapPin className="text-slate-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                      <p className="text-slate-300 leading-relaxed font-medium">
                        "To create an effective STI ecosystem which drives economic growth to improve quality of life while addressing national and global challenges within the sustainable development framework."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div id="objectives" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">Objectives</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Standards and Accreditation</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Technology Transfer and Commercialization</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Expansion of demand-driven research</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Popularization of science, innovation, and technologies</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Research commercialization</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Promotion of inventions and innovations</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Support to public research institutes</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                    <span className="font-medium text-slate-700">Facilitation of standards and certification</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
