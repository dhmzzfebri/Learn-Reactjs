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
import { lato } from '@/app/fonts';
import { inter } from '@/app/fonts';

interface HamburgerProps {
  handleShow: () => void;
  condition: boolean;
}

export default function Menu({ handleShow, condition }: HamburgerProps) {
  const pathName = usePathname();

  return (
    <>
      <NavWrapper>
        <TitleContainer>
          <Link href={'/'}>
            <h1 className={lato.className}>Digi Dreams</h1>
          </Link>
        </TitleContainer>

        <MenuContainer $isShow={condition}>
          <ListLink className={inter.className}>
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

          <ContactContainer className={inter.className}>
            <Link data-testid="dekstop-contact" href={'contact'}>
              Lets Talk
            </Link>
          </ContactContainer>
        </MenuContainer>

        <HamburgerContainer className={inter.className}>
          <Link href={'contact'}>Lets Talk</Link>
          <HamburgerIcon onClick={handleShow}>
            <FirstSpan $isShow={condition}></FirstSpan>
            <SecondSpan $isShow={condition}></SecondSpan>
            <ThirdSpan $isShow={condition}></ThirdSpan>
          </HamburgerIcon>
        </HamburgerContainer>
      </NavWrapper>
    </>
  );
}
