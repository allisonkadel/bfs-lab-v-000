function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let res = edges.filter(edge => {
    console.log(edge)
    console.log(rootNode)
    return edge.includes(rootNode)
  })
  console.log(res)
  console.log(rootNode, vertices, edges)
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