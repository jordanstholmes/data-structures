var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
/*
add new tree to current tree's children

*/
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
//check value of current object, if matches then return true
// if no children return false
// return result of checking children
  if(this.value === target) {
    return true;
  } else if (this.children.length === 0) {
    return false;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
