import React from 'react';
import { GiVikingChurch } from 'react-icons/gi';

import {
  Container,
  Header,
  Content,
  VideoWrapper,
  VideoHeader,
  VideoText,
  TextPresentation,
  ImgPresentation,
  Presentation,
  Works,
  TitleWork,
  CardWork,
  Unity,
} from './styles';

const Landpage: React.FC = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <a href="/">Admin</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Artist</a>
          </li>
        </ul>
      </Header>
      <VideoText>
        <GiVikingChurch size={100} color="#bf9c5a" />
        <hr />
        <h1>Notre Dame</h1>
        <hr />
        <h2>Galeria</h2>
      </VideoText>

      <VideoWrapper>
        <VideoHeader>
          <video autoPlay loop muted>
            <track kind="captions" />
            <source src="/videos/videoHeader.webm" type="video/webm" />
          </video>
        </VideoHeader>
      </VideoWrapper>

      <Content>
        <Presentation>
          <TextPresentation>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              ornare lectus sit amet est placerat in. Non blandit massa enim nec
              dui nunc mattis enim ut. Leo integer malesuada nunc vel risus
              commodo viverra maecenas accumsan. Ut sem nulla pharetra diam sit.
              Convallis tellus id interdum velit laoreet id donec ultrices.
              Scelerisque viverra mauris in aliquam sem fringilla ut morbi
              tincidunt.
            </p>
          </TextPresentation>
          <ImgPresentation />
        </Presentation>
        <TitleWork>
          <h1>Trabalhos já realizados</h1>
        </TitleWork>
        <Works>
          <CardWork>
            <p>Title work</p>
          </CardWork>
          <CardWork>
            <p>Title work</p>
          </CardWork>
          <CardWork>
            <p>Title work</p>
          </CardWork>
        </Works>
        <Unity />
      </Content>
    </Container>
  );
};

export default Landpage;
