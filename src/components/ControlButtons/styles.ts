import styled from 'styled-components';

export const ControlButtons = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 1rem;

  @media (max-width: 1400px) {
    height: 20rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
