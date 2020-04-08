function crazy() {
var crazy = function() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
  var thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}
crazy()

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();
// function sayMyName() {
//   // fix the code in here:
//   var name = "Cricky";
//
//   function sayMy() {
//     name = "Kristin"; // took out var before name here
//     console.log(name);
//   }
//   sayMy();
// }
// sayMyName()()

var sayMyName = function() {
  // fix the code in here:
  var name;
  name = "Cricky";

  function sayMy() {
    name = "Kristin"; // took out var before name here
    console.log(name);
    var name = "Kristin";
  }
  sayMy();
}
sayMyName()()
