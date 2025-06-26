export const filter = <T>(array: T[], callback: (result: T, index?: number) => boolean) : T[] => {
    let result: T[] = []
    for (let index: number = 0; index < array.length; ++index){
        const value = array[index];
        if (callback(value, index))
            result.push(value);
    }
    return result;
}