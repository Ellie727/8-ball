<?php
	
	//Connection file to Database
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "8ball";
    $cxn = new mysqli($host,$username,$password,$dbname);
    
    if($cxn->connect_error){
        die("Connection failed: " . $cxn->connect_error);
    }
    else{
       
       
    }
?>