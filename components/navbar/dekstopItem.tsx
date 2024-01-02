import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  DekstopContainer,
  ListLink,
  ListItem,
  ContactContainer,
} from './navbar.style';

export default function DesktopItem() {
  const pathName = usePathname();

  return (
    <>
      <DekstopContainer>
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
      </DekstopContainer>

      <DekstopContainer>
        <ContactContainer>
          <Link href={'contact'}>Lets Talk</Link>
        </ContactContainer>
      </DekstopContainer>
    </>
  );
}
