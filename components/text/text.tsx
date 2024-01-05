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

type FontType = 'poppins' | 'inter' | 'satoshi' | 'lato' | 'asap';

interface TextProps {
  children: React.ReactNode;
  type: keyof typeof FontSize;
  tag: ElementType;
  color: string;
  family: FontType;
  weight: string;
  mobileType?: keyof typeof FontSize;
}

export default function Text({
  children,
  type,
  tag,
  color,
  weight,
  family,
  mobileType = 'regular1',
}: TextProps) {
  return (
    <TextComponent
      as={tag}
      $size={FontSize[type]}
      $color={color}
      $weight={weight}
      $mobile_size={FontSize[mobileType]}
      className={
        family === 'inter'
          ? inter.className
          : family === 'asap'
            ? asap.className
            : family === 'lato'
              ? lato.className
              : family === 'poppins'
                ? poppins.className
                : satoshi.className
      }
    >
      {children}
    </TextComponent>
  );
}
