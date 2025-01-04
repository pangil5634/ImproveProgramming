import { ICompany, IPerson } from "./IPerson_ICompany";

let jack: IPerson = { name: 'Jack', age: 32 }, jane: IPerson = { name: 'Jane', age: 32 };
let apple: ICompany = { name: 'Apple COmputer, Inc', age: 43 }, ms: ICompany = { name: 'Microsoft', age: 44 };

console.log("Person : ", jack, jane);
console.log("Company : ", apple, ms);