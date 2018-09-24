var Stack = function() {
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._size = 0;
  
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  push: function(val) {
    this._storage[this._size++] = val;
  },

  pop: function() {
    var result = this._storage[this._size - 1];
    delete this._storage[this._size - 1];

    this._size && this._size--;

    return result;
  },

  size: function() {
    return this._size;  
  }

};


