function generateError(msg?: string) { //? will become optional param
    throw new Error(msg);
}

generateError();
generateError('error');


type User5 = {
    name: string;
    age:  number;
    role?: 'admin' | 'guest' //role will be optinal here, role is not have to be there
};

//coalescse operator
let input = null;
const didProvideInput = input ?? false;
