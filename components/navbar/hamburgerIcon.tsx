import { useState } from 'react';
import { Hamburger, FirstSpan, SecondSpan, ThirdSpan } from './navbar.style';

export default function HamburgerIcon() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Hamburger onClick={handleShow}>
      <FirstSpan $isShow={isShow}></FirstSpan>
      <SecondSpan $isShow={isShow}></SecondSpan>
      <ThirdSpan $isShow={isShow}></ThirdSpan>
    </Hamburger>
  );
}
