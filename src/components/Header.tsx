import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { FiSun, FiMoon } from 'react-icons/fi';

const HeaderEl = styled.header`
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
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  user-select: none;
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
  font-size: var(--fs-md);
  text-transform: capitalize;
`;

const Header: FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo>Photo list</Logo>
          <ThemeSwitcherWrapper onClick={() => setTheme((state) => state === 'dark' ? 'light' : 'dark')}>
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
