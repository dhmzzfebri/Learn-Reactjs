import Link from 'next/link';
import { lato } from 'app/fonts';
import { TitleContainer } from './navbar.style';

export default function Title() {
  return (
    <TitleContainer>
      <Link href={'/'}>
        <h1 className={lato.className}>Digi Dreams</h1>
      </Link>
    </TitleContainer>
  );
}
