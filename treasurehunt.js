

var winner = Math.floor(Math.random() * 8)
var loser = Math.floor(Math.random() * 8)

const treasure = (id) => {
	
	console.log("win" + winner);
	console.log("lose"+ loser);
    
    
    if (winner === loser){
     loser = Math.floor(Math.random());
}
else if (id === winner){
    document.getElementById(id).innerHTML = "x";
    alert("You won");
}else if (id === loser){
    document.getElementById(id).innerHTML = "You lose";

}

else {
	document.getElementById(id).innerHTML = "Try again";
}
}


