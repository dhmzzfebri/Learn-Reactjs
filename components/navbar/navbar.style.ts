import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  padding: 1.2rem 0;
  align-items: center;
  width: 100%;
  font-family: sans-serif;
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
`;

export const ListItem = styled.li<{ $isSelect: boolean }>`
  margin: 0 1rem;
  a {
    font-size: 1.2rem;
    color: ${(param) => (param.$isSelect == true ? '#383838' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect == true ? '700' : '400')};
    &:hover {
      color: ${(param) => (param.$isSelect == true ? '#383838' : '#383838')};
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect == true ? '700' : '500')};
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
