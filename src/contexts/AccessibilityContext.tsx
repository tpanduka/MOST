import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSizeOptions = 14 | 16 | 18 | 20;

interface AccessibilityContextType {
  fontSize: FontSizeOptions;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSizeOptions>(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    const body = document.body;
    if (highContrast) {
      body.classList.add('high-contrast-mode');
    } else {
      body.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  const increaseFontSize = () => {
    setFontSize(prev => (prev < 20 ? (prev + 2) as FontSizeOptions : 20));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => (prev > 14 ? (prev - 2) as FontSizeOptions : 14));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{ 
      fontSize, 
      increaseFontSize, 
      decreaseFontSize, 
      resetFontSize,
      highContrast, 
      toggleHighContrast 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
