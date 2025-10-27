enum Role {
    Admin,
    Editor,
    Guest
}

enum Role2 {
    Admin = "admin",
    Editor = "editor",
    Guest = "guest"
}

let userRole: Role = Role.Admin;


userRole = Role.Guest;

let userRole2: 'admin' | 'editor' | 'guest' = 'guest';

let possibleResults3: [1 | -1, 1 | -1];
