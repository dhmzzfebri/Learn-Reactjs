import React from 'react';
import { Padding } from './paddingContainer.style';

interface PaddingProps {
  children: React.ReactNode;
  childContainer: boolean;
}

export default function PaddingContainer({
  childContainer,
  children,
}: PaddingProps) {
  return <Padding $isChildContainer={childContainer}>{children}</Padding>;
}
