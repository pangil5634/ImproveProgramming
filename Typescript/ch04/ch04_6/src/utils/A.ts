export class A{
    value: number = 1;
    method : () => void = () => {
        console.log(`value: ${this.value}`);
    }
}
