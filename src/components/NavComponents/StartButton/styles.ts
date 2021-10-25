import styled from 'styled-components';

export const StartButton = styled.button`
  height: 80%;
  min-height: 3rem;
  outline: none;
  align-self: center;
  border-radius: 5%;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  .Dark {
    background-color: transparent;
    border: 2px solid #1abc9c;
    letter-spacing: 5px;
    padding: 0 3rem;
  }

  .Light {
    background-color: #18967d;
    font-weight: bold;
    border: none;
    padding: 0 2rem;
    cursor: pointer;
    letter-spacing: 1px;
  }
  .Light:hover {
    background-color: #34b66e;
    transform: scale(1.02);
  }
`;
