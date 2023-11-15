import { FC } from "react";
import { useRouteError, NavLink, isRouteErrorResponse } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
`;

const Header = styled.div`
  font-size: 2.25rem;
  letter-spacing: 1.6px;
`;

const FirstText = styled.p`
  font-size: 1.5rem;
  margin-top: 24px;
`;

const SecondText = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const LinkToHomepage = styled(NavLink)`
  font-size: 1.125rem;
  margin-top: 20px;
  color: black;
  transition: color 0.3s;
  padding: 12px;
  border: 1px solid rgba(156, 163, 175, 1);
  border-radius: 0.75rem;
  text-align: center;
  &:hover {
    color: rgba(248, 113, 113, 1);
    border: 1px solid rgba(248, 113, 113, 1);
  }
`;

const ErrorPage: FC = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <Header>Oops!</Header>
      <FirstText>Sorry, something went wrong</FirstText>
      <SecondText>{isRouteErrorResponse(error) ? (error.statusText ?? error.data) : 'Wrong page'}</SecondText>
      <LinkToHomepage to="/">Return to the main page</LinkToHomepage>
    </Wrapper>
  );
};

export default ErrorPage;