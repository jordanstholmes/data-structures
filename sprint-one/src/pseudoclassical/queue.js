var Queue = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val) {
  var keys = Object.keys(this.storage);
  var nextIdx = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
  this.storage[nextIdx] = val;  
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  if (keys.length === 0) {
    return;
  } else {
    var firstKey = keys[0];
    var firstVal = this.storage[firstKey];
    delete this.storage[firstKey];
    return firstVal;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

