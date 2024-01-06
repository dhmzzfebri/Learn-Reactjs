import React, { ElementType } from 'react';
import { TextComponent } from './text.style';

enum FontSize {
  tiny = '12px',
  small = '14px',
  regular2 = '16px',
  regular1 = '18px',
  subtitle4 = '20px',
  subtitle3 = '22px',
  subtitle2 = '24px',
  subtitle1 = '26px',
  title3 = '32px',
  title2 = '37px',
  title1 = '40px',
  headline2 = '64px',
  headline1 = '72px',
}

type FontFamily = 'Poppins' | 'Inter' | 'Lato' | 'Asap' | 'Satoshi';

interface TextProps {
  children: React.ReactNode;
  type: keyof typeof FontSize;
  tag: ElementType;
  family: FontFamily;
  color: string;
  weight: string;
}

export default function Text({
  children,
  type,
  tag,
  color,
  weight,
  family,
}: TextProps) {
  return (
    <TextComponent
      as={tag}
      $size={FontSize[type]}
      $color={color}
      $weight={weight}
      $family={family}
    >
      {children}
    </TextComponent>
  );
}
