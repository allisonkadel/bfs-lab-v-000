function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  console.log(rootNode, vertices, edges)
  let res = edges.filter(edge => {
    edge.includes(rootNode)
  })
  let adjacent = res.map(edge => {
    if (edge[0] === rootNode){
      return edge[0]
    }
    if (edge[1] === rootNode){
      return edge[1]
    }
  })
  return adjacent
}

function markDistanceAndPredecessor(){
  
}