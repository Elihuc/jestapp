export const toUpperCase = (arg: string) => {
    return arg.toUpperCase();
}
//npm i -D typescript jest ts-jest @types/jest ts-node
export type StringTesting = {
    lowercase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export const getStringTesting = (arg: string): StringTesting => {
    return {
        lowercase: arg.toLowerCase(),
        uppercase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }
}

