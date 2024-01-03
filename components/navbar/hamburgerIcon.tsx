import { useState } from 'react';
import { Hamburger, FirstSpan, SecondSpan, ThirdSpan } from './navbar.style';

interface HamburgerProps {
  handleShow: () => void;
  condition: boolean;
}

export default function HamburgerIcon({
  handleShow,
  condition,
}: HamburgerProps) {
  return (
    <Hamburger onClick={handleShow}>
      <FirstSpan $isShow={condition}></FirstSpan>
      <SecondSpan $isShow={condition}></SecondSpan>
      <ThirdSpan $isShow={condition}></ThirdSpan>
    </Hamburger>
  );
}
