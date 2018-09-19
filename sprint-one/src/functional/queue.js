var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var lastKey = someInstance.size() === 0 ? 0 : Number(keys[keys.length - 1]);
    
    storage[lastKey + 1] = value;
  };

  someInstance.dequeue = function() {
    var firstVal = storage[0];
    
    var keys = Object.keys(storage);
    var firstKey = Number(keys[0]);
    var firstVal = storage[firstKey];
    delete storage[firstKey];   
    return firstVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
