interface Person {
    name: string;
    age: number;
}

interface PartialPerson {
    name?: string;
    age?: number;
}
// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// }
function updatePerson(person: Person, prop: Partial<Person>) {
    return { ...person, ...prop };
}
interface readonlyPerson {
    readonly name: string;
    readonly age: number;
}

const person: Person = {
    name: 'Özgür',
    age: 27
};
const updatedPerson = updatePerson(person, { name: 'ABC'});
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