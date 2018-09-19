class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(val) {
    var stackSize = this.size();
    this.storage[stackSize] = val;
  }
  pop() {
    var topIdx = this.size() - 1;
    var topVal = this.storage[topIdx];
    delete this.storage[topIdx];
    return topVal;
  }
  size() {
    return Object.keys(this.storage).length; 
  }
}