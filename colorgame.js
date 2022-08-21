var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var pickedcolor = pickColor();
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("select");
var display = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click", function(){
      easybtn.classList.add("selected");
      hardbtn.classList.remove("selected");
      numsquares=3;
      colors = generaterandomcolors(numsquares);
      pickedcolor = pickColor();
      colordisplay.textContent = pickedcolor;
      for(var i =0; i<squares.length; i++){
      	if(colors[i]){
      		squares[i].style.backgroundColor = colors[i];
      	}else{
      		squares[i].style.display = "none";
      	}
      }
});

hardbtn.addEventListener("click", function(){
      easybtn.classList.remove("selected");
      hardbtn.classList.add("selected");
      numsquares = 6;
      colors = generaterandomcolors(numsquares);
      pickedcolor = pickColor();
      colordisplay.textContent = pickedcolor;
      for(var i =0; i<squares.length; i++){
      		    squares[i].style.backgroundColor = colors[i];
         		squares[i].style.display = "block";
      }
});

reset.addEventListener("click", function(){
  colors = generaterandomcolors(numsquares);
  pickedcolor = pickColor();
  colordisplay.textContent = pickColor();
  this.textContent = "NEW COLORS"
  display.textContent="";
  for(var i = 0; i <squares.length ; i++){
  	squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colordisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//adding function
	squares[i].addEventListener("click", function(){
       var clickedcolor = this.style.backgroundColor;
       //adding if statement
       if(clickedcolor === pickedcolor){
       	display.textContent = "Correct!";
       	reset.textContent = "Play Again?";
       	changeColors(clickedcolor);
       	h1.style.backgroundColor = clickedcolor;
       }else{
       	this.style.backgroundColor = "#232323";
       	display.textContent = "Try Again"
       }
	});
	}

	function changeColors(colors){
		//looping through all squares
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length)
		return colors[random];
	}
	function generaterandomcolors(num){
	    var arr = []
	    //loop through
	    for(var i=0; i<num; i++){
           arr.push(randomcolor());
	    }
	    return arr;
	}

	function randomcolor(){
		//pick random red color
		var r = Math.floor(Math.random() * 256);
		//pick random green color
		var g = Math.floor(Math.random() * 256);
		//pick random blue color
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";		
	}