var person_array = [];

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.toString = function() {
		return this.firstname + " " + this.lastname;
	}
	return this;
}

function addPerson(firstname, lastname) {
	// if no arguments are given to the function, then get the values from the input elements
	if (arguments.length == 0) {
		var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
	}
	
	// create a person object and add it to the global person array
	// var person = new Person(firstname, lastname);
	var person = {"firstname": firstname, "lastname": lastname};
	person_array.push(person);

	// add a li element for this new person
	var person_list = document.getElementById("person_list");
	var li_node = document.createElement("li");
  	var textnode = document.createTextNode(person.firstname + " " + person.lastname);
  	li_node.appendChild(textnode);
  	person_list.appendChild(li_node);

  	// put the global person array at the end, just for checking
  	document.getElementById("end_p").innerHTML = person_array; //JSON.stringify(person_array);
}