var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end++] = value;    
  };

  someInstance.dequeue = function() {
    if (someInstance.size()) {
      var startVal = storage[start];
      delete storage[start++];
    }

    return startVal;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
