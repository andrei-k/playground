// Example of a constructor function
function Person(name, faveColor) {
	this.name = name;
	this.faveColor = faveColor;
	this.greet = function() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " +  this.faveColor);
	}
}

export default Person;