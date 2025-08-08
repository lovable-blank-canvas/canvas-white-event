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
    'nav.title': 'Herizon',

    // Hero
    'hero.title': 'Blank Canvas',
    'hero.subtitle': 'Welcome to Herizon\'s inaugural event!',
    'hero.subtitle2': 'Join us for an elegant white-themed afternoon of fresh encounters and endless possibilities',
    'hero.date': 'September 6, 2025',
    'hero.time': '3:00 PM - 5:00 PM',
    'hero.location': '1 Holland Village Event Space',

    // Event Details
    'details.title': 'An Afternoon of',
    'details.title2': 'Connection & Inspiration',
    'details.subtitle': 'Blank Canvas brings together creative minds in a thoughtfully designed space that celebrates the beauty of simplicity and the power of imagination.',
    'details.workshop.title': 'Aroma Therapy',
    'details.workshop.desc': 'Engage your senses in a hands-on aroma workshop.',
    'details.networking.title': 'Networking',
    'details.networking.desc': 'Forge genuine connections with like-minded women in a supportive, non-toxic, and inspiring environment.',
    'details.experience.title': 'Curated Experience',
    'details.experience.desc': 'Enjoy light refreshments and great company.',
    'details.theme.title': 'White Theme',
    'details.theme.desc': 'Wear a touch of white - top, bottom or dress',

    'details.schedule': 'Event Schedule',
    'details.schedule.welcome': 'Welcome & Registration',
    'details.schedule.opening': 'Welcome message',
    'details.schedule.iceBreaker': 'Ice Breaker',
    'details.schedule.speedFriending': 'Speed Friending',
    'details.schedule.aromaWorkshop': 'Aroma Therapy Workshop by Event Partner',
    'details.schedule.photoSession': 'Photo Session',
    'details.schedule.eventEnd': 'Event End',

    // Footer
    'footer.copyright': '© 2025 Herizon. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  CN: {
    // Navigation
    'nav.title': 'Herizon',

    // Hero
    'hero.title': '空白画布',
    'hero.subtitle': '欢迎参加Herizon的首届活动！',
    'hero.subtitle2': '与我们一起在优雅的白色主题下午，迎接新的邂逅和无限的可能性。',
    'hero.date': '2025年9月6日',
    'hero.time': '下午3:00 - 5:00',
    'hero.location': '1 Holland Village 活动空间',

    // Event Details
    'details.title': '一个下午的',
    'details.title2': '连接与灵感',
    'details.subtitle': '空白画布汇集富有创意的思想者，在一个经过精心设计的空间中，庆祝简约之美和想象力的力量。',
    'details.workshop.title': '香薰疗法',
    'details.workshop.desc': '在实践香薰工作坊中调动您的感官。',
    'details.networking.title': '社交联谊',
    'details.networking.desc': '在支持、无毒和鼓舞人心的环境中，与志同道合的女性建立真诚的联系。',
    'details.experience.title': '精心策划的体验',
    'details.experience.desc': '享受精美茶点和愉快的陪伴。',
    'details.theme.title': '白色主题',
    'details.theme.desc': '穿戴一件白色单品——上衣、下装或连衣裙均可。',

    'details.schedule': '活动安排',
    'details.schedule.welcome': '欢迎与签到',
    'details.schedule.opening': '欢迎致辞',
    'details.schedule.iceBreaker': '破冰游戏',
    'details.schedule.speedFriending': '速配交友',
    'details.schedule.aromaWorkshop': '由活动合作伙伴举办的香薰疗法',
    'details.schedule.photoSession': '拍照留念',
    'details.schedule.eventEnd': '活动结束',

    // Footer
    'footer.copyright': '© 2025 Herizon。保留所有权利。',
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