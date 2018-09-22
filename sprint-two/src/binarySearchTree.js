


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
  } else if (value > this.value) {
    return 'right';
  } else if (this.value === value) {
    return 'equal';
  }
};

BinarySearchTree.prototype.contains = function(value) {
  return this._traverseTree(value, function() { return null; });
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
  if (this.value === value) {
    return value;
  }

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





/*
 * Complexity: What is the time complexity of the above functions?

For the million test, we could generate 1million even nums, then randomize the array and then feed them into our tree
 */
