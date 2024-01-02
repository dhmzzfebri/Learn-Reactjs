import { Padding } from './paddingContainer.style';

export default function PaddingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Padding>{children}</Padding>;
}
