/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  const { graph, dependencies } = buildDep(n, edges);
  if (edges.length === 0) {
    return Object.keys(graph);
  }
  const sources = [];
  let leaves = [];
  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] === 1) {
      sources.push(i);
    }
  }
  while (sources.length > 0) {
    const sourcesSize = sources.length;
    const level = [];
    for (let i = 0; i < sourcesSize; i++) {
      const current = sources.shift();
      level.push(current);
      for (let dep of graph[current]) {
        dependencies[dep] -= 1;
        if (dependencies[dep] === 1) {
          sources.push(dep);
        }
      }
    }
    leaves = level;
  }

  return leaves;
};

const buildDep = (n, edges) => {
  const graph = {};
  const dependencies = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let e of edges) {
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);

    dependencies[e[0]] += 1;
    dependencies[e[1]] += 1;
  }

  return { graph, dependencies };
};
