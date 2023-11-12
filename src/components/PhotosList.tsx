import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import { Container } from './Container';

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

const ImgLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    box-shadow: var(--photo-shadow);
  }
`;

const PhotosList: FC = () => {
  const content = data.map(({ img, id }) => {
    return (
      <ImgLink to={`photo/${id}`} key={id}>
        <Img src={img} alt="mountain" />
      </ImgLink>
    )
  })

  return (
    <Container>
      <Wrapper>
        {content}
      </Wrapper>
    </Container>
  )
}

export default PhotosList
