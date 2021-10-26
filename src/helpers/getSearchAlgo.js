const getSearchAlgo = (gridState, nodeState, NUM_COLS) => {
  switch (gridState.searchAlgo) {
    case 'dijkstra':
      return gridState.graph.dijkstra(
        nodeState.startNode,
        nodeState.endNode,
        nodeState.wallNodes
      );
    case 'GBS':
      return gridState.graph.GBS(
        nodeState.startNode,
        nodeState.endNode,
        NUM_COLS,
        nodeState.wallNodes
      );
    default:
      return gridState.graph.dijkstra(
        nodeState.startNode,
        nodeState.endNode,
        nodeState.wallNodes
      );
  }
};

export default getSearchAlgo;
