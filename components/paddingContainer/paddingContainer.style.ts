import styled from 'styled-components';

export const Padding = styled.div<{ $isChildContainer: boolean }>`
  width: 100%;
  padding: 0 1rem;
  @media (width >= 768px) {
    padding: 0 3rem;
  }
  @media (width >= 1444px) {
    width: ${(props) => (props.$isChildContainer ? '100%' : '70rem')};
  }
`;
