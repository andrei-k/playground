// Example of a class syntax
class Person {
	constructor(name, faveColor) {
		this.name = name;
		this.faveColor = faveColor;
	}

	greet() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " +  this.faveColor);
	}
}


export default Person;