//User interface logic
$(document).ready(function() {
    $("form#myForm").submit(function(event) {
        event.preventDefault();
         var number= parseInt (("input#formNumber").val());
         pingPong(number);

         numbersToBePingPonged.forEach(function(number){
         $("#output").append("<li>"+ number + "<li>");
         });
    });
});    


// Business  Logic
    var numbersToBePingPonged = [];

    function pingPong(number){
        for (var i=1; i <= number; i++) {

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
         return numbersToBePingPonged;
    }; 

   