// console.log(`typeof ''`, typeof '')
// console.log(`typeof []`, typeof [])
// console.log(`typeof {}`, typeof { })
// console.log(`typeof false`, typeof false)
// console.log(`typeof 0.00`, typeof 0.00)
// console.log(`typeof Date()`, typeof new Date())

const person = {
    name: 'Todd', age: 27
}
type Person = typeof person; 

const anotherPerson: Person = {
    name: 'Özgür', age: 30
}
console.log('anotherPerson', anotherPerson);
// Javascript:
// typeof person // 'object'