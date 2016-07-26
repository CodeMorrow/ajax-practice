window.addEventListener("load", function(){

	var submit = document.getElementById("submit");

	submit.addEventListener("click", function(){ß

		var hello = new XMLHttpRequest();
		var crickets = new XMLHttpRequest();
		var params = "answer=" + document.getElementByClassName("answer").value;

			if(params === "answer=yes"){
				hello.addEventListener("load", function(greeting){
					document.getElementById("greeting").innerHTML=(greeting.target.responseText);
				});

			}else {
				crickets.addEventListener("load", function(no_greeting){
					document.getElementById("greeting").innerHTML=(no_greeting.target.responseText);
				});
			}

		hello.open("GET", "answer")
		hello.send(params);

		crickets.open("GET", "no_answer")
		crickets.send(params);
	});
	
});

