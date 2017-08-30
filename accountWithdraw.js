var bankAccount1 = {};
bankAccount1["name"] = "James";
bankAccount1["balance"] = 1567.57;

var withdraw = prompt("How much would you like to withdraw?");
bankAccount1["balance"] -= withdraw;

window.alert("Your balance is " + bankAccount1["balance"]);