function checklove() {
  var x = document.getElementById("yourname").value;
  var y = document.getElementById("crushname").value;

  
  var text = "Hi " + x +"! The love percentage between you and "+ y + " is";
  document.getElementById("demo").innerHTML = text;
}
