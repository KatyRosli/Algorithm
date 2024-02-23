export default function bfs(
  graph: WeightedAdjacencyMatrix, 
  source: number, 
  needle: number
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    
    seen[source] = true;
    const q: number[] = [source];

    while (q.length) {
      const current = q.shift() as number;
      if (current === needle) {
        break;
      }
      const adjs = graph[current];
      for (let i = 0; i < graph.length; i++) {
        if (adjs[i] === 0) {
          continue;
        }
        if (seen[i]) {
          continue;
        }
        seen[i] = true;
        prev[i] = current;
        q.push(i);
      }
    }
    
    if (prev[needle] === -1) {
      return null;
    }

    // Build the path backwards
    let current = needle;
    const out: number[] = [];
    while (prev[current] !== -1) {
      out.push(current);
      current = prev[current];
    }
    out.push(source); // Add the source node
    return out.reverse();
}
