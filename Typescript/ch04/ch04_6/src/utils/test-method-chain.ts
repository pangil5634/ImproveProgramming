import { Calulator } from "./method-chain";

let calc = new Calulator;
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result); // 36