export function makePerson(name: string, age: number) {
    return { ame: name, age: age };
}

export function testMakePerson() {
    console.log(
        makePerson('Jane', 22),
        makePerson('Jack', 33)
    );
}