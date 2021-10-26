/* eslint-disable jsx-a11y/no-static-element-interactions */
import { memo } from 'react';

import endBg from './icon-end.svg';
import startBg from './icon-start.svg';

// import * as S from './styles';
// import './Node.module.css';

function Node(props) {
  const {
    start,
    end,
    wall,
    final,
    visited,
    toggleNodeFunction,
    location,
    clickDown,
    clickUp,
    helpNode,
  } = props;
  const getClass = () => {
    let nodeClass = 'Node';
    if (helpNode) {
      nodeClass += ' Node-help';
    }
    if (start) {
      nodeClass += ' Node-start';
    } else if (end) {
      nodeClass += ' Node-end';
    } else if (wall) {
      nodeClass += ' Node-wall';
    }
    if (final) {
      nodeClass += ' Node-shortest-path';
    } else if (visited) {
      nodeClass += ' Node-visited';
    }
    return nodeClass;
  };

  const background = (start && `url(${startBg})`) || (end && `url(${endBg})`);

  return (
    // <S.Node
    //   start={start}
    //   end={end}
    //   className={getClass()}
    //   onMouseEnter={() => toggleNodeFunction(location)}
    //   onMouseDown={() => clickDown(location)}
    //   onMouseUp={() => clickUp(location)}
    // />
    <div
      style={{ backgroundImage: background }}
      className={getClass()}
      onMouseEnter={() => toggleNodeFunction(location)}
      onMouseDown={() => clickDown(location)}
      onMouseUp={() => clickUp(location)}
    />
  );
}

export default memo(Node);
