let jack = { name: 'Jack', age: 32 };

for(let property in jack) {
    console.log(`${property} : ${jack[property as keyof typeof jack]}`);
}