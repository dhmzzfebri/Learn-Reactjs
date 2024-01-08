import styled from 'styled-components';

export const TextComponent = styled.p<{
  size: string;
  color: string;
  family: string;
  weight: string;
  margin: string;
  padding: string;
}>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-family: ${(props) => props.family};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
