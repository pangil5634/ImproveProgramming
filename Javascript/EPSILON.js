console.log(Number.EPSILON); // 2.220446049250313e-16
let a = 0.1 + 0.1 + 0.1;
let b = 0.3;
console.log(a - b); // 5.551115123125783e-17
if(Math.abs(a - b) < Number.EPSILON) {
    console.log("a and b are approximately equal");
}
else {
    console.log("a and b are not equal");
}