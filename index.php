<!DOCTYPE html>
<html>
    <head>
        
        <!---link to custom stylesheet -->
        <link rel="stylesheet" type="text/css" href="styles.css">
        
        
        <!---Link to AJAX, JQUERY Libraries -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        
        <!---Google Font-->
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>

        
    </head>

    <body>
        
        <div class="center q8" id ="q8" >
            <input type="text" class="center questionSlot" id="slot" placeholder="Question..." /><br>
            <div id="response" class="hidden responseBox center"></div>
            
            <input type="submit" class= "center askButton" id="ask" value="Ask">
            <input type="submit" class= "center askButton hidden" id="askAgain" value="Try Again">                      
        </div>
        <script src="bin/js/scripts.js"></script>
       

    </body>
</html>
