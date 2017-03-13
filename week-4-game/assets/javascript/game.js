
	//give a random number =<35
	// assign it to the target number
	// pull the picture ids 
	//assign random numbers to the picture ids <20
	//add the numbers together everytime you press a crystal 
	//if the number together is higher than the expected number then you loose if its equal then you win. 
	//return back to the number of wins board

	//create a foreloop for all the stones
var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

// var randomnumber = function randomnumber(1,50) {
// 	return Math.floor((Math.random()*50) +1);
// 	console.log(randomnumber)
// }

// $("#randomNumber").ready(function) {

	//The Value of Random Number generated via randomization
var rand = number[Math.floor(Math.random() * number.length)];
var randomnumber = Math.floor(Math.random()*50)
$("#randomNumber").append(randomnumber);
console.log(randomnumber);
// }


	//The value of stone 1
var stone1 = Math.floor(Math.random()*35);
$("#Stone1").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone1});
		});
	console.log(stone1)
	// $("#yourScore").append(function() {
	// 	yourScore++ stone1

	
var stone2 = Math.floor(Math.random()*35);
$("#Stone2").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone2});
		});
	console.log(stone2)


var stone3 = Math.floor(Math.random()*35);
$("#Stone3").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone3});
		});
	console.log(stone3)

var stone4 = Math.floor(Math.random()*35);
$("#Stone4").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone4});
		});
	console.log(stone4)

var stone5 = Math.floor(Math.random()*35);
$("#Stone5").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone5});
		});
	console.log(stone5)

var stone6 = Math.floor(Math.random()*35);
$("#Stone6").click(function(){
	$("#yourScore").html(function(i,val) {return + val + stone6});
		});
	console.log(stone6)	


$("#Stones").click(function() {
if ("#randomNumber" === "#yourScore") {
	alert ("You Win")
	win++
}

if ("#randomNumber" < "#yourScore") {
	alert ("you Lose")
	loss++
}

})

// var Stone1 = Math.floor(Math.random()*35);
// function randomWholeNum () {
// 	return Math.stone1
// 	$("#stone1"). on("click", function()
	

// $(document).ready(function() {

//       // When random-button is clicked...
//       $("#crystalOne").on("click", function() {

//         // ... we generate a random number
//         var random = Math.floor(Math.random() * 35) + 1;

//         // ... and then dump the random number into our random-number div.
//         $("your score").html("yourscore" + "crystalOne");
