// https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = this._getCollisionSafeInsertionIndex(index, k);

  var valueToReturn = this._storage.get(index)
  
  if (this._storage.get(index) === undefined) {
    this._size++;
  } else {
    valueToReturn = valueToReturn[1];
  }

  this._storage.set(index, [k, v]);
  if (this._size / this._limit > 0.75) { this._changeSize("double") }
  return valueToReturn
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //make index collision-safe
  //get value at index
  index = this._getCollisionSafeRetrievalIndex(index, k);
  var targetElement = this._storage.get(index);
  return targetElement ? targetElement[1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = this._getCollisionSafeRetrievalIndex(index, k);
  if (this._storage.get(index) !== undefined) { //prevents decrementing size if key was not there
    this._size--;
    this._storage.set(index, null);
  } 
  if (this._size / this._limit < 0.25 && this._size >= 4) { this._changeSize("halve") }
  
  
};

HashTable.prototype._changeSize = function(str) {
  let multiplier;
  if (str === 'halve') {
    multiplier = .5;
  } else if (str === 'double') {
    multiplier = 2;
  } else {
    throw new Error('_changeSize argument must be either "halve" or "double"');
  }
  
  this._storage.setLimit(this._limit * multiplier);
  this._limit = this._limit * multiplier;

  this._storage.each((tuple, idx, limArr) => {
    if (tuple === null) {
      this._storage.set(idx, undefined);
    }

    if (tuple !== undefined) { 
      let newIdx = getIndexBelowMaxForKey(tuple[0], this._limit);
      newIdx = this._getCollisionSafeRetrievalIndex(newIdx, tuple[0]);

      if (newIdx !== idx) {
        this._storage.set(newIdx, tuple);
        this._storage.set(idx, undefined);
      }
    }
  });
};

HashTable.prototype.getSize = function() {
    return this._size;
  };

HashTable.prototype._getCollisionSafeRetrievalIndex = function(index, k) {
  //loop through index
    //if key at index is undefined or matches k
      // return index
  //throw error, table is full  
  for (let i = 0; i < this._limit; i++) {
    let idxToCheck = (i + index) % this._limit;
    let storageToCheck = this._storage.get(idxToCheck);
    if (storageToCheck !== null && (storageToCheck === undefined || storageToCheck[0] === k)) {
      return idxToCheck;
    }
  }
};

HashTable.prototype._getCollisionSafeInsertionIndex = function(index, k) {
  //loop through index
    //if key at index is undefined or matches k
      // return index
  //throw error, table is full  
  for (let i = 0; i < this._limit; i++) {
    let idxToCheck = (i + index) % this._limit;
    let storageToCheck = this._storage.get(idxToCheck);
    if (storageToCheck === null || storageToCheck === undefined || storageToCheck[0] === k) {
      return idxToCheck;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  Worst case, but highly unlikely, could be linear for all, but generally, constant
 */


