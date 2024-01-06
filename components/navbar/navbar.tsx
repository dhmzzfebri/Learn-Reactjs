import { useState } from 'react';
import Container from '../containerComponents/container';
import PaddingContainer from '../paddingContainer/paddingContainer';
import Menu from './menu';
import {
  NavWrapper,
  HamburgerContainer,
  HamburgerIcon,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
} from './navbar.style';
import Link from 'next/link';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Container element="nav" position="fixed">
      <PaddingContainer childContainer={false}>
        <NavWrapper>
          <Menu condition={isShow} />
          <HamburgerContainer>
            <Link data-testid="dekstop-contact" href={'contact'}>
              Lets Talk
            </Link>
            <HamburgerIcon data-testid="hamburger-icon" onClick={handleShow}>
              <FirstSpan $isShow={isShow}></FirstSpan>
              <SecondSpan $isShow={isShow}></SecondSpan>
              <ThirdSpan $isShow={isShow}></ThirdSpan>
            </HamburgerIcon>
          </HamburgerContainer>
        </NavWrapper>
      </PaddingContainer>
    </Container>
  );
}
