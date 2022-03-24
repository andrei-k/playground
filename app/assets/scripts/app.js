import "../styles/styles.css";
import Person from "./modules/person";

// Enables hot module replacement
if (module.hot) {
	module.hot.accept();
}


var bob = new Person("Bob", "purple");
bob.greet();

var jane = new Person("Jane", "green");
jane.greet();