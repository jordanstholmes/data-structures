// https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = this._getCollisionSafeIndex(index, k);
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype._getCollisionSafeIndex = function(index, k) {
  //loop through index
    //if key at index is undefined or matches k
      // return index
  //throw error, table is full  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


