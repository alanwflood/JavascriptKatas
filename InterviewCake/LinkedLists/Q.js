/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.capacity = k;
  this.q = new Array(k);
  this.size = 0;
  this.head = -1;
  this.tail = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  console.log(
    "enqueue before",
    "value",
    value,
    "tail",
    this.tail,
    "head",
    this.head,
    "q",
    this.q
  );
  // We've reach cap so fail
  if (this.size === this.capacity) return false;
  this.tail++;
  if (this.head === -1) this.head++;
  if (this.tail > this.capacity - 1) this.tail = 0;

  this.q[this.tail] = value;

  this.size++;
  console.log(
    "enqueue after",
    "value",
    value,
    "tail",
    this.tail,
    "head",
    this.head,
    "q",
    this.q
  );
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  console.log("dequeue", "tail", this.tail, "head", this.head, "q", this.q);
  // set value at head to null
  this.q[this.head] = null;
  this.head++;

  // If head is now greater than capacity it means we've hit a wall
  // so go back to 0;
  if (this.head > this.capacity - 1) this.head = 0;
  this.size--;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.q[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  console.log("rear", this.q, this.tail);
  return this.q[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capacity;
};

let circularQueue = new MyCircularQueue(3); // set the size to be 3
console.log(circularQueue.enQueue(1));
console.log(circularQueue.enQueue(2));
console.log(circularQueue.enQueue(3));
console.log(circularQueue.enQueue(4));
console.log(circularQueue.Rear());
console.log(circularQueue.isFull());
console.log(circularQueue.deQueue());
console.log(circularQueue.enQueue(4));
console.log(circularQueue.Rear());
