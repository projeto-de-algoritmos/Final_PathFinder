import styled from 'styled-components';

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #041b30;
  height: 100%;
  width: 15rem;
  border-left: 1px solid white;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  z-index: 100;
  display: flex;
  flex-direction: column;

  .Sidebar-open {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }

  .Sidebar-closed {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
  }

  @keyframes slide-in {
    100% {
      display: flex;
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      display: flex;
      -webkit-transform: translateX(0%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    99% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
      display: none;
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    99% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
      display: none;
    }
  }

  .Sidebar-header {
    height: 4rem;
    color: white;
    font-weight: bold;
    background-color: #04213d;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
  }

  .Sidebar-items {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .Sidebar-backbutton {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-top: 4px solid #fff;
    border-right: 4px solid #fff;
    border-left: none;
    border-bottom: none;
    transform: rotate(45deg);
    transition: all 0.3s ease-in-out;
    background: transparent;
    outline: none;
  }

  .Sidebar-backbutton:hover {
    transform: scale(1.1) rotate(45deg) skew(-5deg, -5deg);
    border-color: #34b66e;
    cursor: pointer;
  }

  @media (min-width: 1400px) {
    .Sidebar {
      display: none;
    }
  }
`;
