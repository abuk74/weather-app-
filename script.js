
function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
}
greetMe("World");

$(document).ready(function(){
  $("#flip").click(function(){
      $("#panel").slideToggle("slow");
  });
});