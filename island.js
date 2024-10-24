function getNeighbors(row, col, graph) {

  const neighbors = []
  let coord = undefined
  // Check top
  coord = [row - 1, col]
  if(row != 0){
    if(graph[coord[0]][coord[1]] === 1) neighbors.push(coord)
  } 
  // Check bottom
  coord = [row + 1, col]
  if(row != graph.length - 1){
    if(graph[coord[0]][coord[1]] === 1) neighbors.push(coord)
  } 
  // Check left
  coord = [row, col - 1]
  if(col != 0){
    if(graph[coord[0]][coord[1]] === 1) neighbors.push(coord)
  } 
  // Check right
  coord = [row, col + 1]
  if(col != graph[0].length - 1){
    if(graph[coord[0]][coord[1]] === 1) neighbors.push(coord)
  } 
  // Return neighbors
  return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set()

  // Create a stack, put the starting node in the stack
  const stack = [[row,col]];

  // Put the stringified starting node in visited
  visited.add(_toString([row,col]))
  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while(stack.length > 0){
    // Pop the first node
    let current = stack.pop()
    // DO THE THING (increment size by 1)
    size++;
    let neighbors = getNeighbors(current[0], current[1], graph)
    for(const neighbor of neighbors){
      if(!visited.has(_toString(neighbor))){
        visited.add(_toString(neighbor))
        stack.push(neighbor)
      }
    }
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }



  return size

  // Your code here
}

function _toString(coord){
  return `${coord[0]},${coord[1]}`
}

module.exports = [getNeighbors, islandSize];