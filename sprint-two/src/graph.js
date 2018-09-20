

// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = { edgeList: [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this.nodeList) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.nodeList[fromNode].edgeList;

  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[toNode].edgeList.push(fromNode);
  this.nodeList[fromNode].edgeList.push(toNode);
  
  /*
push the fromNode to the toNode's edgeList
and reverse

*/
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeList = this.nodeList;
 
  var removeEdgeFromNode = function(node, edge) {
    var edgeList = nodeList[node].edgeList;
    nodeList[node].edgeList = _.reject(edgeList, function(nodeEdge) {
      return nodeEdge === edge;
    });
  };
  removeEdgeFromNode(fromNode, toNode);  
  removeEdgeFromNode(toNode, fromNode);  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


