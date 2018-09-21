/*
INPUT: first value
OUTPUT: instantiates a tree object
CONSTRAINTS: time constraint in balancing the tree
EDGECASES: try to insert value already there (do nothing); if the input is already ordered, we'd just have a linked list
(need to add rebalance functionality)

Instantiate a binary tree, which optimizes search functions

EXPLANATION:
Take a number and create a tree with that number as its only node.
Then for each subsequent value added, build a tree preserving left and right children correctly


*/


var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  
};


BinarySearchTree.prototype.insert = function(value) {
  this._traverseTree(value, function() {
    return new BinarySearchTree(value);
  });
// logarithmic time
};

BinarySearchTree.prototype._traverseTree = function(value, cb) {
  var directionStr;

  if (value < this.value) {
    directionStr = 'left';
  } else if (value > this.value){
    directionStr = 'right';
  } else if (this.value === value) {
    return true;
  }

  if (this[directionStr] === null) {
    this[directionStr] = cb(value);
    return false;
  } else {
    return this[directionStr]._traverseTree(value, cb);
  }
  

};

BinarySearchTree.prototype.contains = function(value) {
  debugger;
  return this._traverseTree(value, function() {return null;});
// logarithmic time
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
// linear
};


/*
 * Complexity: What is the time complexity of the above functions?

For the million test, we could generate 1million even nums, then randomize the array and then feed them into our tree
 */
