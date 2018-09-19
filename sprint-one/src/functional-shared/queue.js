var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  
  
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {
  enqueue: function(val) {
    var keys = Object.keys(this.storage);
    var lastIdx = keys.length === 0 ? 0 : keys[keys.length - 1];
    this.storage[lastIdx + 1] = val;
  },
  dequeue: function() {
    var keys = Object.keys(this.storage);
    var firstIdx = keys.length === 0 ? 0 : keys[0];
    var firstVal = this.storage[firstIdx];
    delete this.storage[firstIdx];
    return firstVal;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


