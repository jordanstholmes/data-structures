var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this.length++;
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {  
  if (this._storage[item] !== undefined) {
    this.length--;
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
ALL OF THEM ARE CONSTANT, BRO
 */
