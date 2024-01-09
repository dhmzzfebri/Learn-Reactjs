import React from 'react';
import { useState } from 'react';
import PaddingContainer from '../paddingContainer/paddingContainer';
import {
  MobileTitle,
  Nav,
  NavWrapper,
  HamburgerIcon,
  Overlay,
  Contact,
  NavOption,
} from './navbar.style';
import Menu from './menu';
import Text from '../text/text';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerImg from '@/assets/navbar/hamburger.svg';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
    document.body.style.overflow = isShow ? 'auto' : 'hidden';
  };

  return (
    <Nav>
      <Overlay $visible={isShow} onClick={handleShow}></Overlay>

      <PaddingContainer>
        <NavWrapper>
          <MobileTitle data-testid="mobile-title">
            <Link href={'/'}>
              <Text
                tag={'h1'}
                family="Lato"
                weight="900"
                color="#383838"
                type={'subtitle2'}
              >
                Digi Dreams
              </Text>
            </Link>
          </MobileTitle>

          <NavOption $isShow={isShow}>
            <Link data-testid="dektop-&-mobile-navbar-is-show" href={'/'}>
              <Text
                tag={'h1'}
                family="Lato"
                weight="900"
                color="#383838"
                type={'subtitle2'}
              >
                Digi Dreams
              </Text>
            </Link>

            <Menu />

            <Contact>
              <Link data-testid="lets-talk" href={'lets-talk'}>
                Lets Talk
              </Link>
            </Contact>
          </NavOption>

          <HamburgerIcon onClick={handleShow} data-testid="hamburger-icon">
            <Image src={HamburgerImg} alt="" />
          </HamburgerIcon>
        </NavWrapper>
      </PaddingContainer>
    </Nav>
  );
}
