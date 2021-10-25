import styled from 'styled-components';

export const Navbar = styled.nav`
  grid-area: nav;
  grid-column: 1/-1;
  background-color: #04213d;
  width: 100%;
  height: 4.5rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const NavbarLeft = styled.div`
  height: 100%;
  width: auto;
  display: flex;

  @media (max-width: 1400px) {
    .Navbar-dropdowns {
      display: none;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.div`
  height: 100%;
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 4.5rem;
  padding: 0 2rem;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: inline-block;
  align-self: flex-end;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ButtonsContainerMobile = styled.div`
  height: 100%;
  display: inline-block;
  align-self: flex-end;
  padding: 0;
  margin: 0 2rem;
  display: none;
  @media (max-width: 1400px) {
    display: inline-block;
  }
`;
