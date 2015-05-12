<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
	<title>Memory Game !!</title>

	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
</head>
<body>
	<div class="container">
		<div class="blockLeft">
			<div class="cardCont" id="cardCont">
			<?php 
				for($x=0; $x<4; $x++){
					for($y=0; $y<4; $y++){
						echo '<div class="cell closed" 
						data-color=""
						id="'.$x.$y.'"></div>';
					}
				}

			?>

			</div>
			
		</div>
		<div class="blockRight">
			<img src="img/logo.png" class="logo">	
			<p class="scoreCard">Score : <span id="score" class="score"></span></p>
			<p >Score logic: +2 for correct selection  and -1 for wrong ones. Default score would be 100.</p>
			<p class="button"><input type="button" value="Reset" id='reset' class="myButton reset"></p>
			
			<input type="button" value="complete"  class="myButton " style="display:none;" onClick="javascript:complete();">
			
			
		</div>
	</div>
	<div class="submitForm">
		<form type="" method="POST" id="submitScoreForm" action="form.php">
		<h2>Well Done! <br/>You have scored <span class="score"></span>!!</h2>
		<p>Submit your score</p>
		<p><input type="text" name="fullname" placeholder="Full Name" ></p>
		
		<p><input type="email" name="email" placeholder="Email" ></p>
		<input type="hidden" name="score" id="scoreVal" value="" >
		<input type="hidden" name="appid" value="memory-game" >
		<p class="button"><input type="submit" value="Submit" id="submitScore"  class="myButton">
		<input type="button" value="Reset" class="resetForm myButton" >
		</p>
		
		</p>
	
	</div>
	<div class="submitFormResponse "></div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="script.js"></script>
	
</body>
</html>