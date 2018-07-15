//User interface logic
$(document).ready(function() {
    $("form#myForm").click(function(event) {
        event.preventDefault();
         var number= $("#number").val();
         var result= parseInt(number);
         pingPong(result);

            numbersToBePingPonged.forEach(function(result){
            $("#output").append("<li>"+ result + "<li>");
            });
        });
    });    
// Business  Logic
    var numbersToBePingPonged = [];
     function pingPong(result){
        for (var i=1; i <= result; i++) {


            if (i % 15 === 0){
            numbersToBePingPonged.push("pingPong");
              }
              else if (i % 3 === 0 ) {

            numbersToBePingPonged.push("ping");
             }
               else if (i % 5 === 0) {

            numbersToBePingPonged.push("pong");
            }
             else {
            numbersToBePingPonged.push(i);
           }
        }  
    }

   