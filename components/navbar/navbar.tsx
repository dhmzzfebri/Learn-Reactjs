import { useState } from 'react';
import PaddingContainer from '../paddingContainer/paddingContainer';
import {
  Nav,
  NavWrapper,
  HamburgerContainer,
  HamburgerIcon,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
} from './navbar.style';
import LinkComponent from './link';
import React from 'react';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Nav>
      <PaddingContainer>
        <NavWrapper>
          <LinkComponent condition={isShow} />
          <HamburgerContainer>
            <HamburgerIcon onClick={handleShow} data-testid="hamburger-icon">
              <FirstSpan $isShow={isShow}></FirstSpan>
              <SecondSpan $isShow={isShow}></SecondSpan>
              <ThirdSpan $isShow={isShow}></ThirdSpan>
            </HamburgerIcon>
          </HamburgerContainer>
        </NavWrapper>
      </PaddingContainer>
    </Nav>
  );
}
