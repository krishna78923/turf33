<?php

if(isset($_SESSION["username"])&&isset($_SESSION["password"])){
	session_unset();
	session_destroy();

	header("Location: http://localhost:8080/FinalYearProject/ordermanzer/login.html");
}



?>