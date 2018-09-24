class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(val) {
    this._storage[this._end++] = val;
  }

  dequeue() {
    var result = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;

    return result;
  }

  size() {
    return this._end - this._start;
  }

}
