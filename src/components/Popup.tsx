import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { TfiClose } from "react-icons/tfi";
import { nanoid } from 'nanoid';
import { IComments } from '../types/IComments';
import useControlPopup from '../hooks/useControlPopup';

const fadeIn = keyframes`
 0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const fadeOut = keyframes`
 0% {
  opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const PopupUI = styled.div.attrs<{ $isopen: string }>((props) => ({ $isopen: props.$isopen }))`
  opacity: 0;
  animation: ${({ $isopen }) => ($isopen === 'true' ? fadeIn : 'false' ? fadeOut : '')} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
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

const CommentsSubtitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
`;

const CommentsDate = styled.span`
  font-size: var(--fs-sm);
  color: var(--colors-subtitle-text);
  font-weight: var(--fw-light);
`;

const CommentsNickname = styled.span`
  font-size: var(--fs-md);
  color: var(--colors-text);
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
  color: #ff7300;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: red;
  }
`;

const Popup: FC = () => {
  const {
    photoItem,
    isActiveModal,
    onClosePopup,
    onSubmit,
    name,
    comment,
    setName,
    setComment,
  } = useControlPopup();

  const commentListContent = photoItem?.comments.length > 0 ? photoItem.comments.map((item: IComments) => {
    return (
      <CommentItem key={nanoid()}>
        <CommentsSubtitleWrapper>
          <CommentsDate>{item.date}</CommentsDate>
          <CommentsNickname>{item.name}</CommentsNickname>
        </CommentsSubtitleWrapper>
        <CommentText>{item.text}</CommentText>
      </CommentItem>
    )
  }) : 'There are no comments yet';

  return (
    <PopupUI $isopen={`${isActiveModal}`}>
      <RemoveScrollBar />
      <PopupOverlay onClick={onClosePopup}>
        <PopupWrapper>
          <PopupImg src={photoItem?.img} alt="mountain" />
          <CloseIcon onClick={onClosePopup} />
          <CommentsList>
            {commentListContent}
          </CommentsList>
          <Form onSubmit={onSubmit}>
            <Input required type="text" minLength={3} maxLength={50} placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
            <Input required type="text" minLength={3} maxLength={300} placeholder='Your comment' value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button className="Button">Send comment</Button>
          </Form>
        </PopupWrapper>
      </PopupOverlay>
    </PopupUI>
  )
}

export default Popup;