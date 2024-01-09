/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

it('App Router: Works with Server Components', () => {
  render(<Page />);
  expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Digi Dreams');
});
