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
import Menu from './menu';
import Link from 'next/link';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Nav>
      <PaddingContainer>
        <NavWrapper>
          <Menu condition={isShow} />
          <HamburgerContainer>
            <Link data-testid="dekstop-contact" href={'contact'}>
              Lets Talk
            </Link>
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
