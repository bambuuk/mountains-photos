import { FC } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const FooterUI = styled.footer`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colors-ui-base);
  border-top: 2px solid #26323886;
`;

const Info = styled.div`
  text-align: center;
  font-size: var(--fs-md);
  color: var(--colors-text);
  font-weight: var(--fw-normal)
`;

const Footer: FC = () => {
  return (
    <FooterUI>
      <Container>
        <Info>© Created by Ivan Korobka</Info>
      </Container>
    </FooterUI>
  )
}

export default Footer;
