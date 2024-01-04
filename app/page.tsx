'use client';
import { Pages } from './page.style';
import Text from '@/components/text/text';

export default function Page() {
  return (
    <Pages>
      <Text type="headline1" tag="p" color="red" weight="900">
        Halo
      </Text>
    </Pages>
  );
}
