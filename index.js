function bfs(rootNode, vertices, edges){

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
  let nodes = adjacentNodes.map(node => {
    node.predecessor = predecessorNode.name;
    node.distance = predecessorNode.distance + 1;
  })
}