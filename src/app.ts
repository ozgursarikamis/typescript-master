interface Person {
    name: string;
    age?: number;
}

type MyRequired<T> = {
    //    readonly [P in keyof T]?: T[P] // any of them are optional
    //    readonly [P in keyof T]+?: T[P] // completely same
    [P in keyof T]-?: T[P]
}

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age}`; 
}

const person: Required<Person> = {
    name: 'Özgür',
    age: 30,    
};

const age = printAge(person);