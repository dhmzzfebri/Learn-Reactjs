import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  padding: 1.2rem 0;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #383838;
    h1 {
      font-size: 1.7rem;
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
  }
`;

export const ListItem = styled.li<{ $isSelect: boolean }>`
  margin: 0 1rem;
  @media (width <= 954px) {
    margin: 0 0 0.3rem 0;
  }
  a {
    font-size: 1.2rem;
    color: ${(param) => (param.$isSelect == true ? '#383838' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    &:hover {
      color: ${(param) => (param.$isSelect == true ? '#383838' : '#383838')};
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  //overflow-x: hidden;
  //overflow-y:;
`;

export const ContactContainer = styled.div`
  height: 2.6rem;
  width: 7rem;

  a {
    font-size: 1.1rem;
    border-radius: 3rem;
    height: 100%;
    width: 100%;
    color: #383838;
    text-decoration: none;
    display: flex;
    border: 1px solid #383838;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #383838;
      color: white;
      transition: 0.3s;
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
    props.$isShow ? ' translateY(-9px) rotate(-45deg)' : ''};
  background-color: #000000;
  transition: all 0.3s ease-in-out;
`;

export const DekstopContainer = styled.div`
  display: flex;
  @media (width <= 954px) {
    display: none;
  }
`;

export const MobileContainer = styled.div<{ $isShow: boolean }>`
  display: flex;
  padding: 1.2rem 1.2rem;
  position: absolute;
  flex-direction: column;
  background-color: green;
  height: auto;
  width: 12rem;
  top: 3rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  right: ${(props) => (props.$isShow ? '0' : '-100%')};
  z-index: 10;
`;
