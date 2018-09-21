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

  if (value.constructor === Array) {
    this.value = value[0];
    value.forEach(val => this.insert(val));
  } else {
    this.value = value;
  }
  
};


BinarySearchTree.prototype.insert = function(value) {
  this._traverseTree(value, function() {
    return new BinarySearchTree(value);
  });
// logarithmic time
};

BinarySearchTree.prototype._traverseTree = function(value, cb) {
  var directionStr = this._whichDirection(value);
  if (directionStr === 'equal') {
    return true;
  }

  // if (value < this.value) {
  //   directionStr = 'left';
  // } else if (value > this.value){
  //   directionStr = 'right';
  // } else if (this.value === value) {
  //   return true;
  // }
  

  if (this[directionStr] === null) {
    this[directionStr] = cb(value);
    return false;
  } else {
    return this[directionStr]._traverseTree(value, cb);
  }
  

};

BinarySearchTree.prototype._whichDirection = function(value) {
  if (value < this.value) {
    return 'left';
  } else if (value > this.value){
    return 'right';
  } else if (this.value === value) {
    return 'equal';
  }
};

BinarySearchTree.prototype.contains = function(value) {
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

BinarySearchTree.prototype.searchClosest = function(value, closestSoFar = this.value, leastDiff = Infinity) {
  //if this value === value
    //return value
//if current diff is less than least diff
  //closestsofar = this.value
  //current diff = least diff
//get direction
//if next node is not null 
  //invoke searchClosest on next node
  if (this.value === value) {
    return value;
  };
  var currentDiff = Math.abs(value - this.value);
  if (currentDiff === leastDiff) {
    closestSoFar = Math.min(this.value, closestSoFar);
  } else if (currentDiff < leastDiff) {
    leastDiff = currentDiff;
    closestSoFar = this.value;
  }
  directionStr = this._whichDirection(value);
  if (this[directionStr] !== null) {
    return this[directionStr].searchClosest(value, closestSoFar, leastDiff);
  } else {
    return closestSoFar;
  }
};

var binarySearchArray = function(array, value) {
  //instantiate tree based on first value
  //insert subsequent values
  //return result of searching tree for closest value
};



/*
 * Complexity: What is the time complexity of the above functions?

For the million test, we could generate 1million even nums, then randomize the array and then feed them into our tree
 */
