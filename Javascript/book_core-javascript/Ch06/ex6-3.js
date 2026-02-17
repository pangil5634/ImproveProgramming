var arr = [1, 2];
console.log(Array.prototype.constructor === Array);
console.log(arr.__proto__.constructor === Array);
console.log(arr.constructor === Array);

var arr2 = new arr.constructor(3, 4);
console.log(arr2);
