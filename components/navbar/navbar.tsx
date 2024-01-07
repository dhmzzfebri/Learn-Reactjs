import React from 'react';
import { useState } from 'react';
import Container from '../containerComponents/container';
import PaddingContainer from '../paddingContainer/paddingContainer';
import Menu from './menu';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Container element="nav" position="fixed">
      <PaddingContainer childContainer={false}>
        <Menu handleShow={handleShow} condition={isShow} />
      </PaddingContainer>
    </Container>
  );
}
