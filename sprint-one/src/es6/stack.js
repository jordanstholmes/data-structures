class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(val) {
    this._storage[this._size++] = val;
  }

  pop() {
    this._size && this._size--;
    var result = this._storage[this._size];
    delete this._storage[this._size];

    return result;
  }

  size() {
    return this._size;
  }

}