let hobbies = ['Sports', 'Cooking'];

//will not work
//hobbies.push(10);

let users: string[];

let users2: (string | number)[];

let users3: Array<string | number>;

users2 = [1, 'Max'];
users2 = [5, 1];
users2 = ['Max', 'Anna'];


//Tuple

let possibleResults: [number, number];

let possibleResults2: [number, string];

possibleResults = [1, -1];
