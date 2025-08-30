import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test/renderWithProviders';

import Home from '../page';

it('renders the Next.js starter heading', () => {
  renderWithProviders(<Home />);
  expect(screen.getByRole('heading', { name: /next\.js/i })).toBeInTheDocument();
});
