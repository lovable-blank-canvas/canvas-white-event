import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'CN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  EN: {
    // Navigation
    'nav.title': 'Her Circle',
    
    // Hero
    'hero.title': 'Blank Canvas',
    'hero.subtitle': 'Welcome to Her Circle\'s inaugural event!',
    'hero.subtitle2': 'Join us for an elegant white-themed afternoon of connection and inspiration.',
    'hero.date': 'September 6, 2025',
    'hero.time': '3:00 PM - 5:00 PM',
    'hero.location': 'TBC',
    
    // Event Details
    'details.title': 'An Evening of',
    'details.title2': 'Pure Inspiration',
    'details.subtitle': 'Blank Canvas brings together creative minds in a thoughtfully designed space that celebrates the beauty of simplicity and the power of imagination.',
    'details.workshop.title': 'Creative Workshops',
    'details.workshop.desc': 'Hands-on sessions with renowned artists and designers exploring minimalist aesthetics.',
    'details.networking.title': 'Networking',
    'details.networking.desc': 'Connect with like-minded creatives, entrepreneurs, and thought leaders in an intimate setting.',
    'details.experience.title': 'Curated Experience',
    'details.experience.desc': 'Artisanal refreshments and carefully selected ambient music throughout the evening.',
    'details.performance.title': 'Live Performance',
    'details.performance.desc': 'Ambient acoustic performances that complement our minimalist aesthetic.',
    'details.schedule': 'Event Schedule',
    'details.schedule.welcome': 'Welcome & Registration',
    'details.schedule.opening': 'Opening Presentation',
    'details.schedule.workshops': 'Creative Workshops Begin',
    'details.schedule.networking': 'Networking & Refreshments',
    'details.schedule.closing': 'Closing Performance',
    
    // Footer
    'footer.copyright': '© 2025 Her Circle. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  CN: {
    // Navigation
    'nav.title': 'Her Circle',
    
    // Hero
    'hero.title': '空白画布',
    'hero.subtitle': '欢迎参加Her Circle的首届活动！',
    'hero.subtitle2': '与我们一起度过优雅的白色主题下午，连接心灵，启发灵感。',
    'hero.date': '2025年9月6日',
    'hero.time': '下午3:00 - 5:00',
    'hero.location': 'TBC',
    
    // Event Details
    'details.title': '纯粹灵感的',
    'details.title2': '夜晚',
    'details.subtitle': '空白画布汇集富有创意的思想者，在一个经过精心设计的空间中，庆祝简约之美和想象力的力量。',
    'details.workshop.title': '创意工作坊',
    'details.workshop.desc': '与知名艺术家和设计师一起探索极简美学的实践课程。',
    'details.networking.title': '社交联谊',
    'details.networking.desc': '在温馨的环境中与志同道合的创意人士、企业家和思想领袖建立联系。',
    'details.experience.title': '精心策划的体验',
    'details.experience.desc': '整个夜晚提供手工制作的茶点和精心挑选的环境音乐。',
    'details.performance.title': '现场表演',
    'details.performance.desc': '与我们极简美学相得益彰的环境音响表演。',
    'details.schedule': '活动安排',
    'details.schedule.welcome': '欢迎与签到',
    'details.schedule.opening': '开幕演讲',
    'details.schedule.workshops': '创意工作坊开始',
    'details.schedule.networking': '社交与茶点',
    'details.schedule.closing': '闭幕表演',
    
    // Footer
    'footer.copyright': '© 2025 Her Circle。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};