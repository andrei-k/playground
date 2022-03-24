import "../styles/styles.css";
import Person from "./modules/person";

// Enables hot module replacement
if (module.hot) {
	module.hot.accept();
}

// Practice with inheritance
class Adult extends Person {
	payTaxes() {
		console.log(this.name + " has payed taxes");
	}
}

var bob = new Person("Bob", "purple");
bob.greet();

var jane = new Adult("Jane", "green");
jane.greet();
jane.payTaxes();