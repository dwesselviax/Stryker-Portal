import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const DEFAULT_THEME = {
  colorBlack: '#000000',
  colorGold: '#FFB500',
  colorTeal: '#4C7D7A',
  colorBlue: '#0116EB',
  colorPurple: '#7256CF',
  colorSuccess: '#2E7D32',
  colorWarning: '#F9A825',
  colorError: '#C62828',
  colorInfo: '#1565C0',
  fontHeading: '"Nunito Sans", Arial, Helvetica, sans-serif',
  fontBody: '"Roboto Slab", Cambria, Palatino, Georgia, serif',
  logoUrl: '/stryker-logo.svg',
  portalName: 'Stryker B2B Portal',
  borderRadius: '8px',
  darkMode: false,
};

export const useThemeStore = create(
  persist(
    (set, get) => ({
      ...DEFAULT_THEME,

      updateTheme: (updates) => {
        set(updates);
        if (typeof window !== 'undefined') {
          const state = { ...get(), ...updates };
          applyThemeToDOM(state);
        }
      },

      resetTheme: () => {
        set(DEFAULT_THEME);
        if (typeof window !== 'undefined') {
          applyThemeToDOM(DEFAULT_THEME);
        }
      },

      initializeTheme: () => {
        if (typeof window !== 'undefined') {
          applyThemeToDOM(get());
        }
      },
    }),
    {
      name: 'stryker-theme',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? localStorage : { getItem: () => null, setItem: () => {}, removeItem: () => {} }
      ),
    }
  )
);

function applyThemeToDOM(theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-gold', theme.colorGold);
  root.style.setProperty('--color-teal', theme.colorTeal);
  root.style.setProperty('--color-blue', theme.colorBlue);
  root.style.setProperty('--color-purple', theme.colorPurple);
  root.style.setProperty('--color-success', theme.colorSuccess);
  root.style.setProperty('--color-warning', theme.colorWarning);
  root.style.setProperty('--color-error', theme.colorError);
  root.style.setProperty('--color-info', theme.colorInfo);
  root.style.setProperty('--font-heading', theme.fontHeading);
  root.style.setProperty('--font-body', theme.fontBody);
  root.style.setProperty('--radius-md', theme.borderRadius);

  if (theme.darkMode) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}
