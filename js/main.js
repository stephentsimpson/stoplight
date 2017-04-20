//I want a function that will utilize time intervals
//change the background color of the screen from green to yellow to red
//insert function that changes the background of what is being selected

//change color to green
function changeToGreen(){
  // setTimeout(
  //   function(){
  //     $("#stoplight").css("background-color", "green")
  //   },
  // 1000);
  // setInterval(
  //   function() {
  //   $("#stoplight-green").toggleClass("green-bg")},
  //    1000);
  $("#stoplight-red").removeClass("red-bg");
  $("#stoplight-yellow").removeClass("yellow-bg");
  $("#stoplight-green").addClass("green-bg");
}

//change color to yellow
function changeToYellow(){
  // setTimeout(
  //   function(){
  //     $("#stoplight").css("background-color", "yellow")
  //   },
  // 2000);
  //$("#stoplight").css("background-color", "yellow");\
//  console.log("colors yellow");
//  setTimeout($("#stoplight-yellow").toggleClass("yellow-bg"), 4000);
// setInterval(
//   function() {
//   $("#stoplight-yellow").toggleClass("yellow-bg")},
//    2000);
$("#stoplight-red").removeClass("red-bg");
$("#stoplight-yellow").addClass("yellow-bg");
$("#stoplight-green").removeClass("green-bg");

}

//change color to red
function changeToRed(){
  // setTimeout(
  //   function(){
  //     $("#stoplight").css("background-color", "red")
  //   },
  // 4000);
//  $("#stoplight").css("background-color", "red");
// setInterval(
//   function() {
//   $("#stoplight-red").toggleClass("red-bg")},
//    3000);
   $("#stoplight-red").addClass("red-bg");
   $("#stoplight-yellow").removeClass("yellow-bg");
   $("#stoplight-green").removeClass("green-bg");
}



var color = "green"

setInterval(function(){
  if(color == "green"){
    changeToYellow()
    color = "yellow"
  }
  else if(color == "yellow"){
    changeToRed()
    color = "red"
  }
  else if(color == "red"){
    changeToGreen()
    color = "green"
  }

},2000)



$(document).ready(function() {
  changeToGreen();
  // setInterval(changeToGreen(), 1000);
  // setInterval(changeToYellow(), 2000);
  // setInterval(changeToRed(), 4000);
});
