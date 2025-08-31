/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8', // ✅ use @vitest/coverage-v8
      reporter: ['text', 'lcov'], // ✅ lcov for Codecov, text for CI logs
      reportsDirectory: 'coverage',
      exclude: ['node_modules/', '.next/', 'dist/', 'coverage/', '**/*.d.ts', '**/__tests__/**'],
    },
  },
});
