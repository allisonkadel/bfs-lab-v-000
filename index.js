function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let discoveredNodes = [rootNode];
  while (discoveredNodes.length > 0){
    console.log(discoveredNodes)
    let currentNode = discoveredNodes.shift();
    let adjacentNodes = findAdjacent(rootNode.name, vertices, edges);
    markDistanceAndPredecessor(rootNode, adjacentNodes);
    discoveredNodes.concat(adjacentNodes);
    console.log(discoveredNodes)
  }
  return discoveredNodes;
}

function findAdjacent(rootNode, vertices, edges){
  let res = edges.filter(edge => {
    return edge.includes(rootNode)
  })
  let adjacent = res.map(edge => {
    if (edge[0] === rootNode){
      return edge[1]
    }
    if (edge[1] === rootNode){
      return edge[0]
    }
  })
  return vertices.filter(vertex => {
    return adjacent.includes(vertex.name) && vertex.distance === null
  })
}

function markDistanceAndPredecessor(predecessorNode, adjacentNodes){
  return adjacentNodes.map(node => {
    node.predecessor = predecessorNode;
    node.distance = predecessorNode.distance + 1;
    return node
  })
}