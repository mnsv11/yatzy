 /**
 * Place your JS-code here.
 */
$(document).ready(function () {
    'use strict';
    var step, target, target1, target2, target3, target4, target5, text, plats = 'ettor',
        area, sum, check1, check2, check3, check4, check5, check6, nrOfThrow = 0,
        player = 1, round = 1, dice1Sum = 0, dice2Sum = 0, dice3Sum = 0, dice4Sum = 0, dice5Sum = 0, dice6Sum = 0, upperSumP1 = 0, upperSumP2 = 0,
        oneS1, oneS2, twoS1, twoS2, threeS1, threeS2, fourS1, fourS2, fiveS1, fiveS2, sixS1, sixS2, sumS1, sumS2,
        bonS1, bonS2, parS1, parS2, twoparS1, twoparS2, tretalS1, tretalS2, fyrtalS1, fyrtalS2, smallS1, smallS2,
        bigS1, bigS2, houseS1, houseS2, chansS1, chansS2, yatzyS1, yatzyS2, totsumS1, totsumS2;

    text = document.getElementById('text');
    target1 = document.getElementById('d1');
    target2 = document.getElementById('d2');
    target3 = document.getElementById('d3');
    target4 = document.getElementById('d4');
    target5 = document.getElementById('d5');
    area = document.getElementById('flash');
    oneS1 = document.getElementById('oneS1');
    oneS2 = document.getElementById('oneS2');
    twoS1 = document.getElementById('twoS1');
    twoS2 = document.getElementById('twoS2');
    threeS1 = document.getElementById('threeS1');
    threeS2 = document.getElementById('threeS2');
    fourS1 = document.getElementById('fourS1');
    fourS2 = document.getElementById('fourS2');
    fiveS1 = document.getElementById('fiveS1');
    fiveS2 = document.getElementById('fiveS2');
    sixS1 = document.getElementById('sixS1');
    sixS2 = document.getElementById('sixS2');
    sumS1 = document.getElementById('sumS1');
    sumS2 = document.getElementById('sumS2');
    bonS1 = document.getElementById('bonS1');
    bonS2 = document.getElementById('bonS2');
    parS1 = document.getElementById('parS1');
    parS2 = document.getElementById('parS2');
    twoparS1 = document.getElementById('twoparS1');
    twoparS2 = document.getElementById('twoparS2');
    tretalS1 = document.getElementById('tretalS1');
    tretalS2 = document.getElementById('tretalS2');
    fyrtalS1 = document.getElementById('fyrtalS1');
    fyrtalS2 = document.getElementById('fyrtalS2');
    smallS1 = document.getElementById('smallS1');
    smallS2 = document.getElementById('smallS2');
    bigS1 = document.getElementById('bigS1');
    bigS2 = document.getElementById('bigS2');
    houseS1 = document.getElementById('houseS1');
    houseS2 = document.getElementById('houseS2');
    chansS1 = document.getElementById('chansS1');
    chansS2 = document.getElementById('chansS2');
    yatzyS1 = document.getElementById('yatzyS1');
    yatzyS2 = document.getElementById('yatzyS2');
    totsumS1 = document.getElementById('totsumS1');
    totsumS2 = document.getElementById('totsumS2');
    
  
  d1.onclick = function(){
  	  var checking = document.getElementById("checkbox1").checked
  	  
  	  if(checking === false){
  	  	document.getElementById("checkbox1").checked = true;
  	  	checking = true;
  	  }
  	  else if(checking === true){
  	  	  document.getElementById("checkbox1").checked = false;
  	  	  checking = false;
  	  }
  	  
  }
  d2.onclick = function(){
  	  var checking = document.getElementById("checkbox2").checked
  	  
  	  if(checking === false){
  	  	document.getElementById("checkbox2").checked = true;
  	  	checking = true;
  	  }
  	  else if(checking === true){
  	  	  document.getElementById("checkbox2").checked = false;
  	  	  checking = false;
  	  }
  	  
  }  
  d3.onclick = function(){
  	  var checking = document.getElementById("checkbox3").checked
  	  
  	  if(checking === false){
  	  	document.getElementById("checkbox3").checked = true;
  	  	checking = true;
  	  }
  	  else if(checking === true){
  	  	  document.getElementById("checkbox3").checked = false;
  	  	  checking = false;
  	  }
  	  
  }  
  d4.onclick = function(){
  	  var checking = document.getElementById("checkbox4").checked
  	  
  	  if(checking === false){
  	  	document.getElementById("checkbox4").checked = true;
  	  	checking = true;
  	  }
  	  else if(checking === true){
  	  	  document.getElementById("checkbox4").checked = false;
  	  	  checking = false;
  	  }
  
  }  
  d5.onclick = function(){
  	  var checking = document.getElementById("checkbox5").checked
  	  
  	  if(checking === false){
  	  	document.getElementById("checkbox5").checked = true;
  	  	checking = true;
  	  }
  	  else if(checking === true){
  	  	  document.getElementById("checkbox5").checked = false;
  	  	  checking = false;
  	  }
  
  }

  
  function setDice(summa) {
    	    
 
  		    if (summa === 1) {
		          target.className = 'dice one';
		      }
		    if (summa === 2) {
			  target.className = 'dice two';
		      }
		    if (summa === 3) {
			  target.className = 'dice three';
		      }
		    if (summa === 4) {
			  target.className = 'dice four';
		      }
		    if (summa === 5) {
			  target.className = 'dice five';
		      }
		    if (summa === 6) {
			  target.className = 'dice six';
		      }
		
		      //console.log('summa ' + sum);		 
  	  
  }
  
  function rollDice(){
    check1 = document.getElementById("checkbox1").checked;
    check2 = document.getElementById("checkbox2").checked;
    check3 = document.getElementById("checkbox3").checked;
    check4 = document.getElementById("checkbox4").checked;
    check5 = document.getElementById("checkbox5").checked;
  	  
    if(check1 === false || nrOfThrow < 1){
  	  var summa = random(1,7)
  	 	    if (summa === 1) {
		          target1.className = 'dice one';
		      }
		    if (summa === 2) {
			  target1.className = 'dice two';
		      }
		    if (summa === 3) {
			  target1.className = 'dice three';
		      }
		    if (summa === 4) {
			  target1.className = 'dice four';
		      }
		    if (summa === 5) {
			  target1.className = 'dice five';
		      }
		    if (summa === 6) {
			  target1.className = 'dice six';
		      }
    }
    if(check2 === false || nrOfThrow < 1){
  	   summa = random(1,7)
  	 	    if (summa === 1) {
		          target2.className = 'dice one';
		      }
		    if (summa === 2) {
			  target2.className = 'dice two';
		      }
		    if (summa === 3) {
			  target2.className = 'dice three';
		      }
		    if (summa === 4) {
			  target2.className = 'dice four';
		      }
		    if (summa === 5) {
			  target2.className = 'dice five';
		      }
		    if (summa === 6) {
			  target2.className = 'dice six';
		      }
    }
    if(check3 === false || nrOfThrow < 1){
	   summa = random(1,7)
  	 	    if (summa === 1) {
		          target3.className = 'dice one';
		      }
		    if (summa === 2) {
			  target3.className = 'dice two';
		      }
		    if (summa === 3) {
			  target3.className = 'dice three';
		      }
		    if (summa === 4) {
			  target3.className = 'dice four';
		      }
		    if (summa === 5) {
			  target3.className = 'dice five';
		      }
		    if (summa === 6) {
			  target3.className = 'dice six';
		      }
    }
    if(check4 === false || nrOfThrow < 1){
	    summa = random(1,7)
  	 	    if (summa === 1) {
		          target4.className = 'dice one';
		      }
		    if (summa === 2) {
			  target4.className = 'dice two';
		      }
		    if (summa === 3) {
			  target4.className = 'dice three';
		      }
		    if (summa === 4) {
			  target4.className = 'dice four';
		      }
		    if (summa === 5) {
			  target4.className = 'dice five';
		      }
		    if (summa === 6) {
			  target4.className = 'dice six';
		      }
    }
    if(check5 === false || nrOfThrow < 1){
             summa = random(1,7)
  	 	    if (summa === 1) {
		          target5.className = 'dice one';
		      }
		    if (summa === 2) {
			  target5.className = 'dice two';
		      }
		    if (summa === 3) {
			  target5.className = 'dice three';
		      }
		    if (summa === 4) {
			  target5.className = 'dice four';
		      }
		    if (summa === 5) {
			  target5.className = 'dice five';
		      }
		    if (summa === 6) {
			  target5.className = 'dice six';
		      }
    }

  }
  
  var end;
  roll.onclick = function(){
  	  
  	end = setInterval(function(){rollDice()},100);
  	
  	setTimeout(function(){throwing()},2000);
  }
  
  
  function throwing() {
  	  
  	  clearInterval(end)
  	  
    check1 = document.getElementById("checkbox1").checked;
    check2 = document.getElementById("checkbox2").checked;
    check3 = document.getElementById("checkbox3").checked;
    check4 = document.getElementById("checkbox4").checked;
    check5 = document.getElementById("checkbox5").checked;

		  
  	  var count = 1;
  	  /**slår alla 5 tärningarna, sätter alltid värde på target första rundan,
  	     sedan beror det på om någon checkbox är i klickad eller inte*/
  	  while(count < 6){
  	  	  
  	  	 sum = random(1,7);
  	  	
  	  	  if(count === 1){
  	  	  	  if(check1 === false || nrOfThrow < 1){
  	  	  	  	  target = target1;
  	  	  	  	  dice1Sum = sum;
  	  	  	  }
  	  	  }
  	  	  if(count === 2){
  	  	  	  if(check2 === false || nrOfThrow < 1){
  	  	  	  	  target = target2;
  	  	  	  	  dice2Sum = sum;
  	  	  	  }
  	  	  }
  	  	  if(count === 3){
  	  	  	  if(check3 === false || nrOfThrow < 1){
  	  	  	  	  target = target3;
  	  	  	  	  dice3Sum = sum;
  	  	  	  }
  	  	  }
  	  	  if(count === 4){
  	  	  	  if(check4 === false || nrOfThrow < 1){
  	  	  	  	  target = target4;
  	  	  	  	  dice4Sum = sum;
  	  	  	  }
  	  	  }
  	  	  if(count === 5){
  	  	  	  if(check5 === false || nrOfThrow < 1){
  	  	  	  	  target = target5;
  	  	  	  	  dice5Sum = sum;
  	  	  	  }
  	  	  }


  	  	 
  	  	  
  	  if(target != "")//om target inte är tom så uppdateras tärningen.
  	  {
  	  	  
  	  	
		  setDice(sum);

  	  
  	  }
  	  target = "";
  	  count++;
  	  
}
  	  
    

	if(nrOfThrow === 2){
		var checkSum = 0;
		/**round håller reda på vilken runda det är och kollar om man har 
		   rätt nummer på tärningarna och räknar ihop summan, sedan skrivs 
		   det ut på spelplanen.*/
		   
		   //för att kolla en specfik funktion
		  // round = 17;
		   
		if(round === 1){//runda 1
			checkSum = checkValue(1,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				oneS1.innerHTML = checkSum;
			}
			if(player === 2){
				oneS2.innerHTML = checkSum;
				plats = 'tvåor';
			}
		}
		else if(round === 2){//runda 2
			checkSum = checkValue(2,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				twoS1.innerHTML = checkSum;
			}
			if(player === 2){
				twoS2.innerHTML = checkSum;
				plats = 'treor';
			}
		}
		else if(round === 3){//runda 3
			checkSum = checkValue(3,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				threeS1.innerHTML = checkSum;
			}
			if(player === 2){
				threeS2.innerHTML = checkSum;
				plats = 'fyror';
			}
		}
		else if(round === 4){//runda 4
			checkSum = checkValue(4,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				fourS1.innerHTML = checkSum;
			}
			if(player === 2){
				fourS2.innerHTML = checkSum;
				plats = 'femmor';
			}
		}
		else if(round === 5){//runda 5
			checkSum = checkValue(5,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				fiveS1.innerHTML = checkSum;
			}
			if(player === 2){
				fiveS2.innerHTML = checkSum;
				plats = 'sexor';
			}
		}
		else if(round === 6){//runda 6,7,8, skriver summan på övre delen samt kollar om spelaren får bonus
			checkSum = checkValue(6,dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				sixS1.innerHTML = checkSum;
			}
			if(player === 2){
				sixS2.innerHTML = checkSum;
				round = round +2;
				sumS1.innerHTML = upperSumP1;
				sumS2.innerHTML = upperSumP2;
				if(upperSumP1 > 63){//kollar om bonus 
					bonS1.innerHTML = 50;
					upperSumP1 = upperSumP1 + 50;
				}
				if(upperSumP2 > 63){//kollar om bonus
					bonS2.innerHTML = 50;
					upperSumP2 = upperSumP2 + 50;
				}
				plats = 'ett par';
			}
		}
		else if(round === 9){//runda 9 ett par
			checkSum = checkPair(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				parS1.innerHTML = checkSum;
			}
			if(player === 2){
				parS2.innerHTML = checkSum;
				plats = 'två par';
			}
		}
		else if(round === 10){//runda 10 två par
			checkSum = checkTwoPair(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				twoparS1.innerHTML = checkSum;
			}
			if(player === 2){
				twoparS2.innerHTML = checkSum;
				plats = 'triss';
			}
		}
		else if(round === 11){//runda 11 triss
			checkSum = checkTriss(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				tretalS1.innerHTML = checkSum;
			}
			if(player === 2){
				tretalS2.innerHTML = checkSum;
				plats = 'fyrtal';
			}
		}
		else if(round === 12){//runda 12 Fyrtal
			checkSum = checkFyrtal(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				fyrtalS1.innerHTML = checkSum;
			}
			if(player === 2){
				fyrtalS2.innerHTML = checkSum;
				plats = 'Liten stege';
			}
		}
		else if(round === 13){//runda 13 Liten stage
			checkSum = checkSmall(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				smallS1.innerHTML = checkSum;
			}
			if(player === 2){
				smallS2.innerHTML = checkSum;
				plats = 'Stor stege';
			}
		}
		else if(round === 14){//runda 14 stor stege
			checkSum = checkBig(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				bigS1.innerHTML = checkSum;
			}
			if(player === 2){
				bigS2.innerHTML = checkSum;
				plats = 'Kåk';
			}
		}
		else if(round === 15){//runda 15 kåk
			checkSum = checkHouse(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				houseS1.innerHTML = checkSum;
			}
			if(player === 2){
				houseS2.innerHTML = checkSum;
				plats = 'Chans';
			}
		}
		else if(round === 16){//runda 16 chans
			if(player === 1){
				chansS1.innerHTML = dice1Sum + dice2Sum + dice3Sum + dice4Sum + dice5Sum;
			}
			if(player === 2){
				chansS2.innerHTML = dice1Sum + dice2Sum + dice3Sum + dice4Sum + dice5Sum;
				plats = 'Yatzy';
			}
		}
		else if(round === 17){//runda 17 yatzy
			checkSum = checkYatzy(dice1Sum,dice2Sum,dice3Sum,dice4Sum,dice5Sum)
			if(player === 1){
				yatzyS1.innerHTML = checkSum;
			}
			if(player === 2){
				yatzyS2.innerHTML = checkSum;
				plats = '';
			}
		}
		
		
		dice1Sum = 0;
		dice2Sum = 0;
		dice3Sum = 0;
		dice4Sum = 0;
		dice5Sum = 0;
		nrOfThrow = 0;
		check1 = document.getElementById("checkbox1").checked=false;
		check2 = document.getElementById("checkbox2").checked=false;
		check3 = document.getElementById("checkbox3").checked=false;
		check4 = document.getElementById("checkbox4").checked=false;
		check5 = document.getElementById("checkbox5").checked=false;
		if(player === 1){
			player = 2;
			upperSumP1 = upperSumP1 + checkSum;
			
		}
		else if(player === 2){		
			player = 1;
			round++;
			upperSumP2 = upperSumP2 + checkSum;
		}
		
		
		if(round < 18)
		{
			text.innerHTML = 'Spelare ' + player + ' Slå första slaget på ' + plats;
		}
		else
		{
			totsumS1.innerHTML = upperSumP1;
			totsumS2.innerHTML = upperSumP2;
			var winner = checkWinner(upperSumP1,upperSumP2)
			if(winner === 0){
				text.innerHTML = 'Spelet är slut, det blev oavgjort!!';
			}
			else{
				text.innerHTML = 'Spelet är slut, spelare ' + winner + ' vann';
			}
		}
	}
	else{
		if(round < 18)
		{
			nrOfThrow++
			text.innerHTML = 'Spelare ' + player + ' slå slag nummer ' + (nrOfThrow + 1) + ' på ' + plats;
		}
	}
	
	
	
	
	//console.log('summa p1 ' + upperSumP1 + ' summa p2 ' +upperSumP2);

  };
  
  
 //Funktioner för att kolla och räkna ihop tärningarna------------------------------------------
  
  //kolla om rätt tärningar finns och räknar ihop, använs från ettor till sexor.
  function checkValue(value,dice1,dice2,dice3,dice4,dice5){
  	var sum = 0;
  	
  	if(dice1 === value){
  		sum = dice1;	
  	}
  	if(dice2 === value){
  		sum = sum + dice2;	
  	}
  	if(dice3 === value){
  		sum = sum + dice3;	
  	}
  	if(dice4 === value){
  		sum = sum + dice4;	
  	}
  	if(dice5 === value){
  		sum = sum + dice5;	
  	}
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }

  	//kolla om det finns ett par, och kollar efter det största
      function checkPair(dice1,dice2,dice3,dice4,dice5){
  	var sum = 0;
  	
  	if(dice1 === dice2)
  	{
  		sum = dice1 + dice2;	
  	}
  	else if(dice1 === dice3){
  		sum = dice1 + dice3;	
  	}
  	else if(dice1 === dice4){
  		sum = dice1 + dice4;	
  	}
  	else if(dice1 === dice5){
  		sum = dice1 + dice5;	
  	}
  	
  	//-----------------------------
  	
  	if(dice2 === dice3)
  	{
  		if(sum < dice2 + dice3){
  			sum = dice2 + dice3;
  		}
  	}
  	else if(dice2 === dice4){
  		if(sum < dice2 + dice4){
  			sum = dice2 + dice4;
  		}	
  	}
  	else if(dice2 === dice5){
  		if(sum < dice2 + dice5){
  			sum = dice2 + dice5;
  		}
  	}

  	//---------------------------------
  	
  	
  	if(dice3 === dice4)
  	{
  		if(sum < dice3 + dice4){
  			sum = dice3 + dice4;
  		}
  	}
  	else if(dice3 === dice5)
  	{
  		if(sum < dice3 + dice5){
  			sum = dice3 + dice5;
  		}
  	}
  	
  	//-------------------------------
  	
  	if(dice4 === dice5)
  	{
  		if(sum < dice4 + dice5){
  			sum = dice4 + dice5;
  		}
  	}
  	
  	
  	
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  
  
  
  //Kollar om det finns två par
  function checkTwoPair(dice1,dice2,dice3,dice4,dice5){
  	var sum = 0;
  	
  	if(dice1 === dice2 && dice3 === dice4){
  		sum = dice1 + dice2 + dice3 + dice4;
  	}
  	if(dice1 === dice2 && dice3 === dice5){
  		if(sum < dice1 + dice2 + dice3 + dice5){
  			sum = dice1 + dice2 + dice3 + dice5;
  		}
  	}
  	if(dice1 === dice2 && dice4 === dice5){
  		if(sum < dice1 + dice2 + dice4 + dice5){
  			sum = dice1 + dice2 + dice4 + dice5;
  		}
  	}
  	//-------------------
  	
  	if(dice1 === dice3 && dice4 === dice5){
  		if(sum < dice1 + dice3 + dice4 + dice5){
  			sum = dice1 + dice3 + dice4 + dice5;
  		}
  	}
  	if(dice1 === dice3 && dice2 === dice5){
  		if(sum < dice1 + dice3 + dice2 + dice5){
  			sum = dice1 + dice3 + dice2 + dice5;
  		}
  	}
  	if(dice1 === dice3 && dice2 === dice4){
  		if(sum < dice1 + dice3 + dice2 + dice4){
  			sum = dice1 + dice3 + dice2 + dice4;
  		}
  	}
  	//--------------------
  	
  	if(dice1 === dice4 && dice2 === dice5){
  		if(sum < dice1 + dice4 + dice2 + dice5){
  			sum = dice1 + dice4 + dice2 + dice5;
  		}
  	}
  	if(dice1 === dice4 && dice3 === dice5){
  		if(sum < dice1 + dice4 + dice3 + dice5){
  			sum = dice1 + dice4 + dice3 + dice5;
  		}
  	}
  	if(dice1 === dice4 && dice2 === dice3){
  		if(sum < dice1 + dice4 + dice2 + dice3){
  			sum = dice1 + dice4 + dice2 + dice3;
  		}
  	}
  	
  	//--------------------
  	
  	if(dice1 === dice5 && dice2 === dice3){
  		if(sum < dice1 + dice5 + dice2 + dice3){
  			sum = dice1 + dice5 + dice2 + dice3;
  		}
  	}
  	if(dice1 === dice5 && dice3 === dice4){
  		if(sum < dice1 + dice5 + dice3 + dice4){
  			sum = dice1 + dice5 + dice3 + dice4;
  		}
  	}
  	if(dice1 === dice5 && dice2 === dice4){
  		if(sum < dice1 + dice5 + dice2 + dice4){
  			sum = dice1 + dice5 + dice2 + dice4;
  		}
  	}
  	
  	//----------------------
  	
  	if(dice2 === dice3 && dice4 === dice5){
  		if(sum < dice2 + dice3 + dice4 + dice5){
  			sum = dice2 + dice3 + dice4 + dice5;
  		}
  	}
  	if(dice2 === dice4 && dice3 === dice5){
  		if(sum < dice2 + dice4 + dice3 + dice5){
  			sum = dice2 + dice4 + dice3 + dice5;
  		}
  	}
  	if(dice2 === dice5 && dice3 === dice4){
  		if(sum < dice2 + dice3 + dice4 + dice5){
  			sum = dice2 + dice3 + dice4 + dice5;
  		}
  	}
  	
  	
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  
  
  
  //kollar det största tretalet
  function checkTriss(dice1,dice2,dice3,dice4,dice5){
  	var sum = 0;
  	
  	if(dice1 === dice2 && dice1 === dice3){
  		sum = dice1 + dice2 + dice3;	
  	}
  	else if(dice1 === dice2 && dice1 === dice4){
  		if(sum < dice1 + dice2 + dice4){
  			sum = dice1 + dice2 + dice4;
  		}
  	}
  	else if(dice1 === dice2 && dice1 === dice5){
  		if(sum < dice1 + dice2 + dice5){
  			sum = dice1 + dice2 + dice5;
  		}
  	}
  	else if(dice1 === dice3 && dice1 === dice4){
  		if(sum < dice1 + dice3 + dice4){
  			sum = dice1 + dice3+ dice4;
  		}
  	}
  	else if(dice1 === dice3 && dice1 === dice5){
  		if(sum < dice1 + dice3 + dice5){
  			sum = dice1 + dice3+ dice5;
  		}
  	}
  	else if(dice1 === dice4 && dice1 === dice5){
  		if(sum < dice1 + dice4 + dice5){
  			sum = dice1 + dice4+ dice5;
  		}
  	}
  	//-------------------------------------
  	
  	if(dice2 === dice3 && dice2 === dice4){
  		if(sum < dice2 + dice3 + dice4){
  			sum = dice2 + dice3 + dice4;
  		}
  	}
  	else if(dice2 === dice3 && dice2 === dice5){
  		if(sum < dice2 + dice3 + dice5){
  			sum = dice2 + dice3 + dice5;
  		}
  	}
  	else if(dice2 === dice4 && dice2 === dice5){
  		if(sum < dice2 + dice4 + dice5){
  			sum = dice2 + dice4 + dice5;
  		}
  	}
  	
  	//----------------------------------------
  	
  	if(dice3 === dice4 && dice3 === dice5){
  		if(sum < dice3 + dice4 + dice5){
  			sum = dice3 + dice4 + dice5;
  		}
  	}

  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5 + 'summa ' + sum);
  	  return sum;
  		  
  }
  
  //fyrtal
  function checkFyrtal(dice1,dice2,dice3,dice4,dice5){
  	var sum = 0;
  	
  	if(dice1 === dice2 && dice1 === dice3 && dice1 === dice4){
  		sum = dice1 + dice2 + dice3 + dice4;
  	}
  	if(dice1 === dice2 && dice1 === dice3 && dice1 === dice5){
  		if(sum < dice1 + dice2 + dice3 + dice5){
  			sum = dice1 + dice2 + dice3 + dice5;
  		}
  	}
  	if(dice2 === dice3 && dice2 === dice4 && dice2 === dice5){
  		if(sum < dice2 + dice3 + dice4 + dice5){
  			sum = dice2 + dice3 + dice4 + dice5;
  		}
  	}
  	if(dice3 === dice4 && dice3 === dice5 && dice3 === dice1){
  		if(sum < dice3 + dice4 + dice5 + dice1){
  			sum = dice3 + dice4 + dice5 + dice1;
  		}
  	}
  	if(dice3 === dice5 && dice3 === dice1 && dice3 === dice2){
  		if(sum < dice3 + dice5 + dice1 + dice2){
  			sum = dice3 + dice5 + dice1 + dice2;
  		}
  	}
  	if(dice4 === dice5 && dice4 === dice1 && dice4 === dice2){
  		if(sum < dice4 + dice5 + dice1 + dice2){
  			sum = dice4 + dice5 + dice1 + dice2;
  		}
  	}
  	if(dice4 === dice1 && dice4 === dice2 && dice4 === dice3){
  		if(sum < dice4 + dice1 + dice2 + dice3){
  			sum = dice4 + dice1 + dice2 + dice3;
  		}
  	}
  	
  	
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  //liten stege
  function checkSmall(dice1,dice2,dice3,dice4,dice5){

  	var sum = 0, one = false, two = false, three = false, four = false, five = false; 

  	  if(dice1 === 1 || dice2 === 1 || dice3 === 1 || dice4 === 1 || dice5 === 1){
  	  	one = true;	  
  	  }
  	  if(dice1 === 2 || dice2 === 2 || dice3 === 2 || dice4 === 2 || dice5 === 2){
  	  	two = true;	  
  	  }
  	  if(dice1 === 3 || dice2 === 3 || dice3 === 3 || dice4 === 3 || dice5 === 3){
  	  	three = true;	  
  	  }
  	  if(dice1 === 4 || dice2 === 4 || dice3 === 4 || dice4 === 4 || dice5 === 4){
  	  	four = true;	  
  	  }
  	  if(dice1 === 5 || dice2 === 5 || dice3 === 5 || dice4 === 5 || dice5 === 5){
  	  	five = true;	  
  	  }
  	  

  	  if(one === true && two === true && three === true && four === true && five === true){
  	  	sum = 15;	  
  	  }
  	  	  
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  //stor stege
  function checkBig(dice1,dice2,dice3,dice4,dice5){

  	var sum = 0, two = false, three = false, four = false, five = false, six = false; 

  	  
  	  if(dice1 === 2 || dice2 === 2 || dice3 === 2 || dice4 === 2 || dice5 === 2){
  	  	two = true;	  
  	  }
  	  if(dice1 === 3 || dice2 === 3 || dice3 === 3 || dice4 === 3 || dice5 === 3){
  	  	three = true;	  
  	  }
  	  if(dice1 === 4 || dice2 === 4 || dice3 === 4 || dice4 === 4 || dice5 === 4){
  	  	four = true;	  
  	  }
  	  if(dice1 === 5 || dice2 === 5 || dice3 === 5 || dice4 === 5 || dice5 === 5){
  	  	five = true;	  
  	  }
  	  if(dice1 === 6 || dice2 === 6 || dice3 === 6 || dice4 === 6 || dice5 === 6){
  	  	six = true;	  
  	  }
  	  

  	  if(six === true && two === true && three === true && four === true && five === true){
  	  	sum = 20;	  
  	  }
  	  	  
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  
  //kåk
  function checkHouse(dice1,dice2,dice3,dice4,dice5){

  	var sum = 0;
  	
  	
  	if(dice1 === dice2 && dice1 === dice3 && dice4 === dice5)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice1 === dice2 && dice1 === dice4 && dice3 === dice5)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice1 === dice3 && dice1 === dice4 && dice2 === dice5)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice1 === dice4 && dice1 === dice5 && dice2 === dice3)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice1 === dice2 && dice1 === dice5 && dice3 === dice4)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice1 === dice3 && dice1 === dice5 && dice2 === dice4)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice2 === dice3 && dice2 === dice4 && dice1 === dice5)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice2 === dice3 && dice2 === dice5 && dice1 === dice4)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice2 === dice4 && dice2 === dice5 && dice1 === dice3)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	if(dice3 === dice4 && dice3 === dice5 && dice1 === dice2)
  	{
  		
  		sum = dice1 + dice2 + dice3 + dice4 + dice5;
  	}
  	
  	
  	  	  
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  
  function checkYatzy(dice1,dice2,dice3,dice4,dice5){

  	var sum = 0;
  	
  	if(dice1 === dice2 && dice1 === dice3 && dice1 === dice4 && dice1 === dice5){
  		sum = 50;
  	}
  		
  	  	  
  	console.log(dice1 + ' ' + dice2 + ' '  + dice3 + ' '  + dice4 + ' '  + dice5);
  	  return sum;
  		  
  }
  
  function checkWinner(p1,p2){
  	  var winner;
  	  
  	  if(p1<p2){
  	  	winner = 2;	  
  	  }
  	  else if(p1>p2){
  	  	winner = 1;	  
  	  }
  	  else
  	  {
  	  	  winner = 0;
  	  }
  	  return winner;
  	  
  } 
});




