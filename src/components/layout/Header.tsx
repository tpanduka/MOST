import { Link } from "react-router-dom";
import { Search, Globe, ChevronDown, Menu, Contrast } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useAccessibility } from "../../contexts/AccessibilityContext";
import { useState } from "react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { increaseFontSize, decreaseFontSize, resetFontSize, toggleHighContrast, highContrast } = useAccessibility();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const langNames = {
    en: 'English',
    si: 'සිංහල',
    ta: 'தமிழ்'
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-1 px-4 text-xs font-medium flex justify-between items-center relative z-50">
        <div className="flex gap-4 items-center">
          <a href="#main-content" className="hover:text-blue-300">Skip to content</a>
          <div className="hidden sm:flex gap-4 items-center">
            <div className="relative">
              <button 
                className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-300"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                <Globe size={14} /> {langNames[language]} <ChevronDown size={12}/>
              </button>
              {langMenuOpen && (
                <div className="absolute top-full mt-1 left-0 bg-white text-slate-800 rounded shadow-lg overflow-hidden flex flex-col py-1 min-w-[100px]">
                  {(['en', 'si', 'ta'] as const).map(l => (
                    <button 
                      key={l}
                      className={`px-3 py-1.5 text-left text-xs hover:bg-slate-100 ${language === l ? 'font-bold text-blue-600 bg-blue-50' : ''}`}
                      onClick={() => {
                        setLanguage(l);
                        setLangMenuOpen(false);
                      }}
                    >
                      {langNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 border-l border-slate-700 pl-4 ml-2">
              <button onClick={decreaseFontSize} className="hover:text-blue-300 font-bold" aria-label="Decrease font size" title="Decrease font size">A-</button>
              <button onClick={resetFontSize} className="hover:text-blue-300 font-bold" aria-label="Reset font size" title="Reset font size">A</button>
              <button onClick={increaseFontSize} className="hover:text-blue-300 font-bold" aria-label="Increase font size" title="Increase font size">A+</button>
              <button 
                onClick={toggleHighContrast} 
                className={`ml-2 flex items-center justify-center p-1 rounded transition-colors ${highContrast ? 'bg-white text-slate-900' : 'hover:text-blue-300'}`} 
                aria-label="Toggle High Contrast" 
                title="Toggle High Contrast"
              >
                <Contrast size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-blue-300">{t('nav.contact')}</Link>
          <Link to="/admin" className="hover:text-blue-300">Admin Login</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img 
              src="https://i.ibb.co/23bb9NcG/Chat-GPT-Image-Jun-15-2026-03-25-30-AM.png" 
              alt="Ministry Emblem" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">Ministry of Science & Technology</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Sri Lanka</p>
          </div>
        </Link>
        <div className="flex items-center relative w-full sm:w-auto">
          <input 
            type="text" 
            placeholder="Search the portal..." 
            className="pl-4 pr-10 py-2 border border-slate-300 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          />
          <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 flex justify-between sm:justify-start items-center">
          <button className="sm:hidden py-3 flex items-center gap-2 font-medium">
            <Menu size={20} /> Menu
          </button>
          <ul className="hidden sm:flex text-sm font-medium">
            <li><Link to="/" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.home')}</Link></li>
            <li><Link to="/about" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/divisions" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.divisions')}</Link></li>
            <li><Link to="/institutions" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.institutions')}</Link></li>
            <li><Link to="/programmes" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.programmes')}</Link></li>
            <li><Link to="/news" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.news')}</Link></li>
            <li><Link to="/procurement" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.procurement')}</Link></li>
            <li><Link to="/downloads" className="block py-3 px-4 hover:bg-blue-800 transition-colors">{t('nav.downloads')}</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
