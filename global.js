window.addEventListener("load", function(){

	var start = document.getElementById("start");
	var questions = [document.getElementById("quiz1"), document.getElementById("quiz2"), document.getElementById("quiz3")];
	var welcome = document.getElementById("welcome");
	var next = [document.getElementById("next1"), document.getElementById("next2"), document.getElementById("next3")];
	var submit = [document.getElementById("submit1"), document.getElementById("submit2"), document.getElementById("submit3")];
	// var answers = JSON.parse(?.target.response);

	start.addEventListener("click", function(){
		welcome.style.display = "none";
		start.style.display = "none";
		questions[0].style.display = "inline";

	});

	
	submit[0].addEventListener("click", function(){
		var check_answer = new XMLHttpRequest();
		var answer = document.getElementById("answer1").value;

			check_answer.addEventListener("load", function(e){
				document.getElementById("result1").innerHTML=(e.target.responseText);
				});
		check_answer.open("get", "quiz_data.txt");
		check_answer.send();
	});
	

// 	submit.addEventListener("click", function(){

// 		var check_answer = new XMLHttpRequest();
// 		var answer = document.getElementById("answer").value;

// 			check_answer.addEventListener("load", function(result){
// 				document.getElementById("result").innerHTML=(result.target.responseText);
// 				});

		// check_answer.open("get", "check_answer.php?answer=" + answer);
		// check_answer.send();

// 	});
	
});

