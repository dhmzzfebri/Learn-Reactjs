import { screen, render } from '@testing-library/react';
import Navbar from './navbar';

describe('testing navbar component', () => {
  test('check title text', () => {
    render(<Navbar />);
    const titleText = screen.getByText('Digi Dreams');
    expect(titleText).toBeTruthy();
  });
});
