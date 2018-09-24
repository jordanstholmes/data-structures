var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val) {
  this._storage[this._end++] = val;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start++;

  return result;

};

Queue.prototype.size = function() {
  return this._end - this._start;
};

