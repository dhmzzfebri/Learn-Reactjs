import styled from 'styled-components';

export const Padding = styled.div<{ $isChildContainer: boolean }>`
  width: 100%;
  padding: 0 16px;
  @media (width >= 768px) {
    padding: 0 48px;
  }
  @media (width >= 1444px) {
    width: ${(props) => (props.$isChildContainer ? '100%' : '1120px')};
  }
`;
