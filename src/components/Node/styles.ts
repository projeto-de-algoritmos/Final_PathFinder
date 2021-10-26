/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

export const Node = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${() => css`
    width: 0.99%;
    padding-top: 1%;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    text-align: center;
    flex-grow: 1;

    & .Node-help {
      height: 1.5rem;
      width: 1.5rem;
      border: none;
    }

    & .Node-start,
    & .Node-end {
      background-repeat: no-repeat;
      cursor: -webkit-grab;
      cursor: grab;
    }

    & .Node-visited {
      -webkit-animation-name: visitedAnimation;
      animation-name: visitedAnimation;
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-delay: 0;
      animation-delay: 0;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-play-state: running;
      animation-play-state: running;
      border-color: rgba(37, 20, 83, 0.192);
    }

    @-webkit-keyframes visitedAnimation {
      0% {
        transform: scale(0.3);
        border-radius: 50%;
        outline: 0;
        background-color: #220950;
        border-radius: 100%;
      }
      50% {
        outline: 0;
        background-color: #1364a5;
        opacity: 1;
        transfrom: scale(1);
      }
      70% {
        outline: 1px;
        transform: scale(1.2);
        background-color: #71e2a4be;
        opacity: 1;
      }
      75% {
        outline: 1px;
        transform: scale(1.3);
        opacity: 0.8;
        background-color: #71e2a4be;
      }

      100% {
        transform: scale(1);
        background-color: #13c78b;
        opacity: 1;
      }
    }

    @keyframes visitedAnimation {
      0% {
        transform: scale(0.3);
        border-radius: 50%;
        outline: 0;
        background-color: #220950;
        border-radius: 100%;
      }
      50% {
        outline: 0;
        background-color: #1364a5;
        opacity: 1;
        transfrom: scale(1);
      }
      70% {
        outline: 1px;
        transform: scale(1.2);
        background-color: #71e2a4be;
        opacity: 1;
      }
      75% {
        outline: 1px;
        transform: scale(1.3);
        opacity: 0.8;
        background-color: #71e2a4be;
      }

      100% {
        transform: scale(1);
        background-color: #13c78b;
        opacity: 1;
      }
    }

    & .Node-wall {
      border-color: rgb(146, 146, 146);
      -webkit-animation-name: wallAnimation;
      animation-name: wallAnimation;
      -webkit-animation-duration: 0.6s;
      animation-duration: 0.6s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-delay: 0;
      animation-delay: 0;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-play-state: running;
      animation-play-state: running;
    }

    @-webkit-keyframes wallAnimation {
      0% {
        transform: scale(1);
        background-color: rgb(70, 70, 70);
        opacity: 1;
      }

      50% {
        transform: scale(1.4);
        background-color: rgb(83, 83, 83);
      }

      100% {
        transform: scale(1);
        background-color: rgb(70, 70, 70);
        opacity: 1;
      }
    }

    @keyframes wallAnimation {
      0% {
        transform: scale(1);
        background-color: rgb(70, 70, 70);
        opacity: 1;
      }

      50% {
        transform: scale(1.4);
        background-color: rgb(99, 99, 99);
      }

      100% {
        transform: scale(1);
        background-color: rgb(70, 70, 70);
        opacity: 1;
      }
    }

    & .Node-shortest-path {
      -webkit-animation-name: shortestPath;
      animation-name: shortestPath;
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-delay: 0;
      animation-delay: 0;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-play-state: running;
      animation-play-state: running;
    }

    @-webkit-keyframes shortestPath {
      0% {
        transform: scale(0.6);
        background-color: rgb(216, 70, 33);
      }

      50% {
        transform: scale(1.2);
        background-color: rgb(221, 29, 4);
      }

      100% {
        transform: scale(1);
        background-color: rgb(236, 137, 22);
        border-color: white;
      }
    }

    @keyframes shortestPath {
      0% {
        transform: scale(0.6);
        background-color: rgb(253, 109, 43);
      }

      50% {
        transform: scale(1.2);
        background-color: rgba(255, 68, 11, 0.911);
      }

      100% {
        transform: scale(1);
        background-color: rgb(236, 137, 22);
        border-color: #ccc;
      }
    }
  `}
`;
