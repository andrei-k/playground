import "../styles/styles.css";

// Enables hot module replacement
if (module.hot) {
	module.hot.accept();
}

// Just some practice with an object
var john = {
	name: "John Doe",
	faveColor: "blue",

	// When a function belongs to a function, it's referred to as a method
	greet: function() {
		console.log("Hi, my name is " + john.name + " and my favorite color is " +  john.faveColor);
	}
}
john.greet();


// This is a more efficient approach when we want to create multiple objects that are very similar to each other
// Example of a constructor function
function Person(name, faveColor) {
	this.name = name;
	this.faveColor = faveColor;
	this.greet = function() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " +  this.faveColor);
	}
}

var bob = new Person("Bob", "blue");
bob.greet();

var jane = new Person("Jane", "green");
jane.greet();