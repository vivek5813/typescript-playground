
//vanilla JS
// class User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


// TS version
class User {
    public hobbies: string[] = [];

    readonly stuff: string[] = [];

    protected _lastName: string = '';

    constructor(public name: string, public age: number, private mobile: number) {}

    greet() {
        console.log('number' + this.mobile);
    }

    get getMobile() {
        return this.mobile;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    static eid = 'USER';
}

const vivek = new User('vivek', 30, 111);

console.log(vivek);

console.log(User.eid);


// Imheritance

class Employee extends User {
    constructor(public jobTitle: string) {
        super('vanilla', 12, 111);
    }

    work() {
        console.log(this._lastName);
    }
}

// Abstract class

abstract class UIElemetn {
    constructor(public identifier: string) {

    }

    clone(targetLocation: string) {

    }
}

class SideDrawerElement extends UIElemetn {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}

// Interfaces

interface Authenticable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

let user: Authenticable;

user = {
    email: 'test',
    password: 'abc',
    login() {
        
    },
    logout() {
        
    }
}

class AuthenticableUser implements Authenticable {
    constructor(public userName: string, public email: string, public password: string) {}

    login(): void {
        
    }

    logout(): void {
        
    }
}

function authenticate(user: Authenticable) {
    user.login();
}

interface AuthenticableAdmin extends Authenticable {
    role: 'admin' | 'superadmin';
}