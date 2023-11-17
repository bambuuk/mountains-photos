import { FC } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { FiSun, FiMoon } from 'react-icons/fi';
import { noScrollbarsClassName } from 'react-remove-scroll-bar';
import useSwitchTheme from '../hooks/useSwitchTheme';

const HeaderEl = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  user-select: none;
  @media (min-width: 576px) {
    font-size: var(--fs-lg);
  }
`;

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--colors-text);
  transition: color 0.2s ease-in-out;
  user-select: none;
  &:hover svg {
    color: var(--colors-hover-effect);
  }
`;

const ThemeSwitcher = styled.div`
  margin-top: 3px;
  font-size: var(--fs-xxl);
  svg {
    transition: color 0.2s ease-in-out;
  }
`;

const ThemeSwitcherText = styled.div`
  display: none;
  font-size: var(--fs-md);
  text-transform: capitalize;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Header: FC = () => {
  const { theme, switchTheme } = useSwitchTheme();

  return (
    <HeaderEl className={noScrollbarsClassName}>
      <Container>
        <Wrapper>
          <Logo>Mountains Photos</Logo>
          <ThemeSwitcherWrapper onClick={switchTheme}>
            <ThemeSwitcher>
              {theme === 'dark' ? <FiMoon /> : <FiSun />}
            </ThemeSwitcher>
            <ThemeSwitcherText>{`${theme} theme`}</ThemeSwitcherText>
          </ThemeSwitcherWrapper>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
