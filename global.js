window.addEventListener("load", function(){

	var update_quiz = new XMLHttpRequest();
		update_quiz.open("GET", "quiz_data");
		update_quiz.send();

	var start = document.getElementById("start");
	var questions = [document.getElementById("quiz1"), document.getElementById("quiz2"), document.getElementById("quiz3")];
	var welcome = document.getElementById("welcome");
	var next = [document.getElementById("next1"), document.getElementById("next2"), document.getElementById("next3")];
	var submit = [document.getElementById("submit1"), document.getElementById("submit2"), document.getElementById("submit3")];

	update_quiz.addEventListener("load", function(e){
	
		var quiz_data = JSON.parse(e.target.response);
debugger;

	start.addEventListener("click", function(){

		welcome.style.display = "none";
		start.style.display = "none";
		questions[0].style.display = "inline";
		document.getElementById("question1").innerHTML=(quiz_data.questions.question1);

	});
debugger;
});
	submit[0].addEventListener("click", function(){
		var check_answer = new XMLHttpRequest();
		var answer = document.getElementById("answer1").value;

			check_answer.addEventListener("load", function(e){
				document.getElementById("result1").innerHTML=(quiz_data.answers[0]);
				});
		check_answer.open("get", "quiz_data");
		check_answer.send();
	});
	
});