var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance._storage = {};
  instance._size = 0;

  _(instance).extend(stackMethods);
  return instance;
};

var stackMethods = {

  push: function(val) {
    this._storage[this._size++] = val;
  },

  pop: function() {
    if (this._size) {
      var result = this._storage[--this._size];
      delete this._storage[this._size];
    }

    return result;
  },

  size: function() {
    return this._size;
  }

};


