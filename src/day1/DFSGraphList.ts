function walk(
  graph: WeightedAdjacencyList,
  current: number,
  needle: number,
  seen: boolean[],
  path: number[]
): boolean {
  if (current === needle) {
    path.push(current); // Include the needle in the path
    return true;
  }

  if (seen[current]) {
    return false;
  }

  seen[current] = true;

  // Recurse
  path.push(current);

  const list = graph[current];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];

    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  // If the current node doesn't lead to the needle, backtrack
  path.pop();

  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  if (!walk(graph, source, needle, seen, path)) {
    return null;
  }

  return path;
}
