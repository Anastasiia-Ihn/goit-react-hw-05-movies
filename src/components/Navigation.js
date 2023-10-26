import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const Navigation = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        {/* <StyledLink to="/movies/:movieById">Movie</StyledLink> */}
      </nav>
      {/* <Outlet /> */}
    </>
  );
};
