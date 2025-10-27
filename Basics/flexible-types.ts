let age: any = 36;


age = '37';
age = false;
age = {};
age = [];

//better method to control type

let age2: string | number = 36;

age2 = '37';
age2 = 2;
