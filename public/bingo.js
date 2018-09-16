var squares = document.querySelectorAll("td");
var topDiv = document.querySelector("#top");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var showQ = document.querySelector("#showq");
var b1 = document.querySelector("#tim1");
var b2 = document.querySelector("#tim2");
var b3 = document.querySelector("#tim3");
var questions = [
{ tipe: "quiz", pertanyaan: "How many official islands are there in Indonesia?"},
{ tipe: "challenge", pertanyaan: "RUBBER GAME"},
{ tipe: "cc", pertanyaan: "CHANCE CARD"},
{ tipe: "quiz", pertanyaan: "How far is Frankfurt to Jakarta? (in KM)"},
{ tipe: "challenge", pertanyaan: "EATING-CRACKERS GAME"},
{ tipe: "cc", pertanyaan: "CHANCE CARD"},
{ tipe: "quiz", pertanyaan: "The number of Province in Indonesia is...?"},
{ tipe: "cc", pertanyaan: "CHANCE CARD"},
{ tipe: "quiz", pertanyaan: "How many native languages are there in Indonesia?"},
{ tipe: "quiz", pertanyaan: "The current population in Indonesia is...?"},
{ tipe: "challenge", pertanyaan: "PULPEN-BOTOL GAME"},
{ tipe: "quiz", pertanyaan: "What is the biggest island in Indonesia?"},
{ tipe: "challenge", pertanyaan: "BEKEL GAME"},
{ tipe: "cc", pertanyaan: "CHANCE CARD"},
{ tipe: "quiz", pertanyaan: "When is Indonesian independence day?"},
{ tipe: "challenge", pertanyaan: "GUNDU GAME"}
];
var winAlert = "SOMEONE HAS WON! Refresh the page to restart the Bingo-Game!"
var teamTxt = "Team "
var menang = "WINNER!";
var teamColors = [ "", "#28a745", "#dc3545", "#ffc107"];
var showQuestion = true;
var player = 0;
var win = false;

var header2 = "";
var header1 = "";

var choose = [];
for( var i = 0; i<16; i++ ){
	choose.push(0);
}

/*Check Function*/
function check(){
	if( squares[0].textContent !== "" && squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent && squares[2].textContent === squares[3].textContent ||
		squares[4].textContent !== "" && squares[4].textContent === squares[5].textContent && squares[5].textContent === squares[6].textContent && squares[6].textContent === squares[7].textContent ||
		squares[8].textContent !== "" && squares[8].textContent === squares[9].textContent && squares[9].textContent === squares[10].textContent && squares[10].textContent === squares[11].textContent ||
		squares[12].textContent !== "" && squares[12].textContent === squares[13].textContent && squares[13].textContent === squares[14].textContent && squares[14].textContent === squares[15].textContent ||
		squares[0].textContent !== "" && squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent && squares[8].textContent === squares[12].textContent ||
		squares[1].textContent !== "" && squares[1].textContent === squares[5].textContent && squares[5].textContent === squares[9].textContent && squares[9].textContent === squares[13].textContent ||
		squares[2].textContent !== "" && squares[2].textContent === squares[6].textContent && squares[6].textContent === squares[10].textContent && squares[10].textContent === squares[14].textContent ||
		squares[3].textContent !== "" && squares[3].textContent === squares[7].textContent && squares[7].textContent === squares[11].textContent && squares[11].textContent === squares[15].textContent ||
		squares[0].textContent !== "" && squares[0].textContent === squares[5].textContent && squares[5].textContent === squares[10].textContent && squares[10].textContent === squares[15].textContent ||
		squares[3].textContent !== "" && squares[3].textContent === squares[6].textContent && squares[6].textContent === squares[9].textContent && squares[9].textContent === squares[12].textContent ){
		return true;
	}
	return false;
}

