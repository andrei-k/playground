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