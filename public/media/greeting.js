var name = prompt("Hi there! What's your name?");

var output = document.querySelector("#greeting");

if (name) {
  output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
} else {
  output.innerHTML = "<p>Please give us your name!</p>"
}




// "asdlfkjasdfjasdfkjh" === true
//
// "" = false
