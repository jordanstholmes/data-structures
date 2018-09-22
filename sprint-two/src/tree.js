var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
/*
add new tree to current tree's children

*/
  if (typeof value === 'object') {
    this.children.push(value);
  } else {
    this.children.push(Tree(value));
  }
//constant time
};

treeMethods.contains = function(target) {
//check value of current object, if matches then return true
// if no children return false
// return result of checking children
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
// linear
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
