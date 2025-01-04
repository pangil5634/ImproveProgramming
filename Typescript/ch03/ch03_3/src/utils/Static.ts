export class A {
    testValue: number = 0;
    static initValue = 1

    public increase(): void {
        A.initValue++;
    }
    public increase2(): void {
        this.testValue++;
    }
}
export let initVal = A.initValue;