

// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//Constant time
  var thisNode = this.nodeList[node];
  this.nodeList[node] = { edgeList: thisNode ? thisNode.edgeList : [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// Constant!
  return !!this.nodeList[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// Linear (edges)
  this.nodeList[node].edgeList.forEach(edgeNode => {
    this._removeEdgeFromNode(edgeNode, node);
  });
  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
// Linear; n = # of edges
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
// constant time
  this.nodeList[toNode].edgeList.push(fromNode);
  this.nodeList[fromNode].edgeList.push(toNode);
};

Graph.prototype._removeEdgeFromNode = function(node, edge) {
// Linear time (edges), could be constant if we refactored 
  var edgeList = this.nodeList[node].edgeList;
  this.nodeList[node].edgeList = _.reject(edgeList, function(nodeEdge) {
    return nodeEdge === edge;
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// Linear (edges), could be constant if we refactored _removeEdgeFromNode
  this._removeEdgeFromNode(fromNode, toNode);  
  this._removeEdgeFromNode(toNode, fromNode);  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
// Linear (nodes)
  for (let node in this.nodeList) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


