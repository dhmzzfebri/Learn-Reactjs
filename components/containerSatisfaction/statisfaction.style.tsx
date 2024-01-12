import styled from 'styled-components';
import FontFamily from '@/components/text/text';

export const ContainerStatisfaction = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 109px;
`;

export const ChildContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImgeContainer = styled.div`
  display: flex;
  margin-right: 10xp;
  width: 570px;
  height: 451px;
  flex-shrink: 0;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    margin-top: 30px;
    width: 570px;
    height: 451px;
  }
`;

export const ContainerText = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
  }
`;

export const CustomH3 = styled.div`
  line-height: 28px;
  font-style: normal;
`;

export const CustomH1 = styled.div`
  font-style: normal;
  line-height: normal;
  padding-bottom: 15px;
`;
export const CustomButton = styled.div`
  margin-top: 30px;
`;

export const RoidContainer = styled.div`
  position: absolute;
  left: 230px;
  z-index: 3;
  top: 2px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    left: 270px;
  }
`;
export const MirzaContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 300px;
  left: 185px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    left: 240px;
    top: 300px;
  }
`;
export const RohmanContainer = styled.div`
  position: absolute;
  right: 350px;
  top: 110px;
  z-index: 4;
  display: flex;

  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    left: 40px;
    top: 140px;
  }
`;
export const ClientContainer = styled.div`
  position: absolute;
  right: 230px;
  top: 170px;
  z-index: 4;
  text-align: center;
  width: 175px;
  height: 175px;
  background-color: #0041e8;
  border-radius: 50%;
  border: 4px solid #fff;
  align-items: center;

  @media only screen and (max-width: 768px) {
    text-align: center;
    left: 220px;
    top: 160px;
  }
`;
export const TextClient = styled.div`
  margin-top: 40px;
`;
