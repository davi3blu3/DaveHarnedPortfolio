var thirsty = true;

while(thirsty){

  var response = prompt("You duck into a warm pub. Type a drink to order something from the bartender.");
    switch (response) {
      case "beer":
        alert("The bartender pours you a beer.");
        break;
      case "whiskey":
        alert("The bartender pours you a whiskey.");
        thirsty = false;
        break;
      case "tequila":
        alert("The bartender pours you a tequila.");
        break;
      default:
        alert("The bartender says 'We ain't got none.'");
    }

}
