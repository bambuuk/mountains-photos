import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { TfiClose } from "react-icons/tfi";
import motorcycle from '../assets/motorcycle.jpg';

const PopupUI = styled.div<{ isopen: string }>`
  opacity: ${props => (props.isopen === 'true' ? 1 : 0)};
  visibility: ${props => (props.isopen === 'true' ? 'visible' : 'hidden')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(77, 77, 77, 0.884);
  transition: all 0.3s;
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
  overflow-y: auto;
  @media (min-width: 576px) {
    width: 500px;
    min-height: 550px;
  }
  @media (min-width: 768px) {
    width: 500px;
    min-height: 550px;
    max-height: 900px;
  }
  @media (min-width: 1024px) {
    width: 900px;
    max-height: 600px;
    display: grid;
    grid-template-columns: 480px  1fr;
    grid-template-rows: 2fr 1fr;
    gap: 20px;
    padding: 30px 40px 30px 20px;
  }
`;

const PopupImg = styled.img`
  display: block;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  @media (min-width: 1024px) {
    max-height: 360px;
  }
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 15px;
  @media (min-width: 1024px) {
    max-width: 450px;
    overflow: auto;
    padding: 0;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
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
  padding: 0 15px 30px 15px;
  @media (min-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 0;
    align-self: start;
  }
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

const CloseIcon = styled(TfiClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: var(--fs-lg);
  color: var(--colors-text);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: red;
  }
`;

interface PopupProps {
  isOpen: boolean;
  onClosePopup: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Popup: FC<PopupProps> = ({ isOpen, onClosePopup }) => {

  useEffect(() => {
    isOpen ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <PopupUI isopen={`${isOpen}`} >
      <PopupOverlay onClick={onClosePopup}>
        <PopupWrapper>
          <PopupImg src={motorcycle} alt="bike" />
          <CloseIcon onClick={onClosePopup} />
          <CommentsList>
            <CommentItem>
              <CommentDate>04/10/2023</CommentDate>
              <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore! Nam iste dignissimos aut deserunt aspernatur qui, ullam voluptate omnis. Id porro maxime eius eum consequuntur, facere a iste sed.</CommentText>
            </CommentItem>
            <CommentItem>
              <CommentDate>04/10/2023</CommentDate>
              <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore! Nam iste dignissimos aut deserunt aspernatur qui, ullam voluptate omnis. Id porro maxime eius eum consequuntur, facere a iste sed.</CommentText>
            </CommentItem>
          </CommentsList>
          <Form>
            <Input type="text" className="Input" placeholder='Your name' />
            <Input type="text" className="Input" placeholder='Your comment' />
            <Button className="Button">Send comment</Button>
          </Form>
        </PopupWrapper>
      </PopupOverlay>
    </PopupUI>
  )
}

export default Popup;
