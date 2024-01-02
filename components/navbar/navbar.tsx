import {
  NavContainer,
  TitleContainer,
  ListLink,
  ListItem,
  NavWrapper,
  ContactContainer,
} from './navbar.style';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PaddingContainer from '../paddingContainer/paddingContainer';

export default function Navbar() {
  const pathName = usePathname();

  return (
    <NavContainer>
      <PaddingContainer>
        <NavWrapper>
          <TitleContainer>
            <Link href={'/'}>
              <h1>Digi Dreams</h1>
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
        </NavWrapper>
      </PaddingContainer>
    </NavContainer>
  );
}
