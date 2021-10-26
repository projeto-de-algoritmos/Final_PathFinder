/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import calcHeuristic from '../helpers/calcHeuristic';
import PriorityQueue from '../structures/PriorityQueue';

export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (this.adjacencyList[v]) return console.log('vertex already exists');
    this.adjacencyList[v] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2, weight = 1) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
      return console.log('no such vertex');
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return this.adjacencyList;
  }

  getShortestPath(previousList, currVal, startNodeVal) {
    const shortestPath = [];
    while (previousList[currVal]) {
      shortestPath.push(currVal);
      currVal = previousList[currVal];
    }
    return shortestPath.concat(startNodeVal).reverse();
  }

  dijkstra(vStart, vEnd, wallNodes = []) {
    const distances = {};
    const previous = {};
    const q = new PriorityQueue();
    let shortestPath = [];
    const visitedNodes = [];
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
      if (vertex === vStart) {
        distances[vertex] = 0;
      }
      previous[vertex] = null;
      q.enqueue(vertex, distances[vertex]);
    }
    while (q.values.length > 0) {
      const { val, priority } = q.dequeue();
      if (!visitedNodes.includes(val)) {
        visitedNodes.push(val);
      }
      if (val === vEnd) {
        shortestPath = this.getShortestPath(previous, val, vStart);
        break;
      }
      if (distances[val] !== Infinity) {
        this.adjacencyList[val].forEach((edge) => {
          const newDist = priority + edge.weight;
          if (
            newDist < distances[edge.node] &&
            !wallNodes.includes(edge.node)
          ) {
            distances[edge.node] = newDist;
            previous[edge.node] = val;
            q.enqueue(edge.node, newDist);
          }
        });
      } else {
        break;
      }
    }
    return { visitedNodes, shortestPath };
  }

  GBS(vStart, vEnd, numCols, wallNodes = []) {
    const previous = {};
    const q = new PriorityQueue();
    let shortestPath = [];
    const visitedNodes = [];
    q.enqueue(vStart, 1);
    while (q.values.length > 0) {
      const { val } = q.dequeue();
      // eslint-disable-next-line no-continue
      if (visitedNodes.includes(val)) continue;
      visitedNodes.push(val);
      if (val === vEnd) {
        shortestPath = this.getShortestPath(previous, val, vStart);
        break;
      }
      this.adjacencyList[val].forEach((edge) => {
        const heuristicScore = calcHeuristic(vEnd, edge.node, numCols);
        if (
          !visitedNodes.includes(edge.node) &&
          !wallNodes.includes(edge.node)
        ) {
          previous[edge.node] = val;
          q.enqueue(edge.node, heuristicScore);
        }
      });
    }
    return { visitedNodes, shortestPath };
  }
}
