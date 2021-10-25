import styled from 'styled-components';

export const NavDropdownLabel = styled.label`
  height: 100%;
  color: white;
  font-size: 1rem;
  line-height: 4.5rem;
  font-weight: bold;
  display: inline-block;

  @media (max-width: 1824px) {
    display: none;
  }

  @media (max-width: 1400px) {
    height: auto;
    display: inline-block;
    line-height: 3rem;
  }
`;

export const NavDropdown = styled.span`
  margin: 0 1rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
  }

  &:after {
    /*  Custom dropdown arrow */
    content: '\25BC';
    height: 1em;
    font-size: 0.625em;
    line-height: 1;
    right: 1.2em;
    top: 50%;
    margin-top: -0.5em;
    color: rgba(0, 0, 0, 0.4);
  }

  &:before {
    /*  Custom dropdown arrow cover */
    width: 2em;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
    background-color: rgba(0, 0, 0, 0.15);
  }

  & select {
    background-color: #18967d;
    color: #fff;
    font-size: inherit;
    padding: 0.7rem;
    width: 10rem;
    border: 0;
    margin: 0;
    border-radius: 3px;
    cursor: pointer;
    text-indent: 0.01px;
    text-overflow: '';
    -webkit-appearance: none; /* hide default arrow in chrome OSX */
    transition: all ease-in 0.2s;

    &:hover {
      background-color: #34b66e;
    }

    @media (max-width: 1400px) {
      padding: 0;
      position: relative;
      height: auto;
    }
  }

  & select[disabled] {
    color: rgba(0, 0, 0, 0.3);

    &:after {
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;
