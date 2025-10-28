function add2(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never { // never -> it will never return anything
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: (msg: string) => void) {
    cb('done');
}

performJob(log);

type User2 = {
    name: string;
    age: number;
    greet: () => string;
}

let user4: User2 = {
    name: 'MAx',
    age: 10,
    greet() {
        console.log('Hello there');
        return this.name;
    }
}