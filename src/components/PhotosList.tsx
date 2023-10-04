import { FC, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { TfiClose } from "react-icons/tfi";
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

const Popup = styled.div<{ isOpen: boolean }>`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(77, 77, 77, 0.884);
`;

const PopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--colors-ui-base);
  overflow-y: scroll;
  `;

const PopupImg = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 20px 30px;
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CommentDate = styled.span`
  font-size: var(--fs-sm);
  color: #455a64;
  font-weight: var(--fw-light);
`;

const CommentText = styled.p`
  font-size: var(--fs-md);
  color: var(--colors-text);
  font-weight: var( --fw-normal);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  border-radius: var(--radii);
  border: 1px solid var(--colors-border);
  font-size: var(--fs-md);
  padding: 10px 15px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  font-size: var(--fs-md);
  color: var(--colors-text);
  font-weight: var( --fw-normal);
  background-color: #0091ea;
  padding: 10px 0;
  border-radius: var(--radii);
`;

const CloseIconWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: var(--fs-lg);
  color: var(--colors-text);
`;

const PhotosList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Img onClick={() => setIsOpen(true)} src={bike} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={bike} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={motorcycle} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={bike} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={motorcycle} alt="bike" />
        <Img onClick={() => setIsOpen(true)} src={bike} alt="bike" />
      </Wrapper>
      <Popup isOpen={isOpen}>
        <PopupOverlay>
          <PopupWrapper>
            <PopupImg src={motorcycle} alt="bike" />
            <CloseIconWrap onClick={() => setIsOpen(false)}>
              <TfiClose />
            </CloseIconWrap>
            <PopupBody>
              <CommentsList>
                <CommentItem>
                  <CommentDate>04/10/2023</CommentDate>
                  <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore! Nam iste dignissimos aut deserunt aspernatur qui, ullam voluptate omnis. Id porro maxime eius eum consequuntur, facere a iste sed.</CommentText>
                </CommentItem>
                <CommentItem>
                  <CommentDate>04/10/2023</CommentDate>
                  <CommentText>asdasd</CommentText>
                </CommentItem>
              </CommentsList>
              <Form>
                <Input type="text" className="Input" placeholder='Your name' />
                <Input type="text" className="Input" placeholder='Your comment' />
                <Button className="Button">Send comment</Button>
              </Form>
            </PopupBody>
          </PopupWrapper>
        </PopupOverlay>
      </Popup>
    </Container>
  )
}

export default PhotosList
