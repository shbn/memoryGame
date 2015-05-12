<?php 

require('mysql.php');

if (is_ajax()) {
  if (isset($_POST["action"]) && !empty($_POST["action"])) { 
  	$quer="Insert into score (name,email,score,appid) values('".$_POST["fullname"]."','".$_POST["email"]."','".$_POST["score"]."','".$_POST["appid"]."')";
  	//echo $quer;
  	mysql_query($quer);
  	$rankQ = "SELECT id, name, score, FIND_IN_SET( score, (    
  		SELECT GROUP_CONCAT( score
			ORDER BY score DESC ) 
			FROM score )
			) AS rank
			FROM score
			WHERE score =  '".$_POST["score"]."' and email ='".$_POST["email"]."' limit 0,1";
			$rankRes = mysql_query($rankQ );
			$rankResRow = mysql_fetch_array($rankRes );
			echo "Thanks for submitting your score!.<br/>Your postion in leaderboard is  ".$rankResRow ['rank']." !";
			
  }
 
  
}


function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}



?>