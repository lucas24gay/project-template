import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => cleanup());

// Patch missing APIs in JSDOM to avoid warnings
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserver;

// Minimal Next.js App Router mocks (extend as needed)
vi.mock('next/navigation', () => {
  const push = vi.fn();
  const replace = vi.fn();
  const back = vi.fn();
  const prefetch = vi.fn().mockResolvedValue(undefined);
  return {
    useRouter: () => ({ push, replace, back, prefetch }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  };
});
