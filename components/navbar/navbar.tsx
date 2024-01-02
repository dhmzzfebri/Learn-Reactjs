import { NavContainer, NavWrapper } from './navbar.style';
import PaddingContainer from '../paddingContainer/paddingContainer';
import { inter } from 'app/fonts';
import Title from './title';
import DesktopItem from './dekstopItem';
import HamburgerIcon from './hamburgerIcon';

export default function Navbar() {
  return (
    <NavContainer className={inter.className}>
      <PaddingContainer>
        <NavWrapper>
          <Title />
          <DesktopItem />
          <HamburgerIcon />
        </NavWrapper>
      </PaddingContainer>
    </NavContainer>
  );
}
