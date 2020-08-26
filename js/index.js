function checklove() {
  var x = document.getElementById("yourname").value;
  x = (x.slice(0, 1)).toUpperCase() + (x.slice(1, x.length)).toLowerCase();

  var y = document.getElementById("crushname").value;
  y = (y.slice(0, 1)).toUpperCase() + (y.slice(1, x.length)).toLowerCase();

  if (x == "") {
    alert("Please enter your name");
  } else if (x.length <= 2) {
    alert("Min lenght is 3")
  } else if (!isNaN(x)) {
    alert("Numbers are not allowed");
  } else if (y == "") {
    alert("Please enter your crush's name");
  } else if (y.length <= 2) {
    alert("Min lenght is 3")
  } else if (!isNaN(y)) {
    alert("Numbers are not allowed");
  } else {

    var randomNumber = Math.floor((Math.random() * 100) + 1);

    var text = "Hi " + x + "! The percentage of love between you and " + y + " is: ";

    var message = "";

    if (randomNumber == 100){
      message = "Are you guys even real?"
    }else if (randomNumber >  80) {
      message = "You hit the Jackpot.";
    } else if (randomNumber >  40) {
      message = "You can work on it.";
    } else if (randomNumber > 20) {
      message = "Time to find a new crush.";
    } else {
      message = "Don't be sad.";
    }

    document.getElementById("message1").innerHTML = text;
    document.getElementById("percent").innerHTML = randomNumber + "%";
    document.getElementById("message2").innerHTML = message;

  }
}
