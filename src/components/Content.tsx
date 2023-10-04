import {FC} from 'react'
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1 1 auto;
`;

const Content: FC = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        Main content
      </MainContent> 
      <Footer />
    </Wrapper>
  )
}

export default Content
