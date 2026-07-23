import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeConfig {
  colors: {
    primary: {
      start: string;
      end: string;
    };
    secondary: {
      start: string;
      end: string;
    };
    accent: {
      start: string;
      end: string;
    };
  };
  gradients: {
    hero: string;
    section: string;
    button: string;
    card: string;
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      smooth: string;
      bounce: string;
      elastic: string;
    };
  };
}

const defaultTheme: ThemeConfig = {
  colors: {
    primary: {
      start: '#1e3a8a',
      end: '#7c3aed',
    },
    secondary: {
      start: '#059669',
      end: '#0891b2',
    },
    accent: {
      start: '#ea580c',
      end: '#ec4899',
    },
  },
  gradients: {
    hero: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)',
    section: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
    button: 'linear-gradient(135deg, #ea580c 0%, #ec4899 100%)',
    card: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  },
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },
};

const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeConfig;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
