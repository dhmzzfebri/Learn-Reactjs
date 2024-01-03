import { inter } from 'app/fonts';
import {
  MobileContainer,
  ListLink,
  ListItem,
  ContactContainer,
} from './navbar.style';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileProps {
  isShow: boolean;
}

export default function MobileItem({ isShow }: MobileProps) {
  const pathName = usePathname();

  return (
    <MobileContainer $isShow={isShow}>
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
    </MobileContainer>
  );
}
