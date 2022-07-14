/*

https://leetcode.com/problems/parallel-courses/

*/

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
const minimumSemesters = (n, relations) => {
  if (n === 0) {
    return 0;
  }
  if (relations === null || relations.length === 0) {
    return 1;
  }

  let minSemesters = 0;
  let topologicalOrderCount = 0;
  const { graph, dependenciesNumber } = buildDependencies(n, relations);
  const sources = [];
  for (let i = 0; i < dependenciesNumber.length; i++) {
    if (dependenciesNumber[i] === 0) {
      sources.push(i);
    }
  }

  while (sources.length > 0) {
    const sourcesSize = sources.length;
    for (let i = 0; i < sourcesSize; i++) {
      const current = sources.shift();
      topologicalOrderCount += 1;
      for (let dep of graph[current]) {
        dependenciesNumber[dep] -= 1;
        if (dependenciesNumber[dep] === 0) {
          sources.push(dep);
        }
      }
    }
    minSemesters += 1;
  }

  console.log(topologicalOrderCount);
  if (topologicalOrderCount === n) {
    return minSemesters;
  }
  return -1;
};

const buildDependencies = (n, relations) => {
  const dependenciesNumber = new Array(n).fill(0);
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let r of relations) {
    graph[r[0] - 1].push(r[1] - 1);
    dependenciesNumber[r[1] - 1] += 1;
  }
  return {
    graph,
    dependenciesNumber,
  };
};
