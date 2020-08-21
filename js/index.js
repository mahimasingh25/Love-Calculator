function checklove() {
  var x = document.getElementById("yourname").value;
  var y = document.getElementById("crushname").value;
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

    var text = "Hi " + x + "! The percentage of love between you and " + y + " is " + randomNumber + "%";
    document.getElementById("demo").innerHTML = text;

  }
}
