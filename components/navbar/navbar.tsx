import { useState } from 'react';
import { NavWrapper, HamburgerContainer } from './navbar.style';
import Container from '../containerComponents/container';
import PaddingContainer from '../paddingContainer/paddingContainer';
import { inter } from 'app/fonts';
import Title from './title';
import DesktopItem from './dekstopItem';
import HamburgerIcon from './hamburgerIcon';
import MobileItem from './mobileItem';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Container element="nav" position="fixed">
      <PaddingContainer childContainer={false}>
        <NavWrapper className={inter.className}>
          <Title />
          <DesktopItem />
          <HamburgerContainer>
            <MobileItem isShow={isShow} />
            <HamburgerIcon handleShow={handleShow} condition={isShow} />
          </HamburgerContainer>
        </NavWrapper>
      </PaddingContainer>
    </Container>
  );
}
