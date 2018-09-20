var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail; 
    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
