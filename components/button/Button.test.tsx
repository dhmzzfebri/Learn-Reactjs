import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders primary button with text', () => {
    const { getByTestId, getByText } = render(
      <Button Type="primary" Content="Click me" />,
    );

    const button = getByTestId('button--primary');
    expect(button).toBeInTheDocument();

    const buttonText = getByText('Click me');
    expect(buttonText).toBeInTheDocument();
  });

  it('executes onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button Content="text" Type="secondary" onClick={onClickMock} />,
    );

    const button = getByTestId('button--secondary');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
