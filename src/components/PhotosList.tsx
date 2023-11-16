import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetMountainsListQuery } from '../api/apiSlice';
import { IData } from '../types/IData';
import { Container } from './Container';
import { ClockLoader } from 'react-spinners';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const Wrapper = styled.div`
  margin: 104px 0 50px 0;
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

const NotMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(ClockLoader).attrs({
  color: 'var(--colors-loader)',
})``;

const ErrorMassage = styled.p`
  color: var(--colors-text);
  font-size: 18px;
  line-height: 24px;
  font-weight: var(--fw-normal);
  text-align: center;
  @media (min-width: 576px) {
    font-size: var(--fs-xl);
  }
  @media (min-width: 768px) {
    font-size: var(--fs-xxl);
  }
`;

const ErrorTitle = styled.h2`
  margin: 20px;
  text-align: center;
  color: var(--colors-text);
  font-size: var(--fs-lg);
  line-height: 24px;
  font-weight: var(--fw-normal);
  @media (min-width: 576px) {
    font-size: 30px;
  }
`;

const PhotosList: FC = () => {
  const { data: mountainsList = [], isLoading, isError, error } = useGetMountainsListQuery('');
  type ErrorType = { status: number; data: string };

  const preparePhotoListContent = (arrInfo: IData[] | any[], loadingStatus: boolean, errorStatus: boolean, errorObj: FetchBaseQueryError | SerializedError | undefined) => {
    if (loadingStatus) {
      return (
        <NotMainContentWrapper>
          <Loader size={100} />
        </NotMainContentWrapper>
      );
    } else if (errorStatus && errorObj) {
      return (
        <NotMainContentWrapper>
          <ErrorTitle>Oops, something go wrong...</ErrorTitle>
          <ErrorMassage>{'data' in errorObj ? (errorObj as ErrorType).data : 'Not Found'}</ErrorMassage>
        </NotMainContentWrapper>
      );
    }

    if (arrInfo.length > 0) {
      return (
        <Wrapper>
          {
            arrInfo.map(({ img, id }) => {

              return (
                <ImgLink to={`photo/${id}`} key={id}>
                  <Img src={img} alt="mountain" />
                </ImgLink>
              )
            })
          }
        </Wrapper>
      )
    } else {
      return (<div>No photos yet</div>)
    }
  }

  const content = preparePhotoListContent(mountainsList, isLoading, isError, error);

  return (
    <Container>
      {content}
    </Container>
  )
}

export default PhotosList
