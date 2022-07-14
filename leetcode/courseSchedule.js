/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  if (prerequisites === null || prerequisites.length === 0) {
    return true;
  }
  let topologicalCount = 0;
  const { depGraph, depNumber } = buildDependencies(numCourses, prerequisites);
  const sources = [];

  for (let i = 0; i < depNumber.length; i++) {
    if (depNumber[i] === 0) {
      sources.push(i);
    }
  }

  while (sources.length > 0) {
    const current = sources.pop();
    topologicalCount += 1;

    for (let dep of depGraph[current]) {
      depNumber[dep] -= 1;
      if (depNumber[dep] === 0) {
        sources.push(dep);
      }
    }
  }

  return topologicalCount === numCourses;
};

const buildDependencies = (n, preqs) => {
  const depNumber = new Array(n).fill(0);
  const depGraph = {};
  for (let i = 0; i < n; i++) {
    depGraph[i] = [];
  }

  for (let p of preqs) {
    depGraph[p[1]].push(p[0]);
    depNumber[p[0]] += 1;
  }

  return {
    depGraph,
    depNumber,
  };
};
