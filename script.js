//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this._species;
	}
	makesound(){
		console.log("The "+ this.species + "makes a sound");
	}
}

class Dog extends Animal {
	const myDog = new Dog("Golden Retriever");
myDog.makeSound(); 
myDog.bark(); 
	
}

class Cat extends Animal {
	const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr(); 
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
