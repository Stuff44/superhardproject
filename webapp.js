// Declaring Global Variables //

var time=0;
var score=0;
var level=3;
var array=0;

// random number from 0-255 //	 

	function getRndColor(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var Random = Math.random()*20;
	var r = getRndColor(0, 255);
    var g = getRndColor(0, 255);
   	var b = getRndColor(0, 255);
	var p = "rgb(" + r + "," + g + "," + b + ")";
	var q = "rgb(" + (r+10) + "," + (g+10) + "," + (b-10) + ")";
	
// ASSIGN RANDOM COLORS AND RANDOM POSITIONS //

function assignRndPosFour()	{
	var rndFour = Math.random()*256;
	var rnd = Math.ceil(Math.random() * 16);
	for( var i = 1; i <= 16; i++ ) {
		if(i==rnd) {
			document.getElementById('cell4.' + i).style.backgroundColor = q;
			document.getElementById('cell4.' + i).addEventListener("click", changeToFive, true);
			document.getElementById('cell4.' + i).style.height = "100px";
			document.getElementById('cell4.' + i).style.width = "100px";
			document.getElementById('cell4.' + i).style.cssFloat = "left";
			document.getElementById('cell4.' + i).style.border = "3px solid black";
			document.getElementById('cell4.' + i).style.margin = "0px auto";
		}
		else	{
			document.getElementById('cell4.' + i).style.backgroundColor = p;
			document.getElementById('cell4.' + i).style.height = "100px";
			document.getElementById('cell4.' + i).style.width = "100px";
			document.getElementById('cell4.' + i).style.cssFloat = "left";
			document.getElementById('cell4.' + i).style.border = "3px solid black";
			document.getElementById('cell4.' + i).style.margin = "0px auto";
		}
	}
}
	/*
	function assignrndPosFive()	{
		var rndFive = Math.random()*625;
		if	(rndFive<25)	{
			document.getElementById('cell1').style.backgroundColor = q;
			document.getElementById('cell1').addEventListener("click", changeToSix, true); 
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=25 && rndFive<50)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = q;
			document.getElementById('cell2').addEventListener("click", changeToSix, true);
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=50 && rndFive<75)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = q;
			document.getElementById('cell3').addEventListener("click", changeToSix, true); 
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=75 && rndFive<100)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = q;
			document.getElementById('cell4').addEventListener("click", changeToSix, true); 
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=100 && rndFive<125)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = q;
			document.getElementById('cell5').addEventListener("click", changeToSix, true);
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=125 && rndFive<150)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = q;
			document.getElementById('cell6').addEventListener("click", changeToSix, true);
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=150 && rndFive<175)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = q;
			document.getElementById('cell7').addEventListener("click", changeToSix, true); 
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=175 && rndFive<200)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = q;
			document.getElementById('cell8').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=200 && rndFive<225)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = q;
			document.getElementById('cell9').addEventListener("click", changeToSix, true); 
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=225 && rndFive<250)		{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = q;
			document.getElementById('cell10').addEventListener("click", changeToSix, true); 
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=250 && rndFive<275)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = q;
			document.getElementById('cell11').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=275 && rndFive<300)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = q;
			document.getElementById('cell12').addEventListener("click", changeToSix, true); 
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=300 && rndFive<325)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = q;
			document.getElementById('cell13').addEventListener("click", changeToSix, true); 
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=325 && rndFive<350)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = q;
			document.getElementById('cell14').addEventListener("click", changeToSix, true); 
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=350 && rndFive<375)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = q;
			document.getElementById('cell15').addEventListener("click", changeToSix, true); 
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=375 && rndFive<400)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = q;
			document.getElementById('cell16').addEventListener("click", changeToSix, true);
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=400 && rndFive<425)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = q;
			document.getElementById('cell17').addEventListener("click", changeToSix, true);
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=425 && rndFive<450)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = q;
			document.getElementById('cell18').addEventListener("click", changeToSix, true);
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=450 && rndFive<475)		{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = q;
			document.getElementById('cell19').addEventListener("click", changeToSix, true);
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=475 && rndFive<500)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = q;
			document.getElementById('cell20').addEventListener("click", changeToSix, true);
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;		
		}
		if (rndFive>=500 && rndFive<525)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = q;
			document.getElementById('cell21').addEventListener("click", changeToSix, true);
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=525 && rndFive<550)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = q;
			document.getElementById('cell22').addEventListener("click", changeToSix, true);
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=550 && rndFive<575)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = q;
			document.getElementById('cell23').addEventListener("click", changeToSix, true);
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=575 && rndFive<600)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = q;
			document.getElementById('cell24').addEventListener("click", changeToSix, true);
			document.getElementById('cell25').style.backgroundColor = p;
		}
		if (rndFive>=600 && rndFive<625)	{
			document.getElementById('cell1').style.backgroundColor = p;
			document.getElementById('cell2').style.backgroundColor = p;
  		    document.getElementById('cell3').style.backgroundColor = p;
			document.getElementById('cell4').style.backgroundColor = p;
			document.getElementById('cell5').style.backgroundColor = p;
   			document.getElementById('cell6').style.backgroundColor = p;
			document.getElementById('cell7').style.backgroundColor = p;
			document.getElementById('cell8').style.backgroundColor = p;
    		document.getElementById('cell9').style.backgroundColor = p;
			document.getElementById('cell10').style.backgroundColor = p;
			document.getElementById('cell11').style.backgroundColor = p;
    		document.getElementById('cell12').style.backgroundColor = p;
			document.getElementById('cell13').style.backgroundColor = p;
			document.getElementById('cell14').style.backgroundColor = p;
    		document.getElementById('cell15').style.backgroundColor = p;
			document.getElementById('cell16').style.backgroundColor = p;
			document.getElementById('cell17').style.backgroundColor = p;
			document.getElementById('cell18').style.backgroundColor = p;
    		document.getElementById('cell19').style.backgroundColor = p;
			document.getElementById('cell20').style.backgroundColor = p;
			document.getElementById('cell21').style.backgroundColor = p;
    		document.getElementById('cell22').style.backgroundColor = p;
			document.getElementById('cell23').style.backgroundColor = p;
    		document.getElementById('cell24').style.backgroundColor = p;
			document.getElementById('cell25').style.backgroundColor = q;
			document.getElementById('cell25').addEventListener("click", changeToSix, true);
		}
	}
	*/
function beginGame()	{
	"use strict";
	//	HIDE FRONT PAGE ELEMENTS //
	
	document.getElementById('animation').style.visibility = "hidden";
	document.getElementById('animation2').style.visibility = "hidden";
	document.getElementById('text').style.visibility = "hidden";
	document.getElementById('four').style.display = "block";
	
	// ASSIGN A RANDOM COLOR POSITION //
	
	assignRndPosFour();
}

// TRANSFER FUNCTIONS //

function changeToFive() {
	"use strict";
	location.reload();
}
/*
function changeToSix()	{
	document.getElementById('five').style.display = "none";
}


*/



/*

thoughts: assign random color to grid of buttons

replace one button in a different position with math.random

make sure that different button has all the same properties except onClick and color

have a level var that keeps going up to 20 and increases the grid

*/