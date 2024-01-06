import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  MenuContainer,
  TitleContainer,
  ListLink,
  ListItem,
  DekstopContact,
  MobileContact,
} from './navbar.style';
import Text from '../text/text';
import React from 'react';

interface HamburgerProps {
  condition: boolean;
}

export default function LinkComponent({ condition }: HamburgerProps) {
  const pathName = usePathname();

  return (
    <>
      <TitleContainer>
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
      </TitleContainer>

      <MenuContainer $isShow={condition}>
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

        <MobileContact>
          <Link data-testid="mobile-contact" href={'contact'}>
            Lets Talk
          </Link>
        </MobileContact>
      </MenuContainer>

      <DekstopContact>
        <Link data-testid="dekstop-contact" href={'contact'}>
          Lets Talk
        </Link>
      </DekstopContact>
    </>
  );
}
