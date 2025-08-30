import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import React from 'react';

function Providers({ children }: { children?: React.ReactNode }) {
  // Don’t include `children` in the props object — it’s JSX content.
  const providerProps = {
    attribute: 'class',
    defaultTheme: 'system',
    enableSystem: true,
  } satisfies ThemeProviderProps;

  return <NextThemesProvider {...providerProps}>{children}</NextThemesProvider>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: Providers, ...options });
}
