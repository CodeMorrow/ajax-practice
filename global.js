window.addEventListener("load", function(){

	var update_quiz = new XMLHttpRequest();

	var start = document.getElementById("start");
	var quiz1 = document.getElementById("quiz1");
	var quiz2 = document.getElementById("quiz2");
	var quiz3 = document.getElementById("quiz3");
	var welcome = document.getElementById("welcome");
	var next1 = document.getElementById("next1");
	var next2 = document.getElementById("next2");
	var next3 = document.getElementById("next3");
	var submit1 = document.getElementById("submit1");
	var submit2 = document.getElementById("submit2");
	var submit3 = document.getElementById("submit3");
	var result1 = document.getElementById("result1")
	var result2 = document.getElementById("result2");
	var result3 = document.getElementById("result3");
	var question1 = document.getElementById("question1");
	var question2 = document.getElementById("question2");
	var question3 = document.getElementById("question3");
	var finalResult = document.getElementById("finalResult");
	// var answer = [(document.getElementById("answer1").value), (document.getElementById("answer2").value), (document.getElementById("answer3").value)];

	update_quiz.addEventListener("load", function(e){
	
		var quiz_data = JSON.parse(e.target.response);

		start.addEventListener("click", function(){

			welcome.style.display = "none";
			start.style.display = "none";
			quiz1.style.display = "inline";
			question1.innerHTML=(quiz_data.questions.question1);

		});

	

		submit1.addEventListener("click", function(){

			next1.style.display = "inline";
			result1.style.display = "inline";
			submit1.style.display ="none";
				

			if (document.getElementById("answer1").value == quiz_data.answers.answer1){
				result1.innerHTML="Correct!";
			} else {
				result1.innerHTML="Incorrect";
			}
			

		});

		next1.addEventListener("click", function(){

			quiz1.style.display = "none";
			quiz2.style.display = "inline";
			question2.innerHTML=(quiz_data.questions.question2);

		});

		submit2.addEventListener("click", function(){

			next2.style.display = "inline";
			result2.style.display = "inline";
			submit2.style.display ="none";
				

			if (document.getElementById("answer2").value == quiz_data.answers.answer2){
				result2.innerHTML="Correct!";
			} else {
				result2.innerHTML="Incorrect";
			}
			

		});

		next2.addEventListener("click", function(){

			quiz2.style.display = "none";
			quiz3.style.display = "inline";
			question3.innerHTML=(quiz_data.questions.question3);

		});

		submit3.addEventListener("click", function(){

			next3.style.display = "inline";
			result3.style.display = "inline";
			submit3.style.display ="none";
				

			if (document.getElementById("answer3").value == quiz_data.answers.answer3){
				result3.innerHTML="Correct!";
			} else {
				result3.innerHTML="Incorrect";
			}
			

		});

		next3.addEventListener("click", function(){

			next3.style.display = "none";
			result3.style.display = "none";
			quiz3.style.display = "none";
			finalResult.style.display ="inline";
			
			if (document.getElementById("answer3").value == quiz_data.answers.answer3 && document.getElementById("answer2").value == quiz_data.answers.answer2 && document.getElementById("answer1").value == quiz_data.answers.answer1){
				finalResult.innerHTML="You got 100% correct!";
			} else if (document.getElementById("answer3").value != quiz_data.answers.answer3 && document.getElementById("answer2").value == quiz_data.answers.answer2 && document.getElementById("answer1").value == quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 2/3 Correct. You missed Question 3. The Correct answer was 18.";
			} else if (document.getElementById("answer3").value == quiz_data.answers.answer3 && document.getElementById("answer2").value != quiz_data.answers.answer2 && document.getElementById("answer1").value == quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 2/3 Correct. You missed Question 2. The Correct answer was 81.";
			} else if (document.getElementById("answer3").value == quiz_data.answers.answer3 && document.getElementById("answer2").value == quiz_data.answers.answer2 && document.getElementById("answer1").value != quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 2/3 Correct. You missed Question 1. The Correct answer was 6.";
			} else if (document.getElementById("answer3").value != quiz_data.answers.answer3 && document.getElementById("answer2").value != quiz_data.answers.answer2 && document.getElementById("answer1").value == quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 1/3 Correct. You missed Question 2 and 3. The Correct answers were 81 and 18.";
			} else if (document.getElementById("answer3").value == quiz_data.answers.answer3 && document.getElementById("answer2").value != quiz_data.answers.answer2 && document.getElementById("answer1").value != quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 1/3 Correct. You missed Question 1 and 2. The Correct answers were 6 and 81.";
			} else if (document.getElementById("answer3").value != quiz_data.answers.answer3 && document.getElementById("answer2").value == quiz_data.answers.answer2 && document.getElementById("answer1").value != quiz_data.answers.answer1) {
				finalResult.innerHTML="You got 1/3 Correct. You missed Question 1 and 3. The Correct answers were 6 and 18.";
			} else {
				finalResult.innerHTML="You missed all three questions."
			}

		});

	});
	update_quiz.open("GET", "quiz_data");
	update_quiz.send();

});