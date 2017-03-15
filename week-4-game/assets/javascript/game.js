
	
	//create a foreloop for all the stones (multiple attempts have failed.)
	//restart the game once declared win or loss (multiple attempts have failed.)

//declaring the variables from 1-50.	
var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

//The target number which is a number between 1 and 50
var rand = number[Math.floor(Math.random() * number.length)];
var randomnumber = Math.floor(Math.random()*50)
$("#randomNumber").append(randomnumber);
console.log(randomnumber);

//The score that you generate. 
var yourscore = 0


		//The value of stones[i]
		var stone1 = Math.floor(Math.random()*35);
		$("#Stone1").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone1   //creating a total for your number
		$("#yourScore").html(function(i,val) {return + val + stone1});//reporting total your number to total score
		});
		});
		console.log(stone1)
	
		var stone2 = Math.floor(Math.random()*35);
		$("#Stone2").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone2
		$("#yourScore").html(function(i,val) {return + val + stone2});
		});
		});
		console.log(stone2)

		var stone3 = Math.floor(Math.random()*35);
		$("#Stone3").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone3
		$("#yourScore").html(function(i,val) {return + val + stone3});
		});
		});
		console.log(stone3)

		var stone4 = Math.floor(Math.random()*35);
		$("#Stone4").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone4
		$("#yourScore").html(function(i,val) {return + val + stone4});
		});
		});
		console.log(stone4)

		var stone5 = Math.floor(Math.random()*35);
		$("#Stone5").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone5
		$("#yourScore").html(function(i,val) {return + val + stone5});
		});
		});
		console.log(stone5)

		var stone6 = Math.floor(Math.random()*35);
		$("#Stone6").click(function(){
		$("#yourScore").append(function() {
		yourscore += stone6
		$("#yourScore").html(function(i,val) {return + val + stone6});
		});
		});
		console.log(stone6)	

//tried to create one code for multiple stones but didnt work
// for (var i=0;i<7;i++)
// var stone[i] = Math.floor(Math.random()*35);
// $("#Stone[i]").click(function(){
// $("#yourScore").append(function() {
// yourscore += stone[i]
// $("#yourScore").html(function(i,val) {return + val + stone[i]});
// });
// });

		//this is the logic behin the win and loss situation.
	$("#Stones").click(function() {
		console.log(yourscore)

		if (yourscore > randomnumber) {
		$("#loss").html(function(i,val) {return + val + 1});//reporting back as a loss
		alert ("you Lose") 
		}

		if (yourscore === randomnumber) {
		$("#wins").html(function(i,val) {return + val + 1});//reporting back as a win
		alert ("You Win")
		}
	})

//multiple attempts to restart the game 

	// function	Gameover {
	// 	ctx.canvas.removeEventListener('alert', function(event){
	// 	canvasMouseOver(event);
	// 	})
	// ResetGlobalVariables();
	// }


	// function ResetGlobalVariables () {
	// 	var randomnumber = Math.floor(Math.random()*50);
	// 	$("#yourScore").append(0);
	// }
 

 	// clear : function() {
 	// 	randomNumber & $("#yourScore" = 0)
	//  }

	// $("#newGame").click(function(){
	// 	var rand = number[Math.floor(Math.random() * number.length)];
	// 	var randomnumber = Math.floor(Math.random()*50)
	// $("#randomNumber").append(randomnumber);
	// console.log(randomnumber);
	// // }
	// var yourscore = 0
	// 	}
