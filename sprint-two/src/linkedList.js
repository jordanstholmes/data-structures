var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  // constant time
    var newTail = Node(value);

    if (list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail; 
    }
  };

  list.insert = function(value, idx) {
    let count = 0;
    let currentNode = list.head;
    let nextNode;

    while (count < idx) {
      currentNode = currentNode.next;

      if (currentNode === null) {
        throw new Error('index out of range.');
        return undefined; 
      }
      count++;
    }
  
    nextNode = currentNode.nextNode;
    currentNode.next = Node(value);
    currentNode.next.next = nextNode;
    
  };

  list.removeHead = function() {
  //constant time
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
  // linear
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
//constant
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
