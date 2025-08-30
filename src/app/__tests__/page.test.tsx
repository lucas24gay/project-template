import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test/renderWithProviders';

import Home from '../page';

it('renders the starter page', () => {
  renderWithProviders(<Home />);

  // This line of text exists in the CNA starter
  expect(screen.getByText(/get started by editing/i)).toBeInTheDocument();

  // And there are several resource links
  expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
});
