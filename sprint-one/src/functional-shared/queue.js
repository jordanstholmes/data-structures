var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance._storage = {};
  instance._start = 0;
  instance._end = 0;
  
  _(instance).extend(queueMethods);
  
  return instance;
};

var queueMethods = {

  enqueue: function(val) {
    this._storage[this._end++] = val;
  },

  dequeue: function() {
    var value = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;
    return value;
  },

  size: function() {
    return this._end - this._start;
  }
};

var instance = {};

var stuff = {
  prop1: 'nothing',
  prop2: 'sup'
};


