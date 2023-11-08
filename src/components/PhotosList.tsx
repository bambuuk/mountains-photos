import { FC, useState } from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { Container } from './Container';
import Popup from './Popup';

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
  const [activeCard, setActiveCard] = useState('');

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setActiveCard('');
    }
  }

  const content = data.map(({ img, id }) => {
    return (
      <Img key={id} onClick={() => setActiveCard(id)} src={img} alt="mountain" />
    )
  })

  return (
    <Container>
      <Wrapper>
        {content}
      </Wrapper>
      <Popup activeCard={activeCard} onClosePopup={onClosePopup} />
    </Container>
  )
}

export default PhotosList
