interface Person {
    name: string;
    age: number;
}

interface readonlyPerson {
    readonly name: string;
    readonly age: number;
}

const person: Person = {
    name: 'Özgür',
    age: 27
};

person.name = 'Özgür';
person.age = 27;

type MyReadonly<T>= {
    readonly [P in keyof T]: T[P]
}
function freezePerson<T>(person: T): MyReadonly<T> {
    return Object.freeze(person);
}

const newPerson = freezePerson(person);
newPerson.age = 27;