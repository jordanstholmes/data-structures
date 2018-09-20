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


BinarySearchTree.prototype.insert = function(thatValue) {
/*
if thatValue is less than this value
  if this left is null, this left becomes a new tree(thatValue)
  else
    recurse on thisLeft 
else if that value is greater than this value
  if this right is null, this right becomes newTree(thatValue)
  else
    recurse on this right
*/
  var destinationNode;

  if (thatValue < this.value) {
    destinationNode = this.left;
  } else if (thatValue > this.value){
    destinationNode = this.right;
  }

  // if (thatValue < this.value) {
 
  //   if (this.left === null) {
  //     this.left = new BinarySearchTree(thatValue);
  //   } else {
  //     this.left.insert(thatValue);
  //   }

  // }

};

BinarySearchTree.prototype.contains = function(thatValue) {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?

For the million test, we could generate 1million even nums, then randomize the array and then feed them into our tree
 */
