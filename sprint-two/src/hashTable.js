// https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = this._getCollisionSafeIndex(index, k);
  if (this._storage.get(index) === undefined) {
    this._size++;
  }

  this._storage.set(index, [k, v]);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //make index collision-safe
  //get value at index
  index = this._getCollisionSafeIndex(index, k);
  var targetElement = this._storage.get(index);
  return targetElement ? targetElement[1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = this._getCollisionSafeIndex(index, k);
  if (this._storage.get(index) !== undefined) {
    this._size--;
    this._storage.set(index, undefined);
  } 
  
  
};

HashTable.prototype.getSize = function() {
    return this._size;
  };

HashTable.prototype._getCollisionSafeIndex = function(index, k) {
  //loop through index
    //if key at index is undefined or matches k
      // return index
  //throw error, table is full  
  for (let i = 0; i < this._limit; i++) {
    let idxToCheck = (i + index) % this._limit;
    let storageToCheck = this._storage.get(idxToCheck);
    if (storageToCheck === undefined || storageToCheck[0] === k) {
      return idxToCheck;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  Worst case, but highly unlikely, could be linear for all, but generally, constant
 */


