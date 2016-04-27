<?php

    require_once "connection.php";
    
    
        
    
        
    $sql = "SELECT * FROM responses ORDER BY RAND() LIMIT 1";
    $result = $cxn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        $row = $result->fetch_assoc();
        echo "<p> ". $row["text"] . "</p>";

    }   
    else {
        echo "0 results";
    }

    

?>
