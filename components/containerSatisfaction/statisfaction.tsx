import {
  ContainerStatisfaction,
  ContainerContent,
  ChildContainer,
  ImgeContainer,
  CustomH3,
  CustomH1,
  RohmanContainer,
  RoidContainer,
  MirzaContainer,
  ClientContainer,
  CircleDiv,
} from './statisfaction.style';
import { Button } from './button';
import PaddingContainer from '../paddingContainer/paddingContainer';
import Poto1 from '@/assets/images/Frame 1597883406.png';
import Poto2 from '@/assets/images/Frame 1597883407.png';
import Poto3 from '@/assets/images/Frame 1597883408.png';
import Poto4 from '@/assets/images/Frame 1597883409.png';
import Image from 'next/image';

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
              {/* <Image alt='' src={Poto4} /> */}
              <CircleDiv />
            </ClientContainer>
          </ImgeContainer>
          <ContainerContent>
            <CustomH3>
              <h3> Smiles of Satisfaction </h3>
            </CustomH3>
            <CustomH1>
              <h1>Celebrating Clients{"'"}</h1>
              <h1>Happiness</h1>
            </CustomH1>
            <CustomH3>
              <h3>Unveiling the Heartwarming Stories Behind Our Celebrated</h3>
              <h3>Clients{"'"} Happiness.</h3>
            </CustomH3>
            <Button />
          </ContainerContent>
        </ChildContainer>
      </PaddingContainer>
    </ContainerStatisfaction>
  );
}
