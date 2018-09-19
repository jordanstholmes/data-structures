class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(val) {
    var keys = Object.keys(this.storage);
    var nextKey = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
    this.storage[nextKey] = val;
  }
  dequeue() {
    var keys = Object.keys(this.storage);
    if (keys.length === 0) { return; }
    var firstKey = keys[0];
    var firstVal = this.storage[firstKey];
    delete this.storage[firstKey];
    return firstVal; 
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
