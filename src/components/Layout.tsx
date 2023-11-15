import { FC } from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PhotosList from './PhotosList';
import { fullWidthClassName } from 'react-remove-scroll-bar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

const Content: FC = () => {
  return (
    <Wrapper className={fullWidthClassName}>
      <Header />
      <MainContent>
        <PhotosList />
        <Outlet />
      </MainContent>
      <Footer />
    </Wrapper>
  )
}

export default Content
