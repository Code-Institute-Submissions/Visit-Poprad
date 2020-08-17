//Find jQuery method from https://api.jquery.com/find/

$(document).ready(function() {
    $(".card").mouseenter(function() {
        $(this).find(".card-text").slideDown(2000); 
    });
    $(".card").mouseout(function() {
        $(this).find(".card-text").slideUp(500);
    });
}); 


 