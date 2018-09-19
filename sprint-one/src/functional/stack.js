var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    var currentLen = someInstance.size();
    storage[currentLen] = value;
  };

  someInstance.pop = function() {
    var topIdx = someInstance.size() - 1;
    var topValue = storage[topIdx];
    delete storage[topIdx]; 
    return topValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
