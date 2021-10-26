// function to caclulcate distance between two nodes
const calcHeuristic = (node1, node2, numCols) => {
  const xDist = Math.abs((Number(node1) % numCols) - (Number(node2) % numCols));
  const yDist = Math.abs(
    Math.floor(Number(node1) / numCols) - Math.floor(Number(node2) / numCols)
  );
  return xDist + yDist;
};

export default calcHeuristic;
