const dataList : number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

dataList.map((data, index) => {
    sum += data;
});
console.log(sum);
