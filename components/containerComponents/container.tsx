import React from 'react';
import { DivContainer, NavContainer, FooterContainer } from './container.style';

interface ContainerProps {
  element: string;
  background?: string;
  position?: string;
  children: React.ReactNode;
}

export default function Container({
  children,
  element,
  background = 'white',
  position = 'static',
}: ContainerProps) {
  return (
    <>
      {element === 'nav' ? (
        <NavContainer $background={background} $position={position}>
          {children}
        </NavContainer>
      ) : element === 'footer' ? (
        <FooterContainer>{children}</FooterContainer>
      ) : (
        <DivContainer>{children}</DivContainer>
      )}
    </>
  );
}
