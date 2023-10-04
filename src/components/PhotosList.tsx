import { FC } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import bike from '../assets/cannondale.jpg';
import motorcycle from '../assets/motorcycle.jpg';

const Wrapper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: minmax(250px, auto);
  grid-auto-rows: minmax(auto, 150px);
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(auto, 380px));
    grid-auto-rows: minmax(auto, 220px);
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(3, minmax(auto, 380px));
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;
  &:hover {
    scale: calc(1.1);
  }
`;

const PhotosList: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={bike} alt="bike" />
        <Img src={bike} alt="bike" />
        <Img src={motorcycle} alt="bike" />
        <Img src={bike} alt="bike" />
        <Img src={motorcycle} alt="bike" />
        <Img src={bike} alt="bike" />
      </Wrapper>
    </Container>
  )
}

export default PhotosList
