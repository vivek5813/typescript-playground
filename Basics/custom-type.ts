type Mynumber = number;

type Role3 = 'admin' | 'editor' | 'guest' | 'reader'; 
type User = {
    name: string;
    age: number;
    role: Role3;
    permission: string[];
}

function access(role: Role3) {
    
}