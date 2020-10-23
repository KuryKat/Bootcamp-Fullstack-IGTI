class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} falando....`)
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name)
        this.type = type
    }

    speak() {
        console.log(`${this.name} (${this.type}) latindo....`)
    }
}

class Cat extends Animal {
    constructor(name, type) {
        super(name)
        this.type = type
    }

    speak() {
        console.log(`${this.name} (${this.type}) miando....`)
    }
}

const sapinho = new Animal('sapinho')
sapinho.speak()

const shiba = new Dog('Lucky', 'Shiba')
shiba.speak()

const ourinho = new Cat('Ourinho', 'Vira-Lata')
ourinho.speak()
