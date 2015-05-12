<?php

$hostname = "localhost";
$username = "root";
$password = "password";

$link =  mysql_connect($hostname,$username,$password) ;
if (!$link) {
    die('Could not connect: ' . mysql_error());
} 
mysql_select_db("memorygame");
?>