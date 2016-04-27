$(document).ready(function(){
   
   //Ask buttion response as a result of user's click. 
   $("#ask").click(function(){
       
       //String holds users input trimmed of whitespace
       var userInput = ($(".questionSlot").val()).trim(); 
       
       //If String is empty
       if(userInput === ""){
                    
                    $("#q8").addClass("invalid");
                    
                    //Removes question button and question slot
                    $("#ask").addClass("hidden");
                    $(".questionSlot").hide(); 
                    
                    //Displays ask again question button
                    $("#askAgain").removeClass("hidden");
                    
                    //Response is displayed specifically requesting user for question
                    $("#q8").effect("shake");
                    $("#response").removeClass("hidden");
                    $("#response").html("Question foo'...Can you ask one?");
                    
                    
                    

       }
       //Otherwise if String is NOT empty
       else{
            
            //Removes invalid class if necessary
            $("#q8").removeClass("invalid");
            
            //8-ball DIV shakes 
            $(".q8").effect("shake");
            
            //Question slot is hidden
            $(".questionSlot").hide(); 
            
            //Data from Server is fetched
            $.post( "8ball.php")
            
                //Once all is "done" being loaded, response from php is retrieved
                .done(function( data ) {
                    
                    //Displayes response slot
                    $("#response").removeClass("hidden");
                    
                    //Changes inner html of response to data sent by php from server
                    $("#response").html(data);
                    
                    //ask button re-appears and ask again is hidden
                    $("#ask").addClass("hidden");
                    $("#askAgain").removeClass("hidden");

            });
        }
   });
   
   //Results from "ask AGAIN" button being clicked
   $("#askAgain").click(function(){
       
       //Removes invalid class if necessary
        $("#q8").removeClass("invalid");
            
       //8-ball DIV  shakes
       $(".q8").effect("shake");
       
       //Response box is hidden
       $("#response").addClass("hidden");
       
       //Question slot re-appears
       $(".questionSlot").show(); 
       
       //Value of Question box is empty
       $(".questionSlot").val("");
       
       //Ask again button is hidden and ask button is shown
       $("#askAgain").addClass("hidden"); 
       $("#ask").removeClass("hidden");
       
       
   });
    
    
    
    
});