import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { TfiClose } from "react-icons/tfi";
import data from '../data/data.json';
import { nanoid } from 'nanoid';

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
  color: black;
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
  activeCard: string;
  onClosePopup: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Popup: FC<PopupProps> = ({ activeCard, onClosePopup }) => {

  const photoItem = data.filter(item => item.id === activeCard)[0];

  useEffect(() => {
    if (activeCard) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeCard]);

  const commentListContent = photoItem?.comments.length > 0 ? photoItem.comments.map(item => {
    return (
      <CommentItem key={nanoid()}>
        <CommentDate>{item.date}</CommentDate>
        <CommentText>{item.text}</CommentText>
      </CommentItem>
    )
  }) : 'There are no comments yet';

  return (
    <PopupUI isopen={`${Boolean(activeCard)}`} >
      <PopupOverlay onClick={onClosePopup}>
        <PopupWrapper>
          <PopupImg src={photoItem?.img} alt="mountain" />
          <CloseIcon onClick={onClosePopup} />
          <CommentsList>
            {commentListContent}
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
