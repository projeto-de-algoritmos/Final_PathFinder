import styled from 'styled-components';

export const DropdownMenu = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    height: 12rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
