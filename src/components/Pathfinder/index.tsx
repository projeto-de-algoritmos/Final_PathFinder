import { useEffect, useState } from 'react';
import getNewGraph from '@helpers/getNewGraph';
import getNextMazeNode from '@helpers/getNextMazeNode';
import getSearchAlgo from '@helpers/getSearchAlgo';

import Navbar from '@components/Navbar';

import Grid from './Grid';
import PathfinderStats from './PathfinderStats';
import * as S from './styles';

const NUM_ROWS = 25;
const NUM_COLS = 101;

const START_NODE_STATE = {
  startNode: '750',
  endNode: '2000',
  wallNodes: [],
  movingStartNode: false,
  movingEndNode: false,
  mousePressed: false,
};

export default function Pathfinder(props) {
  const [searchState, setSearchState] = useState({
    visitedNodes: {},
    shortestPath: [],
    searchTime: null,
  });
  const [gridState, setGridState] = useState({
    graph: null,
    searchSpeed: 1,
    searchAlgo: 'GBS',
    searching: false,
  });
  const [nodeState, setNodeState] = useState(START_NODE_STATE);
  const [sidebarState, setSidebarState] = useState({ open: false });
  const toggleSidebar = () => {
    setSidebarState({ open: !sidebarState.open });
  };
  useEffect(() => {
    const graph = getNewGraph(NUM_ROWS, NUM_COLS);
    setGridState({ ...gridState, graph });
  }, []);
  const visualize = () => {
    console.log('visualizing');
    // Don't initialize search if already pushing nodes or walls to state.
    if (gridState.searching) return;
    resetSearch();
    const t0 = performance.now();
    setGridState({ ...gridState, searching: true });
    const { visitedNodes, shortestPath } = getSearchAlgo(
      gridState,
      nodeState,
      NUM_COLS
    );
    const timeToExecute = performance.now() - t0;
    const visitedObj = {};
    const shortestPathArr = [];
    // Iterate through all found nodes and the shortest path nodes (if found) and animate them individually
    let count = 0;
    const animInterval = setInterval(() => {
      if (count === visitedNodes.length + shortestPath.length) {
        setGridState({ ...gridState, searching: false });
        if (shortestPath.length > 0) {
          setSearchState({
            shortestPath: shortestPathArr,
            visitedNodes: visitedObj,
            searchTime: timeToExecute,
          });
        }
        clearInterval(animInterval);
      } else {
        if (count < visitedNodes.length) {
          visitedObj[visitedNodes[count]] = true;
        } else {
          shortestPathArr.push(shortestPath[count - visitedNodes.length]);
        }
        setSearchState({
          ...searchState,
          searchTime: null,
          visitedNodes: visitedObj,
          shortestPath: shortestPathArr,
        });
        count++;
      }
    }, gridState.searchSpeed);
  };
  const clickDown = (val) => {
    // Don't allow changing the grid before resetting search data
    if (Object.values(searchState.visitedNodes).length > 0) return;
    let movingStartNode = false;
    let movingEndNode = false;
    let wallNodes = [...nodeState.wallNodes];
    if (val === nodeState.startNode) {
      movingStartNode = true;
    } else if (val === nodeState.endNode) {
      movingEndNode = true;
    } else if (wallNodes.indexOf(val) >= 0) {
      wallNodes.splice(wallNodes.indexOf(val), 1);
    } else {
      wallNodes = wallNodes.concat(val);
    }
    setNodeState({
      ...nodeState,
      wallNodes,
      movingStartNode,
      movingEndNode,
      mousePressed: true,
    });
  };
  const clickUp = () => {
    setNodeState({
      ...nodeState,
      movingStartNode: false,
      movingEndNode: false,
      mousePressed: false,
    });
  };
  const toggleNodeFunction = (node) => {
    if (
      gridState.searching ||
      !nodeState.mousePressed ||
      node === nodeState.startNode ||
      node === nodeState.endNode ||
      (nodeState.wallNodes.includes(node) &&
        (nodeState.movingStartNode || nodeState.movingEndNode))
    )
      return;
    // Functions to move start/end node
    if (nodeState.movingStartNode)
      return setNodeState({ ...nodeState, startNode: node });
    if (nodeState.movingEndNode)
      return setNodeState({ ...nodeState, endNode: node });
    // Remove node from wall state if already in wallNodes array. If not, push it to wall nodes.
    const nodeIndex = nodeState.wallNodes.indexOf(node);
    const newArr = [...nodeState.wallNodes];
    if (nodeIndex >= 0) {
      newArr.splice(nodeIndex, 1);
    } else {
      newArr.push(node);
    }
    setNodeState({ ...nodeState, wallNodes: newArr });
  };
  const resetSearch = () => {
    if (!gridState.searching) {
      setSearchState({
        visitedNodes: {},
        shortestPath: [],
        searchTime: null,
      });
    }
  };
  const reset = () => {
    if (!gridState.searching) {
      resetSearch();
      setNodeState(START_NODE_STATE);
    }
  };
  const removeWalls = () => {
    if (!gridState.searching) {
      setNodeState({ ...nodeState, wallNodes: [] });
    }
  };
  const changeAlgo = (val) => {
    setGridState({ ...gridState, searchAlgo: val });
  };
  const changeSpeed = (val) => {
    setGridState({ ...gridState, searchSpeed: Number(val) });
  };
  const getMazeData = () => {
    const maze = [];
    for (let i = 0; i < NUM_ROWS * NUM_COLS; i++) {
      maze.push(String(i));
    }
    const recurMaze = (currNode) => {
      maze.splice(maze.indexOf(String(currNode)), 1);
      const moves = ['LEFT', 'DOWN', 'UP', 'RIGHT'];
      let nextNode;
      let randDirection;
      let elligible;
      let move;
      let betweenNode;
      while (moves.length > 0) {
        randDirection = Math.floor(Math.random() * moves.length);
        move = moves[randDirection];
        moves.splice(randDirection, 1);
        [nextNode, betweenNode, elligible] = getNextMazeNode(
          move,
          currNode,
          NUM_COLS,
          maze
        );
        if (elligible) {
          maze.splice(maze.indexOf(String(betweenNode)), 1);
          recurMaze(nextNode);
        }
      }
    };
    recurMaze(NUM_COLS + 1);
    if (maze.includes(nodeState.startNode)) {
      maze.splice(maze.indexOf(nodeState.startNode), 1);
    }
    if (maze.includes(nodeState.endNode)) {
      maze.splice(maze.indexOf(nodeState.endNode), 1);
    }
    return maze;
  };
  const generateMaze = () => {
    if (gridState.searching) return;
    resetSearch();
    const mazeCells = getMazeData();
    const currMaze = [];
    setGridState({ ...gridState, searching: true });
    for (let i = 0; i < mazeCells.length; i++) {
      setTimeout(() => {
        currMaze.push(mazeCells[i]);
        if (i % Math.floor(NUM_COLS / 2) === 0) {
          setNodeState({ ...nodeState, wallNodes: currMaze });
        }
      }, i);
    }
    setTimeout(() => {
      setGridState({ ...gridState, searching: false });
    }, mazeCells.length);
  };
  return (
    <S.Pathfinder className="Pathfinder">
      {/* <Sidebar
        isOpen={sidebarState.open}
        {...gridState}
        removeWalls={removeWalls}
        reset={reset}
        resetSearch={resetSearch}
        changeSpeed={changeSpeed}
        changeAlgo={changeAlgo}
        generateMaze={generateMaze}
        toggleHelp={props.toggleHelp}
        toggleSidebar={toggleSidebar}
      /> */}
      <Navbar
        {...gridState}
        visualize={visualize}
        removeWalls={removeWalls}
        reset={reset}
        resetSearch={resetSearch}
        changeSpeed={changeSpeed}
        changeAlgo={changeAlgo}
        generateMaze={generateMaze}
        toggleHelp={props.toggleHelp}
        toggleSidebar={toggleSidebar}
      />
      <S.PathfinderBody className="Pathfinder-body">
        {gridState.graph && (
          <Grid
            graph={gridState.graph}
            {...searchState}
            {...nodeState}
            clickDown={clickDown}
            clickUp={clickUp}
            toggleNodeFunction={toggleNodeFunction}
          />
        )}
        {searchState.searchTime && <PathfinderStats {...searchState} />}
      </S.PathfinderBody>
    </S.Pathfinder>
  );
}
