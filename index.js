function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let res = edges.filter(edge => {
    edge.includes(rootNode)
  })
  console.log(res)
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