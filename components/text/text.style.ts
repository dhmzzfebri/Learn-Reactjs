import styled from 'styled-components';

export const TextComponent = styled.p<{
  $size: string;
  $color: string;
  $weight: string;
  $mobile_size: string;
}>`
  font-size: ${(props) => props.$size};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$weight};
  @media (width <= 588px) {
    font-size: ${(props) => props.$mobile_size};
  }
`;
