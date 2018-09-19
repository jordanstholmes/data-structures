var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(val) {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    var nextIdx = keys.length === 0 ? 0 : lastKey + 1;
    this.storage[nextIdx] = val;
  },
  dequeue: function() {
    var keys = Object.keys(this.storage);
    if (keys.length === 0) { return; }
    
    var firstIdx = keys[0];
    var firstVal = this.storage[firstIdx];
    delete this.storage[firstIdx];
    return firstVal;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


