/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const findCircleNum = (isConnected) => {
  let numberOfProvinces = nrOfComponents(isConnected);

  return numberOfProvinces;
};

/* =============== Iterative DFS =============== */
const nrOfComponents = (edges) => {
  const graph = buildGraph(edges);
  const visited = {};
  let numberOfProvinces = 0;

  for (let node of Object.keys(graph)) {
    if (node in visited) {
      continue;
    }
    numberOfProvinces += 1;

    const queue = [node];
    while (queue.length > 0) {
      const current = queue.pop();
      if (current in visited) {
        continue;
      }
      visited[current] = true;
      for (let neighbour of graph[current]) {
        queue.push(neighbour);
      }
    }
  }

  return numberOfProvinces;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let i = 0; i < edges.length; i++) {
    graph[i] = [];
    for (let j = 0; j < edges[i].length; j++) {
      if (edges[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }
  return graph;
};
