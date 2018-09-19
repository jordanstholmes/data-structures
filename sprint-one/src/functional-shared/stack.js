var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  
  
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(val) {
    var stackLength = this.size();
    this.storage[stackLength] = val;
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


