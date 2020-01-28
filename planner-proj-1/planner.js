//display month divs as buttons are clicked

$("#janClick").on("click", function() {
    $(".months").hide(500);
    $("#janDisplay").show(500);
});

//append typed books to current div

//Jan Books to be saved

$("#bookSubmit").on("click", function() {
    var book = $("#bookInput").val();
    var bookSaved = $("<option>").append(book);
    $("#janBookHolder").prepend(bookSaved);
    $("#janBookHolder").show(500);
});