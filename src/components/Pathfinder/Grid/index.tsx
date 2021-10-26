import Node from '@components/Node';

import * as S from './styles';

export default function Grid(props) {
  const {
    graph,
    startNode,
    endNode,
    visitedNodes,
    shortestPath,
    wallNodes,
    toggleNodeFunction,
    clickDown,
    clickUp,
  } = props;

  const nodes = Object.entries(graph.adjacencyList).map((el, i) => (
    <Node
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      location={String(i)}
      start={String(i) === startNode}
      end={String(i) === endNode}
      visited={visitedNodes[String(i)]}
      final={shortestPath.includes(String(i))}
      wall={wallNodes.includes(String(i))}
      toggleNodeFunction={toggleNodeFunction}
      clickDown={clickDown}
      clickUp={clickUp}
    />
  ));

  return <S.Grid className="Grid">{nodes}</S.Grid>;
}
