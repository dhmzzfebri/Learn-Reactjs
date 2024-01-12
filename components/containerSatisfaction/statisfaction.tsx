import React from 'react';
import {
  ContainerStatisfaction,
  ChildContainer,
  ImgeContainer,
  ContainerText,
  CustomH3,
  CustomH1,
  CustomButton,
  RohmanContainer,
  RoidContainer,
  MirzaContainer,
  ClientContainer,
  TextClient,
} from './statisfaction.style';
import PaddingContainer from '../paddingContainer/paddingContainer';
import Poto1 from '@/assets/images/Frame 1597883406.png';
import Poto2 from '@/assets/images/Frame 1597883407.png';
import Poto3 from '@/assets/images/Frame 1597883408.png';
import Poto4 from '@/assets/images/Frame 1597883409.png';
import Image from 'next/image';
import Button from '../button/Button';
import CountUp from 'react-countup';
import Text from '../text/text';

export function Statisfaction() {
  return (
    <ContainerStatisfaction>
      <PaddingContainer>
        <ChildContainer>
          <ImgeContainer>
            <MirzaContainer>
              <Image alt="" src={Poto3} />
            </MirzaContainer>
            <RohmanContainer>
              <Image alt="" src={Poto1} />
            </RohmanContainer>
            <RoidContainer>
              <Image alt="" src={Poto2} />
            </RoidContainer>
            <ClientContainer>
              <TextClient>
                <Text
                  tag={'p'}
                  family={'Satoshi'}
                  color={' #FFF;'}
                  weight={'700'}
                  type={'title2'}
                >
                  <CountUp end={200} />+
                </Text>
                <Text
                  tag={'p'}
                  family={'Satoshi'}
                  color={'#FFF;'}
                  weight={''}
                  type={'regular1'}
                >
                  Client Happy
                </Text>
              </TextClient>
            </ClientContainer>
          </ImgeContainer>
          <ContainerText>
            <CustomH3>
              <Text
                tag={'h2'}
                family={'Asap'}
                color="#A7ABB6;"
                weight={'400'}
                type={'regular2'}
              >
                Smiles of Satisfaction
              </Text>
            </CustomH3>
            <CustomH1>
              <Text
                tag={'h1'}
                family="Satoshi"
                weight="700"
                color="#202020;"
                type={'title1'}
              >
                Celebrating Clients{"'"} Happiness
              </Text>
            </CustomH1>
            <CustomH3>
              <Text
                tag={'h2'}
                family={'Asap'}
                color="#A7ABB6;"
                weight={'400'}
                type={'regular2'}
              >
                Unveiling the Heartwarming Stories Behind Our Celebrated Clients
                {"'"} Happiness.
              </Text>
            </CustomH3>
            <CustomButton>
              <Button type={'primary'} content={'Let’s Talk'} />
            </CustomButton>
          </ContainerText>
        </ChildContainer>
      </PaddingContainer>
    </ContainerStatisfaction>
  );
}
