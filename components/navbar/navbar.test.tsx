import { screen, render } from '@testing-library/react';
import Navbar from './navbar';
import '@testing-library/jest-dom';

describe('testing navbar component', () => {
  test('check title text', () => {
    render(<Navbar />);
    const titleText = screen.getByText('Digi Dreams');
    expect(titleText).toBeTruthy();
  });
  test('test nav menu', () => {
    render(<Navbar />);
    const homeText = screen.getByText('Home');
    const aboutText = screen.getByText('About Us');
    const solutionsText = screen.getByText('Solutions');
    const blogText = screen.getByText('Blog');
    const intershipText = screen.getByText('Internship');

    expect(homeText).toBeTruthy();
    expect(aboutText).toBeTruthy();
    expect(solutionsText).toBeTruthy();
    expect(blogText).toBeTruthy();
    expect(intershipText).toBeTruthy();
  });
  test('check Lets Talk text in Dekstop view', () => {
    render(<Navbar />);

    const letsTalk = screen.getByTestId('dekstop-contact');
    expect(letsTalk).toHaveStyle('display: block');
  });
});
