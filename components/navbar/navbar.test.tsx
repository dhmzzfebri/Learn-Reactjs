import React from 'react';
import { screen, render } from '@testing-library/react';
import Navbar from './navbar';
import '@testing-library/jest-dom';

describe('testing navbar component', () => {
  test('check title text', () => {
    render(<Navbar />);
    const titleText = screen.getByText('Digi Dreams');
    expect(titleText).toBeInTheDocument();
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

    const letsTalkMobile = screen.getByTestId('mobile-contact');
    const letsTalkDekstop = screen.getByTestId('dekstop-contact');

    expect(letsTalkMobile).toHaveStyle('display: none');
    expect(letsTalkDekstop).toHaveStyle('display: inline');
  });
  test('check hamburger icon in dekstop view', () => {
    render(<Navbar />);

    const hamburgerIcon = screen.getByTestId('hamburger-icon');

    expect(hamburgerIcon).toHaveStyle('display: none');
  });
});
