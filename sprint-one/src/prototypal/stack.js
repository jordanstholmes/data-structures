var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(val) {
    var stackSize = this.size();
    this.storage[stackSize] = val;
  },
  pop: function() {
    var topIdx = this.size() - 1;
    var topVal = this.storage[topIdx];
    delete this.storage[topIdx];
    return topVal;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


