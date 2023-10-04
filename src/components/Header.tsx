import {FC} from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const HeaderEl = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Header: FC = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          header
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
