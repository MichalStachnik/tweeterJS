$(document).ready(function(){
    
    
    $('#input').keyup(function(){
        
        var numLeft = 150 - $(this).val().length;
        
        if(numLeft <= 0){
            $('#output').css("color", "red");
        }
        if(numLeft > 0){
            $('#output').css("color", "slategray");
        }
        
        $('#output').text(numLeft + ' characters left');
        
        
    });
    
    
    
        
    var submitClick = function(){};
    
    //when button clicked add a new li with the message
    $('#submit').click(function(){
        
        //checks to see if input contains text
        if($('#input').val().length > 0){
            var today = new Date();
            var hourNow = today.getHours();
            var minNow = today.getMinutes();
            var secNow = today.getSeconds();
            //add zero's placeholder if less than 10
            if(hourNow < 10){
                hourNow = '0' + hourNow;
            }
            if(minNow < 10){
                minNow = '0' + minNow;
            }
            if(secNow < 10){
                secNow = '0' + secNow;
            }

            //get the value of textarea
            var input = $('#input').val();


            $('#messages').prepend('<li><span>' + hourNow + ':' + minNow + ':' + secNow + '</span><p>' + input + '</p></li>');


            //just an idea
            //$('#messages').hide().prepend('<li>' + input + '</li>').fadeIn("slow");


            //clears fields
            $('#input').val('');
            $('#output').text('');

            }
    });
    
    
    $('#input').keypress(function(e){
       
        if(e.keyCode==13){
            
            //cancels going to a new line
            e.preventDefault();
            
            //checks to see if inputfield is populated
            if($('#input').val().length > 0){
            
            var today = new Date();
            var hourNow = today.getHours();
            var minNow = today.getMinutes();
            var secNow = today.getSeconds();

            //add zero's placeholder if less than 10
            if(hourNow < 10){
                hourNow = '0' + hourNow;
            }
            if(minNow < 10){
                minNow = '0' + minNow;
            }
            if(secNow < 10){
                secNow = '0' + secNow;
            }

            //get the value of textarea
            var input = $('#input').val();


            $('#messages').prepend('<li><span>' + hourNow + ':' + minNow + ':' + secNow + '</span><p>' + input + '</p></li>');


            //just an idea
            //$('#messages').hide().prepend('<li>' + input + '</li>').fadeIn("slow");


            //clears fields
            $('#input').val('').focus();
            $('#output').text('');

        }
        }
        
    });

});