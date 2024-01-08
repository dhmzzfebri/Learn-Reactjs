'use client';
import Link from 'next/link';
import { StyledButton } from './Button.style';
import { useState } from 'react';

export interface ButtonProps {
  /**
   * Enter the button type "primary" or "secondary"
   */
  Type: 'primary' | 'secondary';
  /**
   * Enter content button
   */
  Content: string;
  /**
   * Leading to where
   */
  href?: string;
  /**
   * Enter additional styles
   */
  style?: React.CSSProperties;
  /**
   * Action
   */
  onClick?: () => void;
}

export default function Button({
  Type = 'primary',
  Content,
  href,
  style,
  ...props
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const mode = `button--${Type}`;
  return (
    <>
      <Link href={href || '/'}>
        <StyledButton
          data-testid={`button--${Type}`}
          className={['button', mode].join(' ')}
          disabled={isDisabled}
          style={style}
          {...props}
        >
          {Content}
        </StyledButton>
      </Link>
    </>
  );
}
