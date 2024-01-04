import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  padding: 1.2rem 0;
  position: fixed;
  top: 0;
  background-color: white;
  align-items: center;
  width: 100%;
  z-index: 10;
  @media (width >= 1444px) {
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #383838;
    h1 {
      font-size: 24px;
    }
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media (width <= 954px) {
    flex-direction: column;
    align-items: baseline;
    margin: 0 0 1rem 0;
    width: 100%;
  }
`;

export const ListItem = styled.li<{ $isSelect: boolean }>`
  margin: 0 1rem;
  @media (width <= 954px) {
    margin: 0 0 0rem 0;
    width: 100%;
  }
  a {
    font-size: 16px;
    color: ${(param) => (param.$isSelect == true ? '#383838' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    &:hover {
      color: ${(param) => (param.$isSelect == true ? '#383838' : '#383838')};
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    }
    @media (width <= 954px) {
      display: block;
      width: 100%;
      padding: 0.5rem 0 0.5rem 1rem;
      color: white;
      background-color: ${(props) => (props.$isSelect ? '#525252' : '')};
      &:hover {
        background-color: ${(param) =>
          param.$isSelect == true ? '' : '#3d3d3d'};
        text-decoration: none;
        color: white;
        font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
      }
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 1.2rem 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`;

export const ContactContainer = styled.div`
  a {
    font-size: 16px;
    border-radius: 2rem;
    color: #383838;
    display: flex;
    text-decoration: none;
    border: 1px solid #383838;
    padding: 9px 22px;
    &:hover {
      background-color: #383838;
      color: white;
      transition: 0.3s;
    }
    @media (width <= 954px) {
      height: 2.5rem;
      width: 7rem;
      margin: 0 0 0 1rem;
      background-color: white;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      &:hover {
        background-color: #525252;
      }
    }
  }
`;

export const Hamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  height: auto;
  cursor: pointer;
  width: auto;
  flex-direction: column;
  @media (width >= 954px) {
    display: none;
  }
`;

export const FirstSpan = styled.span<{ $isShow: boolean }>`
  height: 0.2rem;
  width: 2rem;
  margin: 0 0 0.5rem 0;
  background-color: #000000;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isShow ? 'translateY(12px) rotate(45deg)' : ''};
`;
export const SecondSpan = styled.span<{ $isShow: boolean }>`
  height: 0.2rem;
  width: 2rem;
  margin: 0 0 0.5rem 0;
  background-color: #000000;
  opacity: ${(props) => (props.$isShow ? '0' : '1')};
  transition: all 0.3s ease-in-out;
`;
export const ThirdSpan = styled.span<{ $isShow: boolean }>`
  height: 0.2rem;
  width: 2rem;
  transform: ${(props) =>
    props.$isShow ? ' translateY(-11px) rotate(-45deg)' : ''};
  background-color: #000000;
  transition: all 0.3s ease-in-out;
`;

export const DekstopContainer = styled.div`
  display: flex;
  @media (width <= 954px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  position: relative;
  @media (width >= 954px) {
    display: none;
  }
`;

export const MobileContainer = styled.div<{ $isShow: boolean }>`
  display: flex;
  padding: 1rem 0;
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  background-color: #2d2d2d;
  height: auto;
  width: 20rem;
  top: 3rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease-in-out;
  right: ${(props) => (props.$isShow ? '0' : '-50rem')};
  z-index: 10;
`;
