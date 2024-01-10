import styled from 'styled-components';
import FontFamily from '@/components/text/text';

export const ContainerStatisfaction = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  gap: 109px;
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustomH3 = styled.div`
  font-family: 'Asap', sans-serif;
  color: #a7abb6;
  font-size: 16px;
  padding-top: 10px;
`;

export const CustomH1 = styled.div`
  color: #202020;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 10px;
`;

export const ChildContainer = styled.div`
  align-items: right;
  display: flex;
  justify-content: space-between;
`;

export const ImgeContainer = styled.div`
  display: flex;
  margin-right: 10xp;
  width: 319px;
  height: 425px;
  flex-shrink: 0;
  position: relative;
`;

export const RoidContainer = styled.div`
  position: absolute;
  left: 180px;
  z-index: 3;
  top: 5px;
`;
export const MirzaContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 290px;
  left: 120px;
`;
export const RohmanContainer = styled.div`
  position: absolute;
  right: 175px;
  top: 110px;
  z-index: 4;
  display: flex;
`;
export const ClientContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 150px;
  z-index: 4;
  display: flex;
`;

export const StyledButton = styled.button`
  background-color: #0041e8;
  color: white;
  height: 40px;
  width: 100px;
  font-family: Inter;
  font-size: 16px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #3376b6;
  }
`;

export const CircleDiv = styled.div`
  width: 175px;
  height: 175px;
  background-color: #0041e8;
  border-radius: 50%;
  border: 4px solid #fff;
`;
