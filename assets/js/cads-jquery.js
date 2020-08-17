//Find jQuery method from https://api.jquery.com/find/

$(document).ready(function() {
    $(".card").mouseenter(function() {
        $(this).find(".card-text").removeClass("card-text")
    });
});