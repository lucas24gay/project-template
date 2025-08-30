import { render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import React from 'react';

// Add more providers here if you introduce state/query/i18n providers.
function Providers({ children }: { children?: React.ReactNode }) {
  // Avoid passing `children` inside a props object; pass it as the third arg.
  return React.createElement(
    NextThemesProvider,
    {
      attribute: 'class',
      defaultTheme: 'system',
      enableSystem: true,
    } as ThemeProviderProps,
    children,
  );
}

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: Providers, ...options });
}
