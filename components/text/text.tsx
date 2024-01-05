import { ElementType } from 'react';
import { TextComponent } from './text.style';
import { inter, poppins, satoshi, lato, asap } from '@/app/fonts/fonts';

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

interface TextProps {
  children: React.ReactNode;
  type: keyof typeof FontSize;
  tag: ElementType;
  color: string;
  family: 'Poppins' | 'Inter' | 'Satoshi' | 'Lato' | 'Asap';
  weight: string;
  mobileType?: string;
}

export default function Text({
  children,
  type,
  tag,
  color,
  weight,
  family,
  mobileType,
}: TextProps) {
  return (
    <TextComponent
      as={tag}
      $size={FontSize[type]}
      $color={color}
      $weight={weight}
      $mobile_size={mobileType}
      className={
        family === 'Inter'
          ? inter.className
          : family === 'Asap'
            ? asap.className
            : family === 'Lato'
              ? lato.className
              : family === 'Poppins'
                ? poppins.className
                : satoshi.className
      }
    >
      {children}
    </TextComponent>
  );
}
