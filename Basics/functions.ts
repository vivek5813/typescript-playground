function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never { // never -> it will never return anything
    console.log(errorMessage);
    throw new Error(errorMessage);
}