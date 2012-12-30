<?php $title='Template for testprogram'; include(__DIR__ . '/../incl/header.php'); ?>

<link rel="stylesheet/less" type="text/css" href="style.less">
<script src="../js/less.js"></script>
<script src="js/modernizr.js"></script>
<h1 id='h1'>Min Javascript sida</h1>
<?php include(__DIR__ . '/../incl/meny.php'); ?>
</head>
<body>



<div id='flash'>


  <div id='all'>

	<h1>Yatzy</h1>		
	<p>Slå 3 gånger var och få något bra</P>
	
    <table id='diceTable'>
    <tr>
	<td><div id='d1' class='dice one'></div></td>
	<td><div id='d2' class='dice two'></div></td>
	<td><div id='d3' class='dice three'></div></td>
	<td><div id='d4' class='dice four'></div></td>
	<td><div id='d5' class='dice five'></div></td>
     </tr>
     <tr>
	     <form action="">
		<td><input id='checkbox1' type="checkbox" name="check1" value="check1">Behåll</td>
		<td><input id='checkbox2' type="checkbox" name="check2" value="check2">Behåll</td>
		<td><input id='checkbox3' type="checkbox" name="check3" value="check3">Behåll</td>
		<td><input id='checkbox4' type="checkbox" name="check4" value="check4">Behåll</td>
		<td><input id='checkbox5' type="checkbox" name="check5" value="check5">Behåll</td>
	     </form>
     </tr>
     </table>
     

     
    <form>
   	 <input id='roll' type='button' value='Roll' /> <p id='text' class='red'>Spelare 1 slå första slaget på ettor</p>
   </form>
   <hr>
   
   <table class='points'>
	   <tr>
		   <td class='td'></td>
		   <td class='td'><p>Spelare 1</p></td>
		   <td><p>Spelare 2</p></td>
	   </tr>
	   </table>
	   <hr>
	   <table class='points'>
	   <tr>
		   <td><p>Ettor</p></td>
		   <td><p id='oneS1'>0</p></td>
		   <td><p id='oneS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Tvåor</p></td>
		   <td><p id='twoS1'>0</p></td>
		   <td><p id='twoS2'>0</p></td>
	   </tr>
	   <tr>
		   <td class='td'><p>Treor</p></td>
		   <td class='td'><p id='threeS1'>0</p></td>
		   <td><p id='threeS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Fyror</p></td>
		   <td><p id='fourS1'>0</p></td>
		   <td><p id='fourS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Femmor</p></td>
		   <td><p id='fiveS1'>0</p></td>
		   <td><p id='fiveS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Sexor</p></td>
		   <td><p id='sixS1'>0</p></td>
		   <td><p id='sixS2'>0</p></td>
	   </tr>
	   </tr>
	   </table>
	   <hr>
	   <table class='points'>
	   <tr>
	   	   <td class='td'><p><b>Summa</p></td>
		   <td class='td'><p id='sumS1'><b>0</p></td>
		   <td><p id='sumS2'><b>0</p></td>
	   </tr>
	   	   <tr>
	   	   <td><p><b>Bonus</p></td>
		   <td><p id='bonS1'><b>0</p></td>
		   <td><p id='bonS2'><b>0</p></td>
	   </tr>
	   </tr>
	   </table>
	   <hr>
	   <table class='points'>
	   <tr>
		   <td class='td'><p>Ett par</p></td>
		   <td class='td'><p id='parS1'>0</p></td>
		   <td><p id='parS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Två par</p></td>
		   <td><p id='twoparS1'>0</p></td>
		   <td><p id='twoparS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Tretal</p></td>
		   <td><p id='tretalS1'>0</p></td>
		   <td><p id='tretalS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Fyrtal</p></td>
		   <td><p id='fyrtalS1'>0</p></td>
		   <td><p id='fyrtalS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Liten stege</p></td>
		   <td><p id='smallS1'>0</p></td>
		   <td><p id='smallS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Stor stege</p></td>
		   <td><p id='bigS1'>0</p></td>
		   <td><p id='bigS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Kåk</p></td>
		   <td><p id='houseS1'>0</p></td>
		   <td><p id='houseS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Chans</p></td>
		   <td><p id='chansS1'>0</p></td>
		   <td><p id='chansS2'>0</p></td>
	   </tr>
	   <tr>
		   <td><p>Yatzy</p></td>
		   <td><p id='yatzyS1'>0</p></td>
		   <td><p id='yatzyS2'>0</p></td>
	   </tr>
	   </table>
	   <hr>
	   <table class='points'>
	   <tr>
	   	   <td class='td'><p><b>Summa</p></td>
		   <td class='td'><p id='totsumS1'><b>0</p></td>
		   <td><p id='totsumS2'><b>0</p></td>
	   </tr>
   </table>   
   
   
  </div> 
   
   
   
   
   

</div>
 
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
