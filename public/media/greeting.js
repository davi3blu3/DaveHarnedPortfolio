
var firstName = prompt("Hi there! What's your first name?") || "Visitor";

var lastName = prompt("What is your last name?") || "McVisitous";

var output = document.querySelector("#greeting");


output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
