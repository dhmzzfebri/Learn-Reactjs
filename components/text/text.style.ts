import styled from 'styled-components';

export const TextComponent = styled.p<{
  $size: string;
  $color: string;
  $family: string;
  $weight: string;
  $mobile_size: string;
}>`
  font-family: ${(props) => props.$family}, serif;
  font-size: ${(props) => props.$size};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$weight};
  @media (width <= 588px) {
    font-size: ${(props) =>
      props.$mobile_size !== '' ? props.$mobile_size : props.$size};
  }
`;
