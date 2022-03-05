const person = {
    firstName: 'Spencer',
    lastName: 'Brazell',
    age: 26,
}

// console.log(person)

// console.log(person.firstName)

// console.log(person['firstName'])

const meal = {
    appetizer: 'Onion Blume',
    entree: 'Steak & Crab',
    dessert: 'Tillamook Mudslide',
    drink: 'Dr. Pepper'
}
 const { appetizer, entree } = meal

 console.log(appetizer)
 console.log(entree)

 const {drink: bestSodaEver} = meal
//  const bestSodaEver = meal.drink
console.log(bestSodaEver)
//  const {dessert} = meal


// Loop over properties in an object
for (let key in person) {
    // console.log({ key, value: person[key] })
}

// ADDING PROPERTIES
person.job = 'Account Manager'

person['pets'] = ['Max']

console.log(person)

// DELETING PROPERTIES
delete person.job
console.log(person)

//CLASSES (uppercase)
class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
        this.dogYears = age * 7
        this.isGoodDog = true
    }

    greeting(personToBeGreeted){
        console.log(`Hi ${personToBeGreeted}, my name is ${this.name} and I amd a ${this.age} year old ${this.breed}.`)
    }

    incrementAge() {
        console.log(`${this.name} just got one year older! Party Time!!!`)
        this.age += 1
        this.dogYears = this.age * 7
    }
}


// const max = new Dog('Max', 'Germanshorthair', 4)
// const marley = new Dog('Marley', 'Labradoodle', 8)
// max.greeting(marley.name)

// max.incrementAge()
// max.incrementAge()
// max.incrementAge()
// max.incrementAge()
// max.incrementAge()

// console.log(max)


// * Changing details *
// max.age = 6
// max.dogYears = max.age * 7

// console.log(max)

//CLASS PUPPY
class Puppy extends Dog {
    constructor(name, breed, trainingLevel) {
        super(name, breed, 0)

        this.trainingLevel = trainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
    }
}

const lassie = new Puppy('Lassie', 'Golden Retriever', 10)

console.log(lassie)

lassie.levelUp(12)

console.log(lassie)

