window.addEventListener("load", function(){

	var submit = document.getElementById("submit");

	submit.addEventListener("click", function(){

		var check_answer = new XMLHttpRequest();
		var answer = document.getElementById("answer").value;

			check_answer.addEventListener("load", function(result){
					document.getElementById("result").innerHTML=(result.target.responseText);
				});

		check_answer.open("get", "check_answer.php")
		check_answer.send(answer);

	});
	
});

