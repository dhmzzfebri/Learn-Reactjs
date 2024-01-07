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
import Text from '../text/text';

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
            <Text
              tag={'h1'}
              family="Lato"
              color="#383838"
              weight="900"
              type="subtitle2"
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

          <ContactContainer>
            <Link data-testid="dekstop-contact" href={'contact'}>
              Lets Talk
            </Link>
          </ContactContainer>
        </MenuContainer>

        <HamburgerContainer>
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
