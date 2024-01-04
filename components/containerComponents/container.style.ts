import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  @media (width >= 1444px) {
    justify-content: center;
    width: 1120px;
  }
`;

export const NavContainer = styled.nav<{
  $background: string;
  $position: string;
}>`
  width: 100%;
  display: flex;
  top: 0;
  background-color: ${(props) => props.$background};
  position: ${(props) => props.$position};
  @media (width >= 1444px) {
    justify-content: center;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  @media (width >= 1444px) {
    justify-content: center;
    width: 1120px;
  }
`;
