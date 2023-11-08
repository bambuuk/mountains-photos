import { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import Popup from './Popup';
import mountain2 from '../assets/mountain2.jpg';
import mountain1 from '../assets/mountain1.jpg';

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
  @media (min-width: 768px) {
    gap: 30px
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(3, minmax(auto, 380px));
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: scale 0.2s ease-in-out;
  
  &:hover {
    scale: calc(1.05);
  }
`;

const PhotosList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Img onClick={() => setIsOpen(true)} src={mountain2} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={mountain1} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={mountain1} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={mountain1} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={mountain2} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={mountain1} alt="bike" />
      </Wrapper>
      <Popup isOpen={isOpen} onClosePopup={onClosePopup} />
    </Container>
  )
}

export default PhotosList
