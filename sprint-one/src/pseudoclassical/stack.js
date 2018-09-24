var Stack = function() {
  this._storage = {};
  this._size = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(val) {
  this._storage[this._size++] = val;
};

Stack.prototype.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

Stack.prototype.size = function() {
  return this._size;
};

