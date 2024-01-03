import { useState } from 'react';
import { NavContainer, NavWrapper } from './navbar.style';
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
    <NavContainer className={inter.className}>
      <PaddingContainer>
        <NavWrapper $isShow={isShow}>
          <Title />
          <DesktopItem />
          <HamburgerIcon handleShow={handleShow} condition={isShow} />
          <MobileItem isShow={isShow} />
        </NavWrapper>
      </PaddingContainer>
    </NavContainer>
  );
}
