import styled from 'styled-components';
import { shade } from 'polished';

import imag from '../../assets/landpage.jpg';
// import imgWork from '../../assets/landpage1.jpg';

export const Container = styled.div`
  justify-content: center;
  /* height: 100vh; */
  overflow-x: hidden;
`;

export const Header = styled.div`
  /* position: fixed; */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  width: 100%;
  height: 50px;
  z-index: 2;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    font-size: 18px;

    display: inline;

    & + li {
      margin-left: 50px;
    }
  }

  a {
    font-weight: 300;
    text-decoration: none;
    letter-spacing: 1px;
    color: #ffff;

    &:hover {
      color: ${shade(0.2, '#f2f2f2')};
    }
  }
`;

export const VideoWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  /* height: 100%; */
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

export const VideoHeader = styled.div`
  video {
    margin: 0;
    padding: 0;
    width: 100%;
    /* height: 100vh; */
    overflow: hidden;
    filter: grayscale(95%);
  }
`;

export const VideoText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  z-index: 1;

  hr {
    margin: 5px 10px;
    height: 50px;
    /* width: 300px; */
  }
  h1 {
    font-size: 80px;
    font-weight: 500;
  }

  h2 {
    font-weight: 300;
    color: #d9bf73;
    font-size: 30px;
  }
`;

export const Content = styled.div``;

export const Presentation = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const TextPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  p {
    font-size: 30px;
    padding: 50px;
    text-align: justify;
  }
`;

export const ImgPresentation = styled.div`
  flex: 1;
  background: url(${imag}) no-repeat center;
  background-size: cover;
`;

export const TitleWork = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #f2f2f2;
  background: #454545;
  h1 {
    margin: 16px;
  }
`;

export const Works = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background: #454545;
`;

export const CardWork = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d9bf73;
  background: url(${imag}) no-repeat center;
  background-size: cover;
  width: 16.6%;
  height: 33%;
  margin: 16px;
  p {
  }
`;

export const Unity = styled.div``;
