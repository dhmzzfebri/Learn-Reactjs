import {
  NavContainer,
  TitleContainer,
  ListLink,
  ListItem,
  NavWrapper,
  ContactContainer,
  Hamburger,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
} from './navbar.style';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PaddingContainer from '../paddingContainer/paddingContainer';
import { inter } from 'app/fonts';
import { lato } from 'app/fonts';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const pathName = usePathname();

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <NavContainer className={inter.className}>
      <PaddingContainer>
        <NavWrapper>
          <TitleContainer>
            <Link href={'/'}>
              <h1 className={lato.className}>Digi Dreams</h1>
            </Link>
          </TitleContainer>
          <ListLink>
            <ListItem $isSelect={pathName === '/'}>
              <Link href={'/'}>Home</Link>
            </ListItem>
            <ListItem $isSelect={pathName === '/about'}>
              <Link href={'/about'}>About Us</Link>
            </ListItem>
            <ListItem $isSelect={pathName === '/solutions'}>
              <Link href={'/solutions'}>Solutions</Link>
            </ListItem>
            <ListItem $isSelect={pathName === '/blog'}>
              <Link href={'/blog'}>Blog</Link>
            </ListItem>
            <ListItem $isSelect={pathName === '/internship'}>
              <Link href={'/internship'}>Internship</Link>
            </ListItem>
          </ListLink>
          <ContactContainer>
            <Link href={'contact'}>Lets Talk</Link>
          </ContactContainer>
          <Hamburger onClick={handleShow}>
            <FirstSpan $isShow={isShow}></FirstSpan>
            <SecondSpan $isShow={isShow}></SecondSpan>
            <ThirdSpan $isShow={isShow}></ThirdSpan>
          </Hamburger>
        </NavWrapper>
      </PaddingContainer>
    </NavContainer>
  );
}
