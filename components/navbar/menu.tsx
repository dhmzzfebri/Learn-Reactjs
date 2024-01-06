import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  MenuContainer,
  TitleContainer,
  NavWrapper,
  ListLink,
  ListItem,
  ContactContainer,
  HamburgerContainer,
  HamburgerIcon,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
} from './navbar.style';

interface HamburgerProps {
  condition: boolean;
}

export default function Menu({ condition }: HamburgerProps) {
  const pathName = usePathname();

  return (
    <>
      <TitleContainer>
        <Link href={'/'}>
          <h1>Digi Dreams</h1>
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

        <ContactContainer>
          <Link data-testid="dekstop-contact" href={'contact'}>
            Lets Talk
          </Link>
        </ContactContainer>
      </MenuContainer>
    </>
  );
}
