import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'si' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Simple translation helper
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.divisions': 'Divisions',
    'nav.institutions': 'Institutions',
    'nav.programmes': 'Programmes',
    'nav.news': 'News',
    'nav.downloads': 'Downloads',
    'nav.contact': 'Contact Us',
    'nav.procurement': 'Procurement',
  },
  si: {
    'nav.home': 'මුල් පිටුව',
    'nav.about': 'අප ගැන',
    'nav.divisions': 'අංශ',
    'nav.institutions': 'ආයතන',
    'nav.programmes': 'වැඩසටහන්',
    'nav.news': 'පුවත්',
    'nav.downloads': 'බාගත කිරීම්',
    'nav.contact': 'අපව අමතන්න',
    'nav.procurement': 'සම්පාදන',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களை பற்றி',
    'nav.divisions': 'பிரிவுகள்',
    'nav.institutions': 'நிறுவனங்கள்',
    'nav.programmes': 'நிகழ்ச்சிகள்',
    'nav.news': 'செய்திகள்',
    'nav.downloads': 'பதிவிறக்கங்கள்',
    'nav.contact': 'தொடர்பு கொள்ள',
    'nav.procurement': 'கொள்முதல்',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
