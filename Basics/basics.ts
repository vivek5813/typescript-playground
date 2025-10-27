let userName: string;
let userAge = 38;

userName = 'Max';

function add(a: number, b: number) {
    return a + b;
}

function add2(a: number, b = 5) {
    return a + b;
}

add(1, 2);
add2(10);

add2(1, 2);