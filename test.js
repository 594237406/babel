class NewArray extends Array {
  first() {
    return this[0];
  }
}

var a = new NewArray(1, 2, 3);
console.log(a.length); // 3
console.log(a); // [ 1, 2, 3 ]
console.log(a.first()); // trigger error