/*SquaresListener*/
squares[0].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[0] == 0){
			h2.textContent = questions[0].tipe;	
			h1.textContent = questions[0].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[0] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[0] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[1].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[1] == 0){
			h2.textContent = questions[1].tipe;	
			h1.textContent = questions[1].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[1] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[1] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[2].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[2] == 0){
			h2.textContent = questions[2].tipe;	
			h1.textContent = questions[2].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[2] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[2] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[3].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[3] == 0){
			h2.textContent = questions[3].tipe;	
			h1.textContent = questions[3].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[3] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[3] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[4].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[4] == 0){
			h2.textContent = questions[4].tipe;	
			h1.textContent = questions[4].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[4] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[4] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[5].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[5] == 0){
			h2.textContent = questions[5].tipe;	
			h1.textContent = questions[5].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[5] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[5] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[6].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[6] == 0){
			h2.textContent = questions[6].tipe;	
			h1.textContent = questions[6].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[6] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[6] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[7].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[7] == 0){
			h2.textContent = questions[7].tipe;	
			h1.textContent = questions[7].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[7] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[7] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[8].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[8] == 0){
			h2.textContent = questions[8].tipe;	
			h1.textContent = questions[8].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[8] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[8] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[9].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[9] == 0){
			h2.textContent = questions[9].tipe;	
			h1.textContent = questions[9].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[9] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[9] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[10].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[10] == 0){
			h2.textContent = questions[10].tipe;	
			h1.textContent = questions[10].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[10] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[10] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[11].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[11] == 0){
			h2.textContent = questions[11].tipe;	
			h1.textContent = questions[11].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[11] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[11] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[12].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[12] == 0){
			h2.textContent = questions[12].tipe;	
			h1.textContent = questions[12].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[12] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[12] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[13].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[13] == 0){
			h2.textContent = questions[13].tipe;	
			h1.textContent = questions[13].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[13] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[13] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[14].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[14] == 0){
			h2.textContent = questions[14].tipe;	
			h1.textContent = questions[14].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[14] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[14] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

squares[15].addEventListener("click", function(){
	if ( showQuestion ){
		if(choose[15] == 0){
			h2.textContent = questions[15].tipe;	
			h1.textContent = questions[15].pertanyaan;
			switch (h2.textContent){
				case "quiz":
				h2.style.color = "#28a745";
				break;
				case "challenge":
				h2.style.color = "#dc3545";
				break;
				case "cc":
				h2.style.color = "#ffc107";
				break;
			}
			this.classList.add("selected-question");
			choose[15] = 1;	
		} else {
			h2.textContent = header2;	
			h1.textContent = header1;
			h2.style.color = "purple";
			this.classList.remove("selected-question");
			choose[15] = 0;
		}
	} else{
		if(check()){
			alert(winAlert);
		} else{
			this.textContent = teamTxt + player;
			this.style.backgroundColor = teamColors[player];
			this.classList.remove("selected-question");
			autoShowQ();
			if(check()){
				h2.textContent = menang
				h1.textContent = teamTxt + player;
				topDiv.style.backgroundColor = teamColors[player];
				h2.style.color = "black";
			}
		}
	}
});

/*Function for showing Question button*/
function autoShowQ(){
	showQuestion = true;
	showQ.classList.add("selected-showq");
	showQ.classList.remove("disable-showq");
	b1.classList.remove("selected-team1");
	b2.classList.remove("selected-team2");
	b3.classList.remove("selected-team3");
	b1.classList.add("disable-tim1");
	b2.classList.add("disable-tim2");
	b3.classList.add("disable-tim3");
}

/*EventListener for ShowQuestion*/
showQ.addEventListener("click", autoShowQ);

/*EventListener for Team1*/
b1.addEventListener("click", function(){
	showQuestion = false;
	player = 1;
	this.classList.add("selected-team1");
	showQ.classList.remove("selected-showq");
	b2.classList.remove("selected-team2");
	b3.classList.remove("selected-team3");
	b1.classList.remove("disable-tim1");
	b2.classList.add("disable-tim2");
	b3.classList.add("disable-tim3");
	showQ.classList.add("disable-showq");
});

/*EventListener for Team2*/
b2.addEventListener("click", function(){
	showQuestion = false;
	player = 2;
	this.classList.add("selected-team2");
	showQ.classList.remove("selected-showq");
	b1.classList.remove("selected-team1");
	b3.classList.remove("selected-team3");
	b1.classList.add("disable-tim1");
	b2.classList.remove("disable-tim2");
	b3.classList.add("disable-tim3");
	showQ.classList.add("disable-showq");
});

/*EventListener for Team3*/
b3.addEventListener("click", function(){
	showQuestion = false;
	player = 3;
	this.classList.add("selected-team3");
	showQ.classList.remove("selected-showq");
	b1.classList.remove("selected-team1");
	b2.classList.remove("selected-team2");
	b1.classList.add("disable-tim1");
	b2.classList.add("disable-tim2");
	b3.classList.remove("disable-tim3");
	showQ.classList.add("disable-showq");
});


/*Mouse Hover Effect*/
/*for(var i = 0; i<squares.length; i++){
	squares[i].addEventListener("mouseover", function(){
		if(showQuestion){
			this.style.backgroundColor = "#007bff";	
		} else {
			if( player === 1 ){
				this.style.backgroundColor = "#28a745";
			}
			if( player === 2 ){
				this.style.backgroundColor = "#dc3545";
			}
			if( player === 3 ){
				this.style.backgroundColor = "#ffc107";
			}
		}
	});
	squares[i].addEventListener("mouseout", function(){
		if( this.classList.length == 0){
			this.style.backgroundColor = "white";

		}
	});	
}*/
