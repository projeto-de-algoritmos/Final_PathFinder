import * as S from './styles';

export default function PathfinderStats(props) {
  const { shortestPath, visitedNodes, searchTime } = props;
  return (
    <S.Pathfinderstats className="Pathfinderstats">
      Nodes searched: {Object.values(visitedNodes).length} Path length:{' '}
      {shortestPath.length} Found path in: {searchTime.toFixed(2)}ms
    </S.Pathfinderstats>
  );
}
