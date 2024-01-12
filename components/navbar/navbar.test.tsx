import React from 'react';
import { screen, render } from '@testing-library/react';
import Navbar from './navbar';
import '@testing-library/jest-dom';

describe('testing navbar component', () => {
  test('check title text in Dekstop view', () => {
    render(<Navbar />);
    const mobileTitleText = screen.getByTestId('mobile-title');
    const dekstopTitleText = screen.getByTestId(
      'dektop-&-mobile-navbar-is-show',
    );

    expect(dekstopTitleText).toHaveStyle('display: block');
    expect(mobileTitleText).toHaveStyle('display: none');
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
  test('check Lets Talk Text', () => {
    render(<Navbar />);

    const letsTalk = screen.getByTestId('lets-talk');

    expect(letsTalk).toHaveStyle('display: flex');
  });
  test('check hamburger icon in dekstop view', () => {
    render(<Navbar />);

    const hamburgerIcon = screen.getByTestId('hamburger-icon');

    expect(hamburgerIcon).toHaveStyle('display: none');
  });
});